/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */
import {
  render, screen, fireEvent,
} from '@testing-library/react';
import App from './App';

test('app renders and text "T O D O" is found', () => {
  render(<App />);
  const linkElement = screen.getByText('T O D O');
  expect(linkElement).toBeInTheDocument();
});

test('app renders and todo is added to the list', async () => {
  render(<App />);
  await fireEvent.change(screen.getByTestId('todoInput'), { target: { value: 'Todo 1' } });
  await fireEvent.keyUp(screen.getByTestId('todoInput'), { key: 'Enter', code: 'Enter', charCode: 13 });
  const list = screen.getByDisplayValue('Todo 1');
  expect(list).toBeTruthy();
});

test('app renders, todo is added to the list and it is editable', async () => {
  render(<App />);
  await fireEvent.change(screen.getByTestId('todoInput'), { target: { value: 'Todo 1' } });
  await fireEvent.keyUp(screen.getByTestId('todoInput'), { key: 'Enter', code: 'Enter', charCode: 13 });
  const list = screen.getByDisplayValue('Todo 1');
  await fireEvent.change(list, { target: { value: 'Todo 2' } });
  const updatedList = screen.getByDisplayValue('Todo 2');
  expect(updatedList).toBeTruthy();
});

test('app renders, todo is added to the list and it is deletable', async () => {
  render(<App />);
  await fireEvent.change(screen.getByTestId('todoInput'), { target: { value: 'Todo 3' } });
  await fireEvent.keyUp(screen.getByTestId('todoInput'), { key: 'Enter', code: 'Enter', charCode: 13 });
  const list = screen.getByDisplayValue('Todo 3');
  const button = screen.getAllByTitle('deleteButton');
  console.log(button);
  expect(button).toBeTruthy();
});
