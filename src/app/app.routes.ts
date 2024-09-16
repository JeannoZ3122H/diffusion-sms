import { Routes } from '@angular/router';

import {
  AdminLayoutComponent,
} from './layouts/admin-layout/admin-layout.component';
import {
  AuthLayoutComponent,
} from './layouts/auth-layout/auth-layout.component';
import {
  CustumerBroadcastLayoutComponent,
} from './layouts/custumer-broadcast-layout/custumer-broadcast-layout.component';
import { ForgetComponent } from './pages/forget/forget.component';
import { OoopsComponent } from './pages/ooops/ooops.component';

export const routes: Routes = [
    {
        path: "",
        redirectTo: "",
        pathMatch: "full"
    },
    {
        path: "",
        component: AuthLayoutComponent,
        children: [
            {
                path: "",
                loadChildren: () => import ("./layouts/auth-layout/auth-layout.module").then(m => m.AuthLayoutModule)
            }
        ]
    },
    {
        path: "",
        component: AdminLayoutComponent,
        children: [
            {
                path: "",
                loadChildren: () => import ("./layouts/admin-layout/admin-layout.module").then(m => m.AdminLayoutModule)
            }
        ]
    },
    {
        path: "",
        component: CustumerBroadcastLayoutComponent,
        children: [
            {
                path: "",
                loadChildren: () => import ("./layouts/custumer-broadcast-layout/custumer-broadcast-layout.module").then(m => m.CustumerBroadcastLayoutModule)
            }
        ]
    },
    {
        path: "web.sms.forgot-password",
        component: ForgetComponent
    },
    {
        path: "404-error",
        component: OoopsComponent
    },
    {
        path: "*",
        redirectTo: "/404-error"
    },
    {
        path: "**",
        redirectTo: "/404-error"
    }
    // web.diffusion-sms.welcome
];
