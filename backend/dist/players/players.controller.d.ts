import { PlayersService } from "./players.service";
export declare class PlayersController {
    private playersService;
    constructor(playersService: PlayersService);
    getPlayers(res: any): Promise<any>;
}
