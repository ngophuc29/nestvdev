import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestService } from './test.service';
import { TestController } from './test.controller';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/user.entities';
@Module({
  imports: [
    
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'sapassword',
      database: 'postnest',
      entities: [User],
      synchronize: true,
    })
    , UserModule],
  controllers: [AppController,TestController],
  providers: [AppService,TestService],
})
export class AppModule {}
