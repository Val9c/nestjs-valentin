import { UserService } from './../user/user.service';
import {
    Controller,
    Get,
    Post,
    Param,
    Body,
    HttpStatus,
    HttpException,
    ParseIntPipe,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { validateParam } from '../paramValidator';

@Controller()
export class TaskController {
    constructor(
        private taskService: TaskService,
        private userService: UserService,
    ) {}

    @Get('user/:userId')
    async getUserTasks(@Param('userId', ParseIntPipe) userId: number) {
        if (!validateParam(userId, "number")) {
            throw new HttpException('Identifiant non accepté', HttpStatus.BAD_REQUEST);
        }

        return await this.taskService.getUserTasks(userId);
    }

    @Post()
    async addTask(
        @Body() taskData: { name: string; userId: number; priority: number },
    ) {
        if (
            !validateParam(taskData.name, "string") ||
            !validateParam(taskData.userId, "number") ||
            !validateParam(taskData.priority, "number")
        ) {
            throw new HttpException(
                'Merci de verifier les données entrée',
                HttpStatus.BAD_REQUEST,
            );
        }

        const isExist = this.userService.getUserById(+taskData.userId);
        if (!isExist) {
            throw new HttpException(
                'Utilisateur non reconnu',
                HttpStatus.BAD_REQUEST,
            );
        }

        const task = await this.taskService.addTask(
            taskData.name,
            +taskData.userId,
            +taskData.priority,
        );
        if (!task) {
            throw new HttpException(
                'La tâche n\'as pas pu etre créer',
                HttpStatus.INTERNAL_SERVER_ERROR,
            );
        }
        return task;
    }
}