import { Body, Controller, Post, UseGuards, Get, Param } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService) { }

    @UseGuards(AuthGuard('jwt'))
    @Get(':username')
    getUserByUsername(@Param('username') username: string) {
        return this.usersService.getUserByUsername(username);
    }

    @Post('/signup')
    async signup(
        @Body('password') password: string,
        @Body('username') username: string,
    ) {
        const result = await this.usersService.registerUser({
            username: username,
            password: password,
            age: undefined,
            name: "",
            phone: "",
            email: "",
        })

        return {
            msg: "success",
            user: result
        }
    }
}
