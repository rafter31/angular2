import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PlansComponent } from './plans.component';

@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: [PlansComponent],
    exports: [PlansComponent]
})

export class PlansModule { }
