import { Component } from '@angular/core';

@Component({
	moduleId: module.id,
    selector: 'bs-component',
    templateUrl: './bs-component.component.html'
})

export class BSComponentComponent {

    user: NewUser = new NewUser();

 value = '';
  update(value: string) { this.value = value; }
test()
{
    debugger;
    var a = this.user;
}
}



export class NewUser {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
