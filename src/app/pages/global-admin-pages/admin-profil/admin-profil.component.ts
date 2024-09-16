import { Component } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

import { MaterialModule } from '../../../material-module';

@Component({
    selector: 'app-admin-profil',
    standalone: true,
    imports: [MaterialModule, FormsModule, ReactiveFormsModule],
    templateUrl: './admin-profil.component.html',
    styleUrl: './admin-profil.component.css'
})
export class AdminProfilComponent {

}
