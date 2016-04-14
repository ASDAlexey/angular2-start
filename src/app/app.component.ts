/*
 * Angular 2 decorators and services
 */
import {Component, ViewEncapsulation} from 'angular2/core';
import {RouteConfig, Router} from 'angular2/router';

//noinspection TypeScriptCheckImport
import {Home} from './home';
import {AppState} from './app.service';
//noinspection TypeScriptCheckImport
import {RouterActive} from './router-active';

/*
 * App Component
 * Top Level Component
 */
@Component({
    selector: 'app',
    pipes: [],
    providers: [],
    directives: [RouterActive],
    encapsulation: ViewEncapsulation.None,
    styles: [`${require('./app.styl')}`],
    template: `
    <div class="block">
        <span class="block__element block__element__mod">aaaa</span>
    </div>`
})

export class App {
    title = 'Angular App555';
    imageUrl = "http://lorempixel.com/400/200";

    constructor() {
        console.log('sss');

        console.log('aaaa');
    }
}