import { Component, Input } from '@angular/core';
import { GamesComponent } from '../games/games.component';
import { Game } from '../models/game.model';
import { GameService } from '../game.service';

@Component({
  selector: 'app-games-column',
  standalone: true,
  imports: [GamesComponent],
  templateUrl: './games-column.component.html',
  styleUrl: './games-column.component.css'
})
export class GamesColumnComponent {

  @Input() games: Game[] = [];
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
