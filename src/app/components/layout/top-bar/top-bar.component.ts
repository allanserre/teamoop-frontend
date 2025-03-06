import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { NavigationStart, Router, RouterLink } from '@angular/router';
import { ClassicButtonComponent } from '@components/classic-button/classic-button.component';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [ClassicButtonComponent, RouterLink],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopBarComponent {
  
  showBackdrop = signal(false);

  private router = inject(Router);

  constructor() {
    console.log(this.router.url);
    
    this.router.events.subscribe((event) => {
      if(event instanceof NavigationStart){
        console.log(event.url);
        
        this.showBackdrop.set(event.url === '/')
      }
    })
  }
}
