import { Component } from '@angular/core';
declare var ol: any;
/**
*	This class represents the lazy loaded LoginComponent.
*/

@Component({
	moduleId: module.id,
	selector: 'plans-cmp',
	templateUrl: 'plans.component.html',
	styleUrls: ['plans.css']
})

export class PlansComponent { 
    map:any;
}
