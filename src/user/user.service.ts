import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user.entities';
import { InjectRepository } from '@nestjs/typeorm';
import { createDtoUser } from './dtos/creatUserDto.dto';

@Injectable()
export class UserService {

    constructor(@InjectRepository(User) private userRepo: Repository<User>) { }


    async createUser(body: createDtoUser) {
        const { email, password } = body

        const user = this.userRepo.create({ email, password });

        return await this.userRepo.save(user);;
    }

    async findAll() {




        return await this.userRepo.find({});
    }


    async findById(id: number) {




        return await this.userRepo.findOneBy({ id });
    }

    async updateById(id: number, body: any) {


        let user = await this.userRepo.findOneBy({ id });
        if (!user) {
            throw new Error('User not found');
        }

        Object.assign(user, body);

        return this.userRepo.save(user) 
    }

    async deleteById(id: number ) {


        let user = await this.userRepo.findOneBy({ id });
        if (!user) {
            throw new Error('User not found');
        }

         

        // return await this.userRepo.delete({ id })
        return await this.userRepo.remove(user)

    }
}
