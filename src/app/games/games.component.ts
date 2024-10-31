import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameService } from '../game.service';
import { Game } from '../models/game.model';


@Component({
  selector: 'app-games',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './games.component.html',
  styleUrl: './games.component.css'
})
export class GamesComponent implements OnInit {
  games: Game[] = [];

  constructor(private gameService: GameService) {}
  private apiUrl = 'http://localhost:8000/';
  ngOnInit(): void {
    this.gameService.getGames().subscribe((data) => {
      this.games = data;
    });
  }

  getImageUrl(imagePath: string): string {
    return `${this.apiUrl}${imagePath}`;
  }
}