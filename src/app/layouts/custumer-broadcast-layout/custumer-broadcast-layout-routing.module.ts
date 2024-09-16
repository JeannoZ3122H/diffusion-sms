import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
} from '@angular/router';

import {
  SingleBroadcastSmsSendPreviewComponent,
} from '../../components/custumer-broadcast-components/single-broadcast-sms-send-preview/single-broadcast-sms-send-preview.component';
import {
  SingleSmsSendPreviewComponent,
} from '../../components/custumer-broadcast-components/single-sms-send-preview/single-sms-send-preview.component';
import {
  AddGroupContactComponent,
} from '../../pages/global-user-pages/card-address-base/add-group-contact/add-group-contact.component';
import {
  AddSingleContactComponent,
} from '../../pages/global-user-pages/card-address-base/add-single-contact/add-single-contact.component';
import {
  ImportSingleContactComponent,
} from '../../pages/global-user-pages/card-address-base/import-single-contact/import-single-contact.component';
import {
  UserCardAddressComponent,
} from '../../pages/global-user-pages/card-address-base/user-card-address/user-card-address.component';
import {
  NewBroadcastSmsSendComponent,
} from '../../pages/global-user-pages/user-broadcast-base/new-broadcast-sms-send/new-broadcast-sms-send.component';
import {
  UserBroadcastSmsComponent,
} from '../../pages/global-user-pages/user-broadcast-base/user-broadcast-sms/user-broadcast-sms.component';
import {
  UserDashboardComponent,
} from '../../pages/global-user-pages/user-dashboard/user-dashboard.component';
import {
  UserProfilComponent,
} from '../../pages/global-user-pages/user-profil/user-profil.component';
import {
  NewSmsSendComponent,
} from '../../pages/global-user-pages/user-sms-base/new-sms-send/new-sms-send.component';
import {
  UserSmsComponent,
} from '../../pages/global-user-pages/user-sms-base/user-sms/user-sms.component';

const routes: Routes = [
    {
        path: 'web.sms.custumer-broadcast.welcome',
        component: UserDashboardComponent
    },
    {
        path: 'web.sms.custumer-broadcast.profile',
        component: UserProfilComponent
    },

// 😇 *** START CARD ADDRESS 😇 //
    {
        path: 'web.sms.custumer-broadcast.card-address',
        component: UserCardAddressComponent
    },
    {
        path: 'web.sms.custumer-broadcast.add-single-contact-in-card-address',
        component: AddSingleContactComponent
    },
    {
        path: 'web.sms.custumer-broadcast.import-contact-in-card-address',
        component: ImportSingleContactComponent
    },
    {
        path: 'web.sms.custumer-broadcast.add-group-contact-in-card-address',
        component: AddGroupContactComponent
    },
    // 😇 *** END CARD ADDRESS 😇 //

// 😇 *** START SMS 😇 //
    {
        path: 'web.sms.custumer-broadcast.sms',
        component: UserSmsComponent
    },
    {
        path: 'web.sms.custumer-broadcast.sms-send-to',
        component: NewSmsSendComponent
    },
    {
        path: 'web.sms.custumer-broadcast.sms-send-preview',
        component: SingleSmsSendPreviewComponent
    },
    // 😇 *** END SMS 😇 //
// 😇 *** START BROADCAST SMS 😇 //
    {
        path: 'web.sms.custumer-broadcast.broadcast-sms',
        component: UserBroadcastSmsComponent
    },
    {
        path: 'web.sms.custumer-broadcast.broadcast-sms-send-to',
        component: NewBroadcastSmsSendComponent
    },
    {
        path: 'web.sms.custumer-broadcast.broadcast-sms-send-preview',
        component: SingleBroadcastSmsSendPreviewComponent
    },
    // 😇 *** END BROADCAST SMS 😇 //
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustumerBroadcastLayoutRoutingModule { }
