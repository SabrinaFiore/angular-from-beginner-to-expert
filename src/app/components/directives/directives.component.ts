import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent {
  visible: boolean = true;
  users = ['Anna', 'Laura', 'Sabrina']
  url: any;

  toggle() {
    this.visible = !this.visible
  }

  load() {
    this.url = 'https://images.unsplash.com/photo-1585184394271-4c0a47dc59c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2342&q=80'
  }

  onLoad() {
    this.url = null;
  }
}
