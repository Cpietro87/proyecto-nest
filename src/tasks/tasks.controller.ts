import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('tasks')
export class TasksController {
    @Get()
    getTasks(): string{
        return 'Hello Tasks';
    }

    @Post()
    createTasks(@Body() task): string{
        console.log(task)
        return 'creating Tasks';
    }

    @Put()
    updateTasks(): string {
        return 'update Tasks';
    }

    @Delete()
    deleteTasks(): string{
        return 'delete Tasks';
    }
      
}
