import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { createTasksDto } from "./dto/create.tasks.dto";

@Controller('tasks')
export class TasksController {
    @Get()
    getTasks(): {hello: string}{
        return {"hello": "world"};
    }

    @Post()
    createTasks(@Body() task: createTasksDto): string{
        console.log(task)
        return 'creating Tasks';
    }

    @Put(":id")
    updateTasks(@Body() task: createTasksDto, @Param('id') id): string {
        console.log(task);
        console.log(id)
        return 'update Tasks';
    }

    @Delete(":id")
    deleteTasks(@Param('id') id): string{
        console.log(id);
        return `delete Tasks number: ${id}`;
    }
      
}
