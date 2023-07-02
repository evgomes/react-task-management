import Grid from '@mui/material/Grid';
import TasksColumn from '../../components/TasksColumn/TasksColumn';
import { TODO, DOING, DONE } from '../../constants/task-status';

import EditTaskDialog from '../../components/EditTaskDialog/EditTaskDialog';
import { useLocation } from 'react-router-dom';

export default function HomePage() {
    const location = useLocation();

    return (
        <>
            <Grid container spacing={3} columns={{ xs: 1, md: 3 }}>
                <Grid item xs={1} md={1}>
                    <TasksColumn status={TODO} color="red" />
                </Grid>
                <Grid item xs={1} md={1}>
                    <TasksColumn status={DOING} color="yellow" />
                </Grid>
                <Grid item xs={1} md={1}>
                    <TasksColumn status={DONE} color="green" />
                </Grid>
            </Grid>
            {
                location.pathname.includes("/task") && <EditTaskDialog />
            } 
        </>
    );
}