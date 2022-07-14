import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app and checks for cards', () => {
  render(<App />);
  const questionMarks = screen.getAllByText('?');
  expect(questionMarks.length).toBe(4)
  questionMarks.forEach(questionMark=>{
    expect(questionMark).toBeInTheDocument();
  })
});
