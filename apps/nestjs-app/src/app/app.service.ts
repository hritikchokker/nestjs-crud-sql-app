import { Injectable } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript'
@Injectable()
export class AppService {

  constructor(private _sequelize: Sequelize) { }
  getData(): { message: string } {
    return { message: 'Welcome to nestjs-app!' };
  }
}
