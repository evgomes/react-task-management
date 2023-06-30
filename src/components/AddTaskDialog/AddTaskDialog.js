import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import { useState } from 'react';

import './AddTaskDialog.css';

export default function AddTaskDialog({ open, onClose }) {
    const [name, setName] = useState('');

    const onCloseDialog = () => {
        onClose();
    };

    return (
        <Dialog open={open} onClose={onCloseDialog} className="add-task-dialog">
            <DialogTitle>Add Task</DialogTitle>
            <DialogContent className="add-task-dialog-content">
                <div className="add-task-dialog-form">
                    <div className="add-task-dialog-field">
                        <TextField
                            required
                            label="Name"
                            value={name}
                            onChange={(e) => setName(e.value)} />
                    </div>
                    <div className="add-task-dialog-field">
                        <DatePicker
                            required
                            label="Due date *" />
                    </div>
                    <div className="add-task-dialog-field">
                        <TextField
                            required
                            label="Description"
                            multiline
                            rows={4} />
                    </div>
                </div>
            </DialogContent>
            <DialogActions>
                <Button onClick={onCloseDialog}>Cancel</Button>
                <Button onClick={() => { }}>Save</Button>
            </DialogActions>
        </Dialog >
    );
}