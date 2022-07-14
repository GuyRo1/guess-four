import { render, screen } from '@testing-library/react';
import Question from './Question'

test('renders Question with the first guess being 3', () => {
  render(<Question question={[3]} progress={[false]}/>); 
  const questionMarks = screen.getAllByText('?');
  expect(questionMarks.length).toBe(3)
  questionMarks.forEach(questionMark=>{
    expect(questionMark).toBeInTheDocument();
  })
  const guesses = screen.getAllByText('3')
  expect(guesses.length).toBe(1)
  expect(guesses[0]).toBeInTheDocument()
});

test('renders Question with no guesses', () => {
  render(<Question question={[]} progress={[]}/>); 
  const questionMarks = screen.getAllByText('?');
  expect(questionMarks.length).toBe(4)
  questionMarks.forEach(questionMark=>{
    expect(questionMark).toBeInTheDocument();
  })
});
