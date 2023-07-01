import { v4 as uuidv4 } from 'uuid';

export function createTask({ name, description, dueDate, status, order }) {
    return {
        id: uuidv4(),
        name,
        description,
        dueDate,
        status,
        order,
    };
}

export function getNextOrder(tasks, status) {
    return tasks
        .filter(task => task.status === status)
        .map(task => task.order)
        .reduce((prev, next) => Math.max(prev, next), 0) + 1;
}