import { Body, Controller, Delete, Get, Param, Post, Put, Req, Res } from '@nestjs/common';
import { createTasksDto } from "./dto/create.tasks.dto";
import { TasksService } from "./tasks.service";
import { Task } from "./interfaces/Tasks";


@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService){}
    @Get()
    getTasks(): Task[]{
        return this.tasksService.getTasks();
    }
    // getTasks(@Req() req,@Res() res){
    //     return res.send('Hello World!!!')
    // }
    @Get(':taskId')
    getTask(@Param('taskId') taskId: string){
        return this.tasksService.getTask(parseInt(taskId));
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
