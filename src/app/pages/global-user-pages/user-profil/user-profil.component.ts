import { Component } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

import { MaterialModule } from '../../../material-module';

@Component({
    selector: 'app-user-profil',
    standalone: true,
    imports: [MaterialModule, FormsModule, ReactiveFormsModule],
    templateUrl: './user-profil.component.html',
    styleUrl: './user-profil.component.css'
})
export class UserProfilComponent {

}
