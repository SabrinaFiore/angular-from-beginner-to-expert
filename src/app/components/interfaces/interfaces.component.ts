import { UtilityService } from 'src/app/service/utility.service';
import { Users } from './../../model/users';
import { Component } from '@angular/core';

@Component({
  selector: 'app-interfaces',
  templateUrl: './interfaces.component.html',
  styleUrls: ['./interfaces.component.scss']
})
export class InterfacesComponent {
  label!: boolean;

  constructor(util: UtilityService) {
    this.label = true;
    util.add(5, 6)
    console.log("[debug] print util.add",  util.add(5, 6))
  }

  users: Users[] = [
    {id: 1, name: 'Anna', age: 64},
    {id: 2, name: 'Sab'},
    {id: 3, name: 'Laura', age: 27},
  ]
}
