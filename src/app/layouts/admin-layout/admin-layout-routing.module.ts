import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
} from '@angular/router';

import {
  ListAccountAdminComponent,
} from '../../pages/global-admin-pages/admin-account/list-account-admin/list-account-admin.component';
import {
  AdminProfilComponent,
} from '../../pages/global-admin-pages/admin-profil/admin-profil.component';
import {
  DashboardComponent,
} from '../../pages/global-admin-pages/dashboard/dashboard.component';
import {
  BuyPackSmsComponent,
} from '../../pages/global-admin-pages/gestions/buy-pack-sms/buy-pack-sms.component';
import {
  ListHistoriqueDiffusionComponent,
} from '../../pages/global-admin-pages/historiques/list-historique-diffusion/list-historique-diffusion.component';
import {
  ListHistoriqueRechargementComponent,
} from '../../pages/global-admin-pages/historiques/list-historique-rechargement/list-historique-rechargement.component';
import {
  ListRoleComponent,
} from '../../pages/global-admin-pages/role/list-role/list-role.component';
import {
  ListAccountUserComponent,
} from '../../pages/global-admin-pages/user-account/list-account-user/list-account-user.component';

const routes: Routes = [
    {
        path: 'web.sms.admin.welcome',
        component: DashboardComponent
    },
    {
        path: 'web.sms.admin.profile',
        component: AdminProfilComponent
    },
// 📌 <!-- ====# ACCOUNT #====-->
    {
        path: 'web.sms.admin.list-admin-account',
        component: ListAccountAdminComponent
    },
    {
        path: 'web.sms.admin.list-user-account',
        component: ListAccountUserComponent
    },
    //<!-- ====# END ACCOUNT #====--> 📌
// 📌 <!-- ====# ROLE #====-->
    {
        path: 'web.sms.admin.list-role',
        component: ListRoleComponent
    },
    //<!-- ====# END ROLE #====--> 📌
// 📌 <!-- ====# GESTION #====-->
    {
        path: 'web.sms.admin.gestion-pack-sms',
        component: BuyPackSmsComponent
    },
    {
        path: 'web.sms.admin.gestion-pack-sms',
        component: BuyPackSmsComponent
    },
    //<!-- ====# END GESTION #====--> 📌
// 📌 <!-- ====# HISTORIQUE #====-->
    {
        path: 'web.sms.admin.historique.list-broadcast-sms',
        component: ListHistoriqueDiffusionComponent
    },
    {
        path: 'web.sms.admin.historique.list-rechargement',
        component: ListHistoriqueRechargementComponent
    },
    //<!-- ====# END HISTORIQUE #====--> 📌
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminLayoutRoutingModule { }
