import { registerAs } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path';

function typeOrmModuleOptions(): TypeOrmModuleOptions{
    return{
        type: 'mssql',
        host: process.env.HOST,
        username: process.env.USERNAME,
        password: process.env.PASSWORD,
        database: process.env.DATABASE,
        entities: [join(__dirname, '../**/**/*entity{.ts,.js}')],
      synchronize: true,
      options: {
        encrypt:true,
        cryptoCredentialsDetails: {
          minVersion: 'TLSv1'
        }
      },
    }
}
export default registerAs('database', () => ({
    config: typeOrmModuleOptions()
  }));