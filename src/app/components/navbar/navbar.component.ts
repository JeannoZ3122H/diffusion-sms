import { Component } from '@angular/core';
import {
  Router,
  RouterModule,
  RouterOutlet,
} from '@angular/router';

import { MaterialModule } from '../../material-module';

@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [MaterialModule, RouterOutlet, RouterModule],
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.css'
})
export class NavbarComponent {

    // public user_name: any;
    public sidebar_menu_list: any = [
        {
            id: 0,
            category: 'généralités',
            icon_category: 'home',
            item_name: "Tableau de bord",
            item_icon: "dashboard",
            router: "/web.sms.admin.welcome"
        },
        {
            id: 1,
            item_name: "Profil",
            item_icon: "person",
            router: "/web.sms.admin.profile"
        },
        {
            id: 2,
            category: 'Comptes',
            icon_category: 'account_circle',
            item_name: "Administrateurs",
            item_icon: "person",
            router: "/web.sms.admin.list-admin-account"
        },
        {
            id: 4,
            item_name: "Clients",
            item_icon: "person",
            router: "/web.sms.admin.list-user-account"
        },
        {
            id: 9,
            category: 'Gestions',
            icon_category: 'manage_accounts',
            item_name: "Crédit sms",
            item_icon: "bookmark_manager",
            router: "/web.sms.admin.gestion-pack-sms"
        },
        {
            id: 4,
            item_name: "Gestion des expéditeurs",
            item_icon: "bookmark_manager",
            router: "/web.sms.admin.liste-compte-utilisateurs"
        },
        {
            id: 4,
            item_name: "Gestion des opérateurs",
            item_icon: "bookmark_manager",
            router: "/web.sms.admin.liste-compte-utilisateurs"
        },
        {
            id: 4,
            item_name: "Gestion des tarifications",
            item_icon: "bookmark_manager",
            router: "/web.sms.admin.liste-compte-utilisateurs"
        },
        {
            id: 9,
            category: 'Historiques',
            icon_category: 'manage_history',
            item_name: "Historique rechargements",
            item_icon: "history",
            router: "/web.sms.admin.historique.list-rechargement"
        },
        {
            id: 4,
            item_name: "Historique diffusions",
            item_icon: "history",
            router: "/web.sms.admin.historique.list-broadcast-sms"
        },
        {
            id: 9,
            category: 'Analytiques',
            icon_category: 'pie_chart',
            item_name: "Statistiques",
            item_icon: "list_alt",
            router: "/web.administration.statistiques"
        },
        {
            id: 11,
            category: 'Paramètres',
            icon_category: 'settings_applications',
            item_name: "Liste rôle",
            item_icon: "list_alt",
            router: "/web.sms.admin.list-role"
        },
        {
            id: 17,
            item_name: "Budget annuel",
            item_icon: "list_alt",
            router: "/web.administration.budget-annuel"
        },
    ];

    public user_name: string = '';
    public user_id: any;
    public online_user_data: any;
    public is_show: boolean = true;

    public screenWidth!: number;

    constructor(
        private _router: Router,
    ) {
        if (typeof window !== "undefined") {
            this.screenWidth = window.innerWidth;
            window.onresize = () => {
                // set screenWidth on screen size change
                this.screenWidth = window.innerWidth;
            };
        }
    }

    ngOnInit() {
        // console.log(this.drawer)
    }


    logOut(id: number) {
        // this._loading.start();
        // this._request.logOut(id).subscribe(
        //     {
        //         next: (response: any )=>{
        //             if (response.code == 200) {

        //                 sessionStorage.clear();
        //                 localStorage.removeItem('Ramzan_Kadyrov');
        //                 this._coockie.delete('us_id');
        //                 this._coockie.delete('dragonFly');
        //                 this._message.tokenExpired();
        //                 this._loading.stop();
        //                 this._router.navigateByUrl('/');

        //             } else if (response.code == 302 || response.code == 300) {
        //                 this._loading.stop();
        //                 this._message.error(response);
        //             }
        //         },error: (error: any)=>{
        //             this._loading.stop();
        //             let _error = error.error;
        //             if (error.status == 401 || _error.message == "Token has expired") {
        //                 localStorage.removeItem('Ramzan_Kadyrov');
        //                 this._coockie.delete('us_id');
        //                 this._coockie.delete('dragonFly');
        //                 this._message.tokenExpired();
        //                 this._router.navigateByUrl('/');
        //             }
        //         }
        //     }
        // )
    }


    // forgot password
    forgotPassword(){
        localStorage.setItem('sve', 'start');
        setTimeout(() => {
            this._router.navigateByUrl('/web.forgot-password')
        }, 500);
    }
}
