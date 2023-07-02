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
import { editTask } from '../../state/reducers/tasks/tasksSlice';

import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux'

export default function EditTaskDialog() {
    const location = useLocation();
    const navigate = useNavigate();
    const { id } = useParams();

    const open = (location.pathname === `/task/${id}`);
    const task = useSelector(state => { 
        const index = state.tasks.findIndex(task => task.id === id);
        if(index === -1) {
            return null;
        }

        return state.tasks[index];
    });

    const [name, setName] = useState(task?.name || '');
    const [hasNameError, setHasNameError] = useState(false);

    const [dueDate, setDueDate] = useState(task?.dueDate || '');
    const [hasDueDateError, setHasDueDateError] = useState(false);

    const [description, setDescription] = useState(task?.description || '');
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
        navigate('/');
    };

    const onSubmit = () => {
        dispatch(editTask({
            id,
            name,
            description,
            dueDate,
        }));

        onCloseDialog();
    }

    return (
        <Dialog open={open} onClose={onCloseDialog} className="task-dialog">
            <DialogTitle>Edit Task</DialogTitle>
            <DialogContent className="task-dialog-content">
                <div className="task-dialog-form">
                    <div className="task-dialog-field">
                        <TextField
                            name="name"
                            label="Name *"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            onBlur={() => validateName()} />
                        <ErrorMessage message="The name is required." show={hasNameError} />
                    </div>
                    <div className="task-dialog-field">
                        <DatePicker
                            name="dueDate"
                            label="Due date *"
                            format="MM/DD/YYYY"
                            value={moment(dueDate).utc()}
                            onChange={(e) => setDueDate(moment(e).utc())}
                            onBlur={() => validateDueDate()} />
                        <ErrorMessage message="The due date is required." show={hasDueDateError} />
                    </div>
                    <div className="task-dialog-field">
                        <TextField
                            multiline
                            rows={4}
                            name="description"
                            label="Description *"
                            value={description}
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
        </Dialog>
    );
}