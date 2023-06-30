import moment from 'moment';

import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import './TaskCard.css';

export default function TaskCard({ task, color }) {
    const { id, name, description, dueDate } = task;

    return (
        <>
            <Card className="task-card" style={{ borderLeft: `5px solid ${color}` }}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                    <div className="due-date">
                        <Chip icon={<QueryBuilderIcon />} label={`Due date: ${moment(dueDate).format('MM/DD/YYYY')}`} />
                    </div>
                </CardContent>
            </Card>
        </>
    );
}