import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Game } from '../models/game.model';
import { GameService } from '../game.service';

@Component({
  selector: 'create-game-button',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './create-game-form.component.html',
  styleUrl: './create-game-form.component.css'
})
export class CreateGameFormComponent {
  showPopup: boolean = false;
  selectedFile: File | null = null;

  constructor(private gameService: GameService) {}

  openPopup() {
    this.showPopup = true;
  }

  closePopup() {
    this.showPopup = false;
  }

  // game: Game = {
  //   game_name: '',
  //   original_platform: '',
  //   playing_status: '',
  //   game_completion_percentage: 0,
  //   hours_played: 0,
  //   game_completed: false,
  //   game_image_path: '',
  //   created_time: new Date(),
  //   update_time: new Date()
  // };

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  submitForm() {
    // const formData = new FormData();
    // formData.append('game_name', this.game.game_name);
    // formData.append('game_platform', this.game.game_platform);
    // formData.append('game_status', this.game.game_status);
    // formData.append('game_completion_percentage', this.game.game_completion_percentage.toString());
    // formData.append('hours_played', this.game.hours_played.toString());
    // formData.append('game_completed', this.game.game_completed.toString());

    // if (this.selectedFile) {
    //   formData.append('image', this.selectedFile, this.selectedFile.name);
    // }

    // this.gameService.createGame(formData).subscribe({
    //   next: (response) => {
    //     console.log('Game created successfully:', response);
    //     this.closePopup();
    //   },
    //   error: (error) => {
    //     console.error('Error creating game:', error);
    //   }
    // });
  }
}
