import { Body, Controller, Delete, Get, Param, Post, Put ,ParseIntPipe, UseInterceptors, ClassSerializerInterceptor} from '@nestjs/common';
import { UserService } from './user.service';
import { createDtoUser } from './dtos/creatUserDto.dto';
import { updateUserDto } from './dtos/updateUserDto.dto';
 

@Controller('user')
@UseInterceptors(ClassSerializerInterceptor)
export class UserController {

    constructor(private userService:UserService) {}

  

    @Post()
    createUser(@Body() body: createDtoUser) { 
        return this.userService.createUser(body);
    }

    @Get()
    findAll() {
        return this.userService.findAll();
    }


    @Get('/:id')
    getUserById(@Param('id', ParseIntPipe) id: number) { 
        return this.userService.findById(id);
    }

    @Put('/:id')
 
    updateUser(@Param('id', ParseIntPipe) id: number, @Body() body: updateUserDto) { 
 
        return this.userService.updateById(id, body);
    }

    @Delete('/:id')
    deleteUser(@Param('id', ParseIntPipe) id: number ) {
        return this.userService.deleteById(id );
    }

}
