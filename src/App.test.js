/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */
import {
  render, screen, fireEvent, within,
} from '@testing-library/react';
import App from './App';

test('app renders and text "T O D O" is found', () => {
  render(<App />);
  const linkElement = screen.getByText('T O D O');
  expect(linkElement).toBeInTheDocument();
});

test('app renders and persitence is present and noticable', () => {
  render(<App />);
  fireEvent.change(screen.getByTestId('todoInput'), { target: { value: 'Todo 1' } });
  fireEvent.keyUp(screen.getByTestId('todoInput'), { key: 'Enter', code: 'Enter', charCode: 13 });
  const list = screen.getByTestId('taskList');
  const { getAllByRole } = within(list);
  const items = getAllByRole(screen.getByTestId('taskItem'));
  expect(items.length).toBe(1);
});
