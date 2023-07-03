import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux'; // assuming you have a Redux store
import DeleteTaskDialog from './DeleteTaskDialog';
import MockWrappers from '../../tests/MockWrappers';

import * as ReactRedux from 'react-redux'; // assuming you have a Redux store

let mockDispatchFunction = jest.fn(() => {});
jest.mock("react-redux", () => ({
    ...jest.requireActual("react-redux"),
    useDispatch: jest.fn(),
}));

describe('DeleteTaskDialog', () => {
    beforeEach(() => {
        ReactRedux.useDispatch = mockDispatchFunction;
    });

    it('should render dialog component', () => {
        render(<DeleteTaskDialog open={true} onClose={() => { }} task={{ id: '1', name: 'Task 1' }} />, { wrapper: MockWrappers })

        const dialogTitle = screen.getByText('Delete Task');
        expect(dialogTitle).toBeInTheDocument();
    });

    it('should render the task name in the confirmation message', () => {
        render(<DeleteTaskDialog open={true} onClose={() => { }} task={{ id: '1', name: 'Task 1' }} />, { wrapper: MockWrappers })

        const confirmationMessage = screen.getByText('Task 1');
        expect(confirmationMessage).toBeInTheDocument();
    });

    it('should cals onClose on cancel', () => {
        const handleClose = jest.fn();

        render(<DeleteTaskDialog open={true} onClose={handleClose} task={{ id: '1', name: 'Task 1' }} />, { wrapper: MockWrappers })

        const cancelButton = screen.getByText('Cancel');
        fireEvent.click(cancelButton);

        expect(handleClose).toHaveBeenCalled();
    });
});
