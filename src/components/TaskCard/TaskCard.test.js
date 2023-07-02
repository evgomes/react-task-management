import React from 'react';
import moment from 'moment';

import { render, screen, fireEvent } from '@testing-library/react';
import MockWrappers from '../../tests/MockWrappers';

import TaskCard from './TaskCard';
import { TODO } from '../../constants/task-status';

const task = {
    id: 1,
    name: 'Example - To Do Task',
    description: 'My task description.',
    dueDate: moment('2023-01-15', 'YYYY-MM-DD').utc(),
    status: TODO,
    order: 1
};

describe('TaskCard', () => {
    it('should render the task name', () => {
        render(<TaskCard task={task} color="blue" />, { wrapper: MockWrappers });
        const taskNameElement = screen.getByText('Example - To Do Task');
        expect(taskNameElement).toBeInTheDocument();
    });

    it('should render the task description', () => {
        render(<TaskCard task={task} color="blue" />, { wrapper: MockWrappers });
        const taskDescriptionElement = screen.getByText('My task description.');
        expect(taskDescriptionElement).toBeInTheDocument();
    });

    it('should render the due date in proper format', () => {
        render(<TaskCard task={task} color="blue" />, { wrapper: MockWrappers });
        const dueDateElement = screen.getByText('Due date: 01/15/2023');
        expect(dueDateElement).toBeInTheDocument();
    });
   
    it('shoud call onDeleteTask when delete button is clicked', () => {
        render(<TaskCard task={task} color="blue" />, { wrapper: MockWrappers });
        const deleteButton = screen.getByLabelText('Delete');
        fireEvent.click(deleteButton);
        const deleteDialog = screen.getByRole('dialog', { name: 'Delete Task' });
        expect(deleteDialog).toBeInTheDocument();
    });
});