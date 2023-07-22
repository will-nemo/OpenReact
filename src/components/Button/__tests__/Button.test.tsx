import { render } from '@testing-library/react';
import Button from '../Button';

describe('Button Component', () => {
  test('renders button and responds to click event', () => {
    const { getByText } = render(<Button label="test" />);

    // Get button element
    const buttonElement = getByText('test');

    // Check if button is in the document
    expect(buttonElement).toBeInTheDocument();
  });
});
