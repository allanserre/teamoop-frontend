import { Component, ElementRef, Input, OnChanges, OnInit, Renderer2, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-svg-file',
  standalone: true,
  imports: [],
  template: '',
})
export class SvgFileComponent implements OnInit, OnChanges {
  @Input() svgSrc!: string;
  @Input() width: string | null = null;
  @Input() height: string | null = null;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.loadSvg();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['svgSrc']) {
      this.loadSvg();
    }
  }

  private loadSvg(): void {
    if (!this.svgSrc) return;

    fetch(this.svgSrc)
      .then(response => response.text())
      .then(svgContent => {
        this.el.nativeElement.innerHTML = svgContent;
        const svgElement = this.el.nativeElement.querySelector('svg');
        if (svgElement) {
          if (this.width !== null) {
            this.renderer.setAttribute(svgElement, 'width', this.width);
          }
          if (this.height !== null) {
            this.renderer.setAttribute(svgElement, 'height', this.height);
          }
        }
      })
      .catch(error => {
        console.error('Error loading SVG:', error);
      });
  }
}
