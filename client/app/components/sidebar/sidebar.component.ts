/**
 * Created by Moiz.Kachwala on 02-06-2016.
 */
import {Component, OnInit} from '@angular/core';
// import {HeroService} from "../../services/hero.service";
// import {Hero} from "../../models/hero";
import { Router } from '@angular/router';

@Component({
    selector: 'app-sidebar',
    templateUrl: './app/components/sidebar/sidebar.component.html'
})

export class SidebarComponent {
    private page_name: string;
    constructor(private router: Router) { 
        this.router.events.subscribe(event => {
            if (event.constructor.name === "NavigationEnd") {
                this.page_name = this.getPageName(this.router.routerState, this.router.routerState.root).join('-');
            }
        });
    }

    getPageName(state:any, parent:any) {
        var data:any = [];
        if(parent && parent.snapshot.data && parent.snapshot.data.page_name) {
            data.push(parent.snapshot.data.page_name);
        }
    
        if(state && parent) {
            data.push(... this.getPageName(state, state.firstChild(parent)));
        }
        return data;
      }
}
