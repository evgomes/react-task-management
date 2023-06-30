import Layout from './components/Layout/Layout';
import Grid from '@mui/material/Grid';
import TasksColumn from './components/TasksColumn/TasksColumn';

import { TODO } from './constants/task-status';

function App() {
  return (
    <Layout>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <TasksColumn status={TODO} />
        </Grid>
        <Grid item xs={4}>
          Second Column
        </Grid>
        <Grid item xs={4}>
          Third Column
        </Grid>
      </Grid>
    </Layout>
  );
}

export default App;
