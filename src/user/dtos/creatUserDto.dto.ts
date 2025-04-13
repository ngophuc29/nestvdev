
import { IsEmail, IsNotEmpty } from 'class-validator';

export class createDtoUser {
    @IsEmail()
    email: string;

    @IsNotEmpty()
    password: string;
}
