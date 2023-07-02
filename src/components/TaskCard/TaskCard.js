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
import { useNavigate } from 'react-router-dom';

import './TaskCard.css';

export default function TaskCard({ task, color }) {
    const { id, name, description, dueDate } = task;

    const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
    const navigate = useNavigate();

    const onDeleteTask = () => {
        setIsDeleteDialogOpen(true);
    };

    const onCloseDeleteDialog = () => {
        setIsDeleteDialogOpen(false);
    };

    const onEditTask = () => {
        navigate(`/task/${id}`, { replace: true });
    };

    return (
        <>
            <Card className="task-card" style={{ borderLeft: `5px solid ${color}` }}>
                <CardContent>
                    <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                        marginBottom="1em">
                        <Typography gutterBottom variant="h5" component="div" className="cursor-pointer" onClick={onEditTask}>
                            {name}
                        </Typography>
                        <IconButton aria-label="Delete" size="large" onClick={onDeleteTask}>
                            <DeleteIcon fontSize="medium" />
                        </IconButton>
                    </Stack>

                    <Typography variant="body2" color="text.secondary" className="cursor-pointer" onClick={onEditTask}>
                        {description}
                    </Typography>
                    <div className="due-date cursor-pointer" onClick={onEditTask}>
                        <Chip icon={<QueryBuilderIcon />} label={`Due date: ${moment(dueDate).format('MM/DD/YYYY')}`} className="cursor-pointer" />
                    </div>
                </CardContent>
            </Card>
            <DeleteTaskDialog open={isDeleteDialogOpen} onClose={onCloseDeleteDialog} task={task} />
        </>
    );
}