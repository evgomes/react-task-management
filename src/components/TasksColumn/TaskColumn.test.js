import React from 'react';
import { useSelector } from 'react-redux';

import { render, screen, fireEvent } from '@testing-library/react';
import MockWrappers from '../../tests/MockWrappers';

import TasksColumn from './TasksColumn';


describe('TasksColumn', () => {
    it('should render header with the matching status', () => {
        render(<TasksColumn status="To Do" color="blue" />, { wrapper: MockWrappers });
        const headerElement = screen.getByText('To Do');
        expect(headerElement).toBeInTheDocument();
    });

    it('should renders all task cards', () => {
        const { container } = render(<TasksColumn status="To Do" color="blue" />, { wrapper: MockWrappers });
        expect(container.getElementsByClassName('task-column-body').length).toBeGreaterThan(0);
    });

    it('should open the add task dialog when add button is clicked', () => {
        render(<TasksColumn status="To Do" color="blue" />, { wrapper: MockWrappers });

        const addTaskButton = screen.getByLabelText('Add');
        fireEvent.click(addTaskButton);

        const addTaskDialog = screen.getByRole('dialog');
        expect(addTaskDialog).toBeInTheDocument();
    });
});
