import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';

import { deleteTask } from '../../state/reducers/tasks/tasksSlice';
import { useDispatch } from 'react-redux';

export default function DeleteTaskDialog({ open, onClose, task }) {
    const { id, name } = task;

    const dispatch = useDispatch();

    const onCloseDialog = () => {
        onClose();
    }

    const onDeleteTask = () => {
        dispatch(deleteTask({ id }));
        onClose();
    };

    return (
        <Dialog open={open} onClose={onCloseDialog} className="add-task-dialog">
            <DialogTitle>Delete Task</DialogTitle>
            <DialogContent className="add-task-dialog-content">
                <p>Are you sure you want to delete the task "<strong>{name}</strong>"? This action cannot be reverted.</p>
            </DialogContent>
            <DialogActions>
                <Button onClick={onCloseDialog}>Cancel</Button>
                <Button onClick={onDeleteTask}>Confirm</Button>
            </DialogActions>
        </Dialog>
    );
}