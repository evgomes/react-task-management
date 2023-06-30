import Layout from './components/Layout/Layout';
import Grid from '@mui/material/Grid';
import TasksColumn from './components/TasksColumn/TasksColumn';

import { TODO, DOING, DONE } from './constants/task-status';

function App() {
  return (
    <Layout>
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
    </Layout>
  );
}

export default App;
