import {Injectable} from '@angular/core';


@Injectable()
export class GameService {
    getGames() {
        return ["Company of Heroes", "Civilization VI", "Empire Total War", "Total War: Warhammer"];
    }

    getGamesImages(){
        var imgURL = "http://media.comicbook.com/2017/04/code-geass-988315.jpg";

        return imgURL;
    }
}