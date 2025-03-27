import { ChangeDetectionStrategy, Component, computed, ElementRef, HostListener, inject, model, signal, viewChild } from '@angular/core';
import { InputMultiSelectComponent } from '../input-multi-select/input-multi-select.component';
import { Overlay, OverlayConfig, OverlayModule, OverlayRef } from '@angular/cdk/overlay';
import { Tag } from '../../../../core/models/tag.model';
import { ChipInputProps } from '../../chips/chip-input/chip-input.component';
import { toObservable } from '@angular/core/rxjs-interop';
import { catchError, debounceTime, distinctUntilChanged, filter, of, switchMap, tap } from 'rxjs';
import { TagService } from '../../../../core/services/tag.service';
import { AsyncPipe } from '@angular/common';
import { CdkPortal } from '@angular/cdk/portal';

@Component({
  selector: 'app-project-tags-selection',
  standalone: true,
  imports: [InputMultiSelectComponent, OverlayModule, AsyncPipe, CdkPortal],
  templateUrl: './project-tags-selection.component.html',
  styleUrl: './project-tags-selection.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectTagsSelectionComponent {
  inputMultiSelect = viewChild('multiSelect', { read: ElementRef });
  portalContent = viewChild(CdkPortal);

  isOpen = signal(false);

  chips = computed<ChipInputProps[]>(() => {
    return this.tags().map(tag => {
      return {
        label: tag.name,
      };
    });
  });

  searchQuery = signal<string>('');
  searchQuery$ = toObservable(this.searchQuery);

  tags = model.required<Tag[]>();
  isLoading = signal(false);

  matchedTags = signal<Tag[]>([]);

  private overlayRef!: OverlayRef;
  private tagsService = inject(TagService);
  private overlay = inject(Overlay);

  constructor() {
    this.searchQuery$
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        tap(query => {
          if (query.trim() === '') {
            this.hide();
          }
        }),
        filter(query => query.trim() !== ''),
        tap(() => {
          if (!this.isOpen()) {
            this.showDropdown();
          }
          this.isLoading.set(true);
        }),
        switchMap(query =>
          this.tagsService.searchTags(query).pipe(
            tap(tags => this.matchedTags.set(tags)),
            catchError(() => {
              this.matchedTags.set([]);
              return of([]);
            })
          )
        ),
        // On coupe le loading après le switch map et non dans le finalyze()
        // Cela évite certains effet de bords au niveau des temps de chargement "https://medium.com/weareaize/creating-a-loading-indicator-using-rxjs-and-the-withloading-pattern-8add4500008e"
        tap(() => {
          this.isLoading.set(false);
        })
      )
      .subscribe();
  }

  private showDropdown(): void {
    this.overlayRef = this.overlay.create(this.getOverlayConfig());
    this.overlayRef.attach(this.portalContent());
    this.syncWidth();
    this.overlayRef.backdropClick().subscribe(() => this.hide());
    this.isOpen.set(true);
  }

  @HostListener('window:resize')
  public onWinResize(): void {
    this.syncWidth();
  }

  addTag(chipLabel: string) {
    this.hide();
    this.tags.update(tags => {
      tags.push({
        name: chipLabel,
        color: 'green',
      });
      return [...tags];
    });
  }

  multiSelectAddTag(chipLabel: string) {
    this.hide();
    this.searchQuery.set('');
    this.addTag(chipLabel);
  }

  removeTag(chipIndex: number) {
    this.tags.update(tags => {
      tags.splice(chipIndex, 1);
      return [...tags];
    });
  }

  private syncWidth(): void {
    if (!this.overlayRef) {
      return;
    }
    const refRectWidth = this.inputMultiSelect()!.nativeElement.getBoundingClientRect().width;
    this.overlayRef.updateSize({ width: refRectWidth + 4 });
  }

  private getOverlayConfig(): OverlayConfig {
    const positionStrategy = this.overlay
      .position()
      .flexibleConnectedTo(this.inputMultiSelect()!.nativeElement)
      .withPush(true)
      .withPositions([
        {
          originX: 'start',
          originY: 'bottom',
          overlayX: 'start',
          overlayY: 'top',
          offsetY: 8,
          offsetX: -2,
        },
        {
          originX: 'start',
          originY: 'top',
          overlayX: 'start',
          overlayY: 'bottom',
          offsetY: -8,
          offsetX: -2,
        },
      ]);

    const scrollStrategy = this.overlay.scrollStrategies.reposition();
    return new OverlayConfig({
      positionStrategy: positionStrategy,
      scrollStrategy: scrollStrategy,
      hasBackdrop: true,
      backdropClass: 'cdk-overlay-transparent-backdrop',
    });
  }

  private hide(): void {
    if (this.overlayRef === undefined) return;
    this.overlayRef.detach();
    this.isOpen.set(false);
  }
}
