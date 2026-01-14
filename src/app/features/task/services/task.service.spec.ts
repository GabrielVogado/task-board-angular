import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { TaskService } from './task.service';
import { tasks } from '../../../__mocks__/task';
import { Task } from '../model/task.model';

describe('TaskService', () => {
  let taskService: TaskService;
  let httpTestingController: HttpTestingController;

  const MOCKED_TASKS = tasks;
  const apiUrl = 'http://localhost:3000';

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    taskService = TestBed.inject(TaskService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(taskService).toBeTruthy();
  });

  it('getSortedTasks', () => {
    const sortedTasks = taskService.getSortedTasks(tasks);
    expect(sortedTasks[0].title).toEqual('Comprar pão');
  });

  describe('getTask', () => {
    it('should return a list of tasks', () => {
      let tasks!: Task[];
      taskService.getTasks().subscribe(response => {
        tasks = response;
      });
      const req = httpTestingController.expectOne(`${apiUrl}/tasks`);
      req.flush(MOCKED_TASKS);
      expect(taskService.tasks()).toEqual(MOCKED_TASKS);
      expect(req.request.method).toEqual('GET');
    });
  });
});
