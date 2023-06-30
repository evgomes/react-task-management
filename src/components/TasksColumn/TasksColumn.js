import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import TaskCard from '../TaskCard/TaskCard';

import { useSelector } from 'react-redux'

export default function TasksColumn({ status }) {
    const tasks = useSelector((state) => state.tasks.filter(note => note.status === status));
    const taskCards = tasks.map((task, index) => <TaskCard key={index} task={task} />);

    return (
        <Paper className="task-column" square elevation={1}>
            <Typography variant="h3" color="inherit">
                {status}
            </Typography>
            <Divider />
            {taskCards}
        </Paper>
    );
}