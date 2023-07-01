import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';

import TaskCard from '../TaskCard/TaskCard';

import { useSelector } from 'react-redux'
import { useState } from 'react';

import './TasksColumn.css';
import AddTaskDialog from '../AddTaskDialog/AddTaskDialog';

export default function TasksColumn({ status, color }) {
    const tasks = useSelector((state) => state.tasks.filter(note => note.status === status).sort((firstTask, secondTask) => firstTask.order > secondTask.order));
    const taskCards = tasks.map((task, index) => <TaskCard key={index} task={task} color={color} />);

    const [open, setOpen] = useState(false);

    const onAddTaskClicked = () => {
        setOpen(true);
    }

    const onCloseAddDialog = () => {
        setOpen(false);
    }

    return (
        <Paper className="task-column" square elevation={3}>
            <div className="task-column-header">
                <Typography variant="h4" color="inherit">
                    {status}
                </Typography>
            </div>
            <Divider />
            {
                tasks.length > 0 && <div className="task-column-body">
                    {taskCards}
                </div>
            }
            <Divider />
            <div className="task-column-footer">
                <IconButton aria-label="Add" size="large" onClick={onAddTaskClicked}>
                    <AddIcon fontSize="inherit" />
                </IconButton>
                <AddTaskDialog open={open} onClose={onCloseAddDialog} status={status} />
            </div>
        </Paper>
    );
}