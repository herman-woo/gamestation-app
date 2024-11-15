import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { GamesComponent } from './games/games.component';
import { CreateGameFormComponent } from './create-game-form/create-game-form.component';
import { GameService } from './game.service';
import { Game } from './models/game.model';
import { GamesColumnComponent } from './games-column/games-column.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GamesComponent,CommonModule, CreateGameFormComponent, GamesColumnComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'gamestation-app';


  games: Game[] = [];
  ps1games: Game[] = [];
  ps2gamesOnPs3: Game[] = [];
  ps2gamesOnPs4: Game[] = [];
  ps3games: Game[] = [];
  ps3gamesOnPs4: Game[] = [];
  ps3gamesOnPs5: Game[] = [];
  ps4games: Game[] = [];
  ps5games: Game[] = [];





  constructor(private gameService: GameService) {}
  ngOnInit(): void {
    this.gameService.getGames().subscribe((data) => {
      this.games = data;
      this.ps1games = this.games.filter((game) => game.original_platform === "PlayStation 1");
      this.ps2gamesOnPs3 = this.games.filter((game) => game.original_platform === "PlayStation 2" && game.remastered_platform === "PlayStation 3");
      this.ps2gamesOnPs4 = this.games.filter((game) => game.original_platform === "PlayStation 2" && game.remastered_platform === "PlayStation 4");
      this.ps3games = this.games.filter((game) => game.original_platform === "PlayStation 3" && game.remastered_platform === null);
      this.ps3gamesOnPs4 = this.games.filter((game) => game.original_platform === "PlayStation 3" && game.remastered_platform === "PlayStation 4");
      this.ps3gamesOnPs5 = this.games.filter((game) => game.original_platform === "PlayStation 3" && game.remastered_platform === "PlayStation 5");
      this.ps4games = this.games.filter((game) => game.original_platform === "PlayStation 4");
      this.ps5games = this.games.filter((game) => game.original_platform === "PlayStation 5");

    });
  }
  

}