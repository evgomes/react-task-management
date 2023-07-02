import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'

import { MemoryRouter } from "react-router-dom";
import { Provider } from 'react-redux';

import store from '../state/store'

// Custom wrapper for localization provider
const LocalizationWrapper = ({ children }) => (
  <LocalizationProvider dateAdapter={AdapterMoment}>
    {children} 
  </LocalizationProvider>
);

export default function MockWrappers({ children }) {
  return (
    <MemoryRouter>
      <Provider store={store}>
        <LocalizationWrapper>
          {children}
        </LocalizationWrapper>
      </Provider>
    </MemoryRouter>
  )
}