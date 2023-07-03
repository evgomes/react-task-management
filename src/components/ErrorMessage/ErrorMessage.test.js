import { render, screen } from '@testing-library/react';
import ErrorMessage from './ErrorMessage';

describe('ErrorMessage', () => {
    it('should render compoent with proper message', () => {
        render(<ErrorMessage show={true} message="The field is required." />);
        const element = screen.getByText('The field is required.');
        expect(element).toBeInTheDocument();
    });
});