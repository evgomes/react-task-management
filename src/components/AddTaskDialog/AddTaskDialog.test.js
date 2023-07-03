import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import AddTaskDialog from './AddTaskDialog';
import MockWrappers from '../../tests/MockWrappers';
import moment from 'moment';

import * as ReactRedux from 'react-redux'; // assuming you have a Redux store

let mockDispatchFunction = jest.fn();
jest.mock("react-redux", () => ({
    ...jest.requireActual("react-redux"),
    useDispatch: jest.fn(),
}));

describe('AddTaskDialog', () => {
    beforeEach(() => {
        ReactRedux.useDispatch = mockDispatchFunction;
    });

    it('should render the dialog title', () => {
        render(<AddTaskDialog status="ToDo" open={true} onClose={jest.fn()} />, { wrapper: MockWrappers })
        const dialogTitle = screen.getByText('Add Task');
        expect(dialogTitle).toBeInTheDocument();
    });

    it('should render the form fields', () => {
        render(<AddTaskDialog status="ToDo" open={true} onClose={jest.fn()} />, { wrapper: MockWrappers })

        const nameField = screen.getByLabelText('Name *');
        expect(nameField).toBeInTheDocument();

        const dueDateField = screen.getByLabelText('Due date *');
        expect(dueDateField).toBeInTheDocument();

        const descriptionField = screen.getByLabelText('Description *');
        expect(descriptionField).toBeInTheDocument();
    });

    it('should validate required fields on blur', () => {
        render(<AddTaskDialog status="ToDo" open={true} onClose={jest.fn()} />, { wrapper: MockWrappers })

        const nameField = screen.getByLabelText('Name *');
        fireEvent.blur(nameField);
        expect(screen.getByText('The name is required.')).toBeInTheDocument();

        const descriptionField = screen.getByLabelText('Description *');
        fireEvent.blur(descriptionField);
        expect(screen.getByText('The description is required.')).toBeInTheDocument();
    });

    it('should dispatch addTask action on form submit', () => {

        // Arrange
        render(<AddTaskDialog status="ToDo" open={true} onClose={jest.fn()} />, { wrapper: MockWrappers })

        // Act
        const nameField = screen.getByLabelText('Name *');
        fireEvent.change(nameField, { target: { value: 'Task name' } });

        const dueDateField = screen.getByLabelText('Due date *');
        fireEvent.change(dueDateField, { target: { value: moment('2023-07-02', 'YYYY-MM-DD').utc() } });

        const descriptionField = screen.getByLabelText('Description *');
        fireEvent.change(descriptionField, { target: { value: 'Task description' } });

        const saveButton = screen.getByText('Save');
        fireEvent.click(saveButton);

        expect(mockDispatchFunction).toHaveBeenCalled();
    });

    it('should clears the form fields and calls onClose on dialog close', () => {
        const onCloseMock = jest.fn();

        render(<AddTaskDialog status="ToDo" open={true} onClose={onCloseMock} />, { wrapper: MockWrappers })

        const nameField = screen.getByLabelText('Name *');
        fireEvent.change(nameField, { target: { value: 'Task name' } });

        const dueDateField = screen.getByLabelText('Due date *');
        fireEvent.change(dueDateField, { target: { value: '2023-07-02' } });

        const descriptionField = screen.getByLabelText('Description *');
        fireEvent.change(descriptionField, { target: { value: 'Task description' } });

        const cancelButton = screen.getByText('Cancel');
        fireEvent.click(cancelButton);

        setTimeout(() => {
            expect(nameField.value).toBe('');
            expect(dueDateField.value).toBe('');
            expect(descriptionField.value).toBe('');
            expect(onCloseMock).toHaveBeenCalled();
        }, 50);
    });
});
