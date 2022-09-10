import { Injectable } from '@nestjs/common';
import { Task } from "./interfaces/Tasks";

@Injectable()
export class TasksService {

    tasks: Task[]=[
        {
            id: 1,
            title: "testing ",
            description: "testing description",
            done: true
        },
         {
            id: 2,
            title: "word ",
            description: "word description",
            done: true
        },
         {
            id: 3,
            title: "pepe ",
            description: "pepe description",
            done: true
        }
    ]

    getTasks(): Task[]{
        return this.tasks;
    }

    getTask(id: number): Task{
        return this.tasks.find(task =>task.id === id);
    }
       
}

