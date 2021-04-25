import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'netch-error',
  template: `
    <section class='s1'>
      <h1>Упс, кажется страница не найдена :(</h1>
    </section>
  `,
  styles: [`
    section {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      min-height: 100vh;
      user-select: none;
    }

    h1 {
      margin-top: 5rem;
      font-size: 3rem;
      color: #ee5253;
    }
  `
  ]
})
export class ErrorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
