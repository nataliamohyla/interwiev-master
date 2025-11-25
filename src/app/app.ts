import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TexstComponent } from './components/test/test';

@Component({
  selector: 'app-root',
  imports: [ TexstComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('interwiew-master');
  messageFromParent = 'Я твій батько!';
  messageFromChild = '';
  getMessageFromChild(message: string) {
    this.messageFromChild = message;
  }
}
