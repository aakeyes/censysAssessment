import { render, screen } from '@testing-library/react';
import App from './App';

test('renders host search', () => {
  const wrapper = render(<App />);

  const formTag = wrapper.getByRole('form');
  const hostBox = screen.getByText(/Host:/);
  const hostSubmitButton = screen.getByText(/Submit/);

  expect(hostBox).toBeInTheDocument();
  expect(formTag).toBeInTheDocument();
  expect(hostSubmitButton).toBeInTheDocument();

});

