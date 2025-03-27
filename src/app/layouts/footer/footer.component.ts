import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIcon } from '@angular/material/icon';
import { SvgFileComponent } from '../../shared/ui/svg-file/svg-file.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, MatIcon, SvgFileComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {}
