import { Component } from '@angular/core';
import {
  Router,
  RouterModule,
  RouterOutlet,
} from '@angular/router';

import { MaterialModule } from '../../material-module';

@Component({
    selector: 'app-user-navbar',
    standalone: true,
    imports: [MaterialModule, RouterOutlet, RouterModule],
    templateUrl: './user-navbar.component.html',
    styleUrl: './user-navbar.component.css'
})
export class UserNavbarComponent {
    title: string = ''
    // public user_name: any;
    public sidebar_menu_list: any = [
        {
            id: 0,
            category: 'généralités',
            icon_category: 'home',
            item_name: "Tableau de bord",
            item_icon: "dashboard",
            router: "/web.sms.custumer-broadcast.welcome"
        },
        {
            id: 1,
            item_name: "Profil",
            item_icon: "person",
            router: "/web.sms.custumer-broadcast.profile"
        },
        {
            id: 2,
            category: 'Broadcast sms',
            icon_category: 'broadcast_on_home',
            item_name: "Carnet d'adresse",
            item_icon: "import_contacts",
            router: "/web.sms.custumer-broadcast.card-address"
        },
        {
            id: 4,
            item_name: "Sms",
            item_icon: "sms",
            router: "/web.sms.custumer-broadcast.sms"
        },
        {
            id: 9,
            item_name: "Broadcast sms",
            item_icon: "feedback",
            router: "/web.sms.custumer-broadcast.broadcast-sms"
        },
        // {
        //     id: 9,
        //     category: 'Historiques',
        //     icon_category: 'manage_history',
        //     item_name: "Historique diffusions",
        //     item_icon: "history",
        //     router: "/web.sms.custumer-broadcast.statistiques"
        // },
        // {
        //     id: 9,
        //     category: 'Analytiques',
        //     icon_category: 'pie_chart',
        //     item_name: "Statistiques",
        //     item_icon: "list_alt",
        //     router: "/web.sms.custumer-broadcast.statistiques"
        // },

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
    forgotPassword() {
        localStorage.setItem('sve', 'start');
        setTimeout(() => {
            this._router.navigateByUrl('/web.forgot-password')
        }, 500);
    }
}
