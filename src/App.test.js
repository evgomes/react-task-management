import { render, screen } from '@testing-library/react'

import App from './App';
import MockWrappers from './tests/MockWrappers';

test('Render home page', async () => {
  render(<MockWrappers><App /></MockWrappers>)
  expect(screen.getByText(/Tasks Management/i)).toBeInTheDocument()
});