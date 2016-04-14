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
    styles: [require('./app.css')],
    template: require('./app.template.html')
})
//@RouteConfig([
//  { path: '/',      name: 'Index', component: Home, useAsDefault: true },
//  { path: '/home',  name: 'Home',  component: Home },
//  // Async load a component using Webpack's require with es6-promise-loader and webpack `require`
//  { path: '/about', name: 'About', loader: () => require('es6-promise!./about')('About') },
//])
export class App {
    title = 'Angular App555';
    imageUrl = "http://lorempixel.com/400/200";
}