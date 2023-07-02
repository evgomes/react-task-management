import moment from 'moment/moment';

import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../../state/reducers/tasks/tasksSlice';

import './AddTaskDialog.css';

export default function AddTaskDialog({ open, onClose, status }) {
    const [name, setName] = useState('');
    const [hasNameError, setHasNameError] = useState(false);

    const [dueDate, setDueDate] = useState('');
    const [hasDueDateError, setHasDueDateError] = useState(false);

    const [description, setDescription] = useState('');
    const [hasDecriptionError, setHasDecriptionError] = useState(false);

    const dispatch = useDispatch();

    const validateName = () => {
        const hasError = (!name || name.trim() === '');
        setHasNameError(hasError);
    };

    const validateDueDate = () => {
        const hasError = (!dueDate || !moment(dueDate).isValid());
        setHasDueDateError(hasError);
    };

    const validateDescription = () => {
        const hasError = (!description || description.trim() === '');
        setHasDecriptionError(hasError);
    };

    const canSubmit = () => {
        return (name && name.trim() !== '') &&
            (dueDate && moment(dueDate).isValid()) &&
            (description && description.trim() !== '');
    }

    const onCloseDialog = () => {
        setName('');
        setDueDate('');
        setDescription('');
        onClose();
    };

    const onSubmit = () => {
        dispatch(addTask({
            name,
            description,
            dueDate,
            status,
        }));

        onCloseDialog();
    }

    return (
        <Dialog open={open} onClose={onCloseDialog} className="add-task-dialog">
            <DialogTitle>Add Task</DialogTitle>
            <DialogContent className="add-task-dialog-content">
                <div className="add-task-dialog-form">
                    <div className="add-task-dialog-field">
                        <TextField
                            name="name"
                            label="Name *"
                            onChange={(e) => setName(e.target.value)}
                            onBlur={() => validateName()} />
                        <ErrorMessage message="The name is required." show={hasNameError} />
                    </div>
                    <div className="add-task-dialog-field">
                        <DatePicker
                            name="dueDate"
                            label="Due date *"
                            format="MM/DD/YYYY"
                            onChange={(e) => setDueDate(moment(e).toDate())}
                            onBlur={() => validateDueDate()} />
                        <ErrorMessage message="The due date is required." show={hasDueDateError} />
                    </div>
                    <div className="add-task-dialog-field">
                        <TextField
                            multiline
                            rows={4}
                            name="description"
                            label="Description *"
                            onChange={(e) => setDescription(e.target.value)}
                            onBlur={() => validateDescription()}
                        />
                        <ErrorMessage message="The description is required." show={hasDecriptionError} />
                    </div>
                </div>
            </DialogContent>
            <DialogActions>
                <Button onClick={onCloseDialog}>Cancel</Button>
                <Button onClick={onSubmit} disabled={!canSubmit()}>Save</Button>
            </DialogActions>
        </Dialog >
    );
}