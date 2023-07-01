import moment from 'moment';

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import DeleteTaskDialog from '../DeleteTaskDialog/DeleteTaskDialog';

import { useState } from 'react';

import './TaskCard.css';

export default function TaskCard({ task, color }) {
    const { name, description, dueDate } = task;
    const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

    const onDeleteTask = () => {
        setIsDeleteDialogOpen(true);
    }

    const onCloseDeleteDialog = () => {
        setIsDeleteDialogOpen(false);
    }

    return (
        <>
            <Card className="task-card" style={{ borderLeft: `5px solid ${color}` }}>
                <CardContent>
                    <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                        marginBottom="1em">
                        <Typography gutterBottom variant="h5" component="div">
                            {name}
                        </Typography>
                        <IconButton aria-label="Delete" size="large" onClick={onDeleteTask}>
                            <DeleteIcon fontSize="medium" />
                        </IconButton>
                    </Stack>

                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                    <div className="due-date">
                        <Chip icon={<QueryBuilderIcon />} label={`Due date: ${moment(dueDate).format('MM/DD/YYYY')}`} />
                    </div>
                </CardContent>
            </Card>
            <DeleteTaskDialog open={isDeleteDialogOpen} onClose={onCloseDeleteDialog} task={task} />
        </>

    );
}