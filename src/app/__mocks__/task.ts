import { Task } from '../features/task/model/task.model';

export const tasks: Task[] = [
  {
    id: '1',
    title: 'Ir à academia',
    isCompleted: false,
    categoryId: '5',
    description: '',
  },
  {
    id: '2',
    title: 'Comprar pão',
    description: '',
    isCompleted: true,
    categoryId: '1',
  },
];

export const task: Task = {
  id: '1',
  title: 'Ir à academia',
  isCompleted: false,
  categoryId: '5',
  description: '',
};
