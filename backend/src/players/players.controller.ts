import {Controller, Get, HttpStatus, Res} from '@nestjs/common';
import { PlayersService } from "./players.service";
import * as fs from "fs";

@Controller('players')
export class PlayersController {
    constructor(private playersService: PlayersService) {}

    @Get()
    async getPlayers(@Res() res) {
        const players = await this.playersService.getPlayers();
        return res.status(HttpStatus.OK).json(JSON.parse(players));
    }
}
