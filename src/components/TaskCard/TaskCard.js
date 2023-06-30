import moment from 'moment';

import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';

export default function TaskCard({ task }) {
    const { id, name, description, dueDate } = task;

    return (
        <Paper className="task-card" square elevation={1}>
            <Typography variant="h5" color="inherit">
                {name}
            </Typography>
            <Divider />
            <Typography variant="p" color="inherit">
                {description}
            </Typography>
            <Divider />
            <Chip icon={<QueryBuilderIcon />} label={`Due date: ${moment(dueDate).format('MM/DD/YYY')}`} />
        </Paper>
    );
}