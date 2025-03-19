import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '@components/layout/footer/footer.component';
import { MatIconModule } from '@angular/material/icon';
import { TopBarComponent } from '@components/layout/top-bar/top-bar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TopBarComponent, FooterComponent, MatIconModule],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'teamoop-frontend';
}
