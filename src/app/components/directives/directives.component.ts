import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent {
  visible: boolean = true;
  users = ['Anna', 'Laura', 'Sabrina']

  toggle() {
    this.visible = !this.visible
  }
}
