import { Component } from '@angular/core';
import { ReacterDirective } from './reacter/reacter.directive';
import Home from '../react/home';
import { ComponentProps } from 'react';

@Component({
  selector: 'app-root',
  imports: [ReacterDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  home = Home;
  title = 'reangular';

  homeProps: ComponentProps<typeof Home> = {
    title: 'Home',
    description: 'This is a home page',
    handleNameChange: (name: string) => {
      console.log('Angular ' + name);
      this.nameChangeHandler(name);
      () => {
        this.title = name;
      };
    },
  };

  nameChangeHandler(name: string) {
    this.homeProps = { ...this.homeProps, title: name };
  }
}
