import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    constructor(private userService:UserService) {}

  

    @Post()
    createUser(@Body() body: any) { 
        return this.userService.createUser(body);
    }

    @Get()
    findAll() {
        return this.userService.findAll();
    }


    @Get('/:id')
    getUserById(@Param('id') id: number) { 
        return this.userService.findById(id);
    }

    @Put('/:id')
    updateUser(@Param('id') id: number, @Body() body: any) { 
        return this.userService.updateById(id, body);
    }

    @Delete('/:id')
    deleteUser(@Param('id') id: number ) {
        return this.userService.deleteById(id );
    }

}
