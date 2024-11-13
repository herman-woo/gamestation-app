import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Game } from '../models/game.model';


@Component({
  selector: 'app-games',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './games.component.html',
  styleUrl: './games.component.css'
})
export class GamesComponent {
  @Input() games?: Game[];

  private apiUrl = 'http://localhost:8000/';
  getImageUrl(imagePath: string): string {
    return `${this.apiUrl}${imagePath}`;
  }


}