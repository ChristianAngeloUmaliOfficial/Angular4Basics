import { Component } from '@angular/core'
import { GameService } from './games.service'


@Component({
    selector: 'games',
    template: `
    <h2>My Games</h2>

    <ul>
        <li *ngFor="let myGames of games"> {{myGames}}</li>
    </ul>

    <img [src] = "gamesImg"/>

    `, providers: [GameService]
})

export class GamesComponent {
    title: "List of Games";
    games;
    gamesImg;

    constructor(gameService: GameService) {
        this.games = gameService.getGames();
        this.gamesImg = gameService.getGamesImages();
    }
}