import { Component, input } from '@angular/core';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-user-profil',
  standalone: true,
  imports: [],
  templateUrl: './user-profil.component.html',
  styleUrl: './user-profil.component.scss',
})
export class UserProfilComponent {
  user = input.required<User>();
}
