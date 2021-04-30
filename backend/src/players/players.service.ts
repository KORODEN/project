import { Injectable } from '@nestjs/common';
import * as fs from "fs";

@Injectable()
export class PlayersService {

    async getPlayers(): Promise<string>{
        return fs.readFileSync('testdata.json', 'utf-8');
     }
}
