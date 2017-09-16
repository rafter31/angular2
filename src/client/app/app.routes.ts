import { Routes } from '@angular/router';

import { LoginRoutes } from './login/index';
import { DashboardRoutes } from './dashboard/index';

import { LoginComponent } from './login/index';

import { PlansComponent } from './plans/index';
import { PlansRoutes } from './plans/index';

export const routes: Routes = [
	...LoginRoutes,
	...DashboardRoutes,
	...PlansRoutes,
	{ path: '**', component: LoginComponent }
];
