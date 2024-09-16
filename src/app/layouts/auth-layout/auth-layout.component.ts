import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthComponent } from '../../pages/auth/auth.component';

@Component({
    selector: 'app-auth-layout',
    standalone: true,
    imports: [
        AuthComponent,
        RouterModule,
    ],
    templateUrl: './auth-layout.component.html',
    styleUrl: './auth-layout.component.css'
})
export class AuthLayoutComponent {

}
