import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { FileUploadModule } from '@iplab/ngx-file-upload';

import { AdminLayoutModule } from './layouts/admin-layout/admin-layout.module';
import { AuthLayoutModule } from './layouts/auth-layout/auth-layout.module';
import {
  CustumerBroadcastLayoutModule,
} from './layouts/custumer-broadcast-layout/custumer-broadcast-layout.module';
import { MaterialModule } from './material-module';

// import * as fr from '@angular/common/locales/fr';
@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        AuthLayoutModule,
        AdminLayoutModule,
        CustumerBroadcastLayoutModule,
        RouterModule,
        MaterialModule,
        FormsModule,
        HttpClientModule,
        FileUploadModule
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
    title = 'diffusion-sms-web-app-ai';
}
