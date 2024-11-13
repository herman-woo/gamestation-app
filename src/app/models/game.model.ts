
export interface Game {
    game_name: string;
    original_platform: string;
    remastered_platform: string;
    playing_status: number;
    completion_status: number;
    platinum: boolean;
    completed: boolean;
    hours_played: number;
    game_image_path: string;
  }