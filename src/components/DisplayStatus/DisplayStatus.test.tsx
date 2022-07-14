import { render, screen } from "@testing-library/react";
import DisplayStatus from './DisplayStatus';

test('display status win', () => {
  const { container } = render(<DisplayStatus status={'win'} />);
  // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
  const div = container.getElementsByClassName('win')
  expect(div.length).toBe(1)
  expect(div[0].className).toBe('win status-wrapper')
});

test('display status lose', () => {
  const { container } = render(<DisplayStatus status={'lose'} />);
  // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
  const div = container.getElementsByClassName('lose')
  expect(div.length).toBe(1)
  expect(div[0].className).toBe('lose status-wrapper')
});