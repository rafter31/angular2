import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssignLabellerComponent } from './assign-labeller.component';
import { CarouselModule } from 'ng2-bootstrap/ng2-bootstrap';


@NgModule({
    imports: [CommonModule, CarouselModule],
    declarations: [AssignLabellerComponent],
    exports: [AssignLabellerComponent]
})

export class AssignLabellerModule { }
