import {
    Body,
    Controller,
    Get,
    HttpException,
    HttpStatus,
    Param,
    Post,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';
import { validateParam } from '../paramValidator';

@Controller()
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get(':email')
    getUserByEmail(@Param('email') email: string) {
        if (!validateParam(email, "email")) {
            throw new HttpException('Email invalide', HttpStatus.BAD_REQUEST);
        }
        return this.userService.getUser(email);
    }

    @Post()
    async addUser(@Body() user: { email: string }): Promise<User> {
        if (!validateParam(user.email, "email")) {
            throw new HttpException('Email invalide', HttpStatus.BAD_REQUEST);
        }
        const userExist = await this.userService.getUser(user.email);
        if (userExist) {
            throw new HttpException('L\'utilisateur existe deja', HttpStatus.CONFLICT);
        }
        const createdUser = await this.userService.addUser(user.email);
        if (!createdUser) {
            throw new HttpException(
                'l\'utilisateur n\'as pas pu etre créer',
                HttpStatus.INTERNAL_SERVER_ERROR,
            );
        }
        return createdUser;
    }
}
