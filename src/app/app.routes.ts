import { Routes } from '@angular/router';
import { Counter } from './pages/counter/counter';
import { HeroPage } from './pages/hero/hero-page';
import { DragonballPageComponent } from './pages/dragonball/dragonball-page.component';
import { DragonballSuperPageComponent } from './pages/dragonball-super/dragonball-super-page.component';

export const routes: Routes = [
    {
        path: '',
        component: Counter
    },
    {
        path: 'hero',
        component: HeroPage,
    },
    {
        path: 'dragonball',
        component: DragonballPageComponent,
    },
    {
        path: 'dragonball-super',
        component: DragonballSuperPageComponent,
    },
    {
        path: '**',
        redirectTo: ''
    },
];
