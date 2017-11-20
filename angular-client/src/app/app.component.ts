import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {ActivatedRoute, Params} from "@angular/router";
import { map, filter } from 'rxjs/operators';
import {HttpClient} from "@angular/common/http";
import {Store} from "@ngrx/store";
import {State as AuthState} from './auth/auth.reducer';
import {Login} from "./auth/auth.actions";

@Component({
    selector: 'cm-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'cm';

    constructor(private route: ActivatedRoute,
                private http: HttpClient,
                private store: Store<AuthState>) {

    }

    ngOnInit() {
        this.route.queryParams.pipe(
            filter((params: Params) => {
                return !!params['login']
            })
        ).subscribe(p => {
            this.store.dispatch(new Login());
        })
    }
}