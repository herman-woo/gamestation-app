import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { GamesComponent } from './games/games.component';
import { CreateGameFormComponent } from './create-game-form/create-game-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GamesComponent,CommonModule, CreateGameFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'gamestation-app';
}
