import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ClassicButtonComponent } from '@components/classic-button/classic-button.component';
import { NgOptimizedImage } from '@angular/common';
import { SvgFileComponent } from '@components/svg-file/svg-file.component';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [ClassicButtonComponent, RouterLink, NgOptimizedImage, SvgFileComponent],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss',
})
export class TopBarComponent {}
