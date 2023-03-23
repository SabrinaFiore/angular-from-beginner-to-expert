import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss']
})
export class PipeComponent {
  today = Date.now();
  money = 1200;
  bitcoins = 0.1452587;
  Json = {id: 1, name: 'Sab'}

  article = [
    {
      id: 1,
      title: "Lorem Ipsum 01",
      author: "Him and Her 01",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
    },
    {
      id: 2,
      title: "Lorem Ipsum 02",
      author: "Him and Her 02",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
    },
    {
      id: 3,
      title: "Lorem Ipsum 03",
      author: "Him and Her 03",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
    },
    {
      id: 4,
      title: "Lorem Ipsum 04",
      author: "Him and Her 04",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
    },
  ]
}
