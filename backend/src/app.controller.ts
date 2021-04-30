import {Controller, Get, Res} from '@nestjs/common';
import {AppService} from './app.service';
import * as fs from "fs";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

}
