/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */
import {
  render, screen, fireEvent,
} from '@testing-library/react';
import App from './App';
import Provider from './context';

test('should be able to find text "T O D O"', async () => {
  render(<Provider><App /></Provider>);
  const linkElement = screen.getByText('T O D O');
  expect(linkElement).toBeInTheDocument();
});

test('should be able to insert a new todo', async () => {
  render(<Provider><App /></Provider>);
  await fireEvent.change(screen.getByTestId('todoInput'), { target: { value: 'Todo 1' } });
  await fireEvent.keyUp(screen.getByTestId('todoInput'), { key: 'Enter', code: 'Enter', charCode: 13 });
  const list = screen.getByDisplayValue('Todo 1');
  expect(list).toBeTruthy();
});

test('should be able to update and delete existing todos', async () => {
  render(<Provider><App /></Provider>);
  fireEvent.change(screen.getByTestId('todoInput'), { target: { value: 'Todo 1' } });
  fireEvent.submit(screen.getByTestId('formTodo'));
  const item = screen.getByDisplayValue('Todo 1');
  await fireEvent.change(item, { target: { value: 'Todo 2' } });
  const todo = screen.getByDisplayValue('Todo 2');
  expect(todo).toBeTruthy();

  const [deleteButton] = screen.getAllByRole('button');
  fireEvent.click(deleteButton);
  const todoAgain = screen.queryByDisplayValue('Todo 2');
  expect(todoAgain).not.toBeTruthy();
});

test('should not be able to insert an empty todo', async () => {
  render(<Provider><App /></Provider>);
  await fireEvent.submit(screen.getByTestId('formTodo'));
  const list = screen.queryByDisplayValue('Todo 1');
  expect(list).not.toBeTruthy();
});

test('should be able to mark a todo as completed', async () => {
  render(<Provider><App /></Provider>);
  await fireEvent.change(screen.getByTestId('todoInput'), { target: { value: 'Todo 1' } });
  fireEvent.submit(screen.getByTestId('formTodo'));
  const item = screen.getByDisplayValue('Todo 1');
  const [, list] = screen.getAllByRole('checkbox');
  fireEvent.click(list);
  expect(item).toHaveClass('taskCompleted');

  const [deleteButton] = screen.getAllByRole('button');
  fireEvent.click(deleteButton);
});

test('should be able to filter existing todos so the app only shows active todos', async () => {
  render(<Provider><App /></Provider>);
  fireEvent.change(screen.getByTestId('todoInput'), { target: { value: 'Todo 1' } });
  fireEvent.submit(screen.getByTestId('formTodo'));
  fireEvent.change(screen.getByTestId('todoInput'), { target: { value: 'Todo 2' } });
  fireEvent.submit(screen.getByTestId('formTodo'));
  fireEvent.change(screen.getByTestId('todoInput'), { target: { value: 'Todo 3' } });
  fireEvent.submit(screen.getByTestId('formTodo'));

  const todo3 = screen.getByDisplayValue('Todo 3');

  const [, firstCheckbox] = screen.getAllByRole('checkbox');
  const [, , secondCheckbox] = screen.getAllByRole('checkbox');
  fireEvent.click(firstCheckbox);
  fireEvent.click(secondCheckbox);
  const [, active] = screen.getAllByRole('link');
  fireEvent.click(active);

  expect(screen.queryByDisplayValue('Todo 1')).not.toBeTruthy();
  expect(screen.queryByDisplayValue('Todo 2')).not.toBeTruthy();
  expect(todo3).toBeTruthy();
});

test('should be able to filter existing todos so the app only shows completed todos', async () => {
  render(<Provider><App /></Provider>);
  const [, , completed] = screen.getAllByRole('link');
  fireEvent.click(completed);

  expect(screen.queryByDisplayValue('Todo 1')).toBeTruthy();
  expect(screen.queryByDisplayValue('Todo 2')).toBeTruthy();
  expect(screen.queryByDisplayValue('Todo 3')).not.toBeTruthy();
});

test('should be able to clear all the existing and completed todos', async () => {
  render(<Provider><App /></Provider>);
  const [, , , cleared] = screen.getAllByRole('link');
  fireEvent.click(cleared);

  expect(screen.queryByDisplayValue('Todo 1')).not.toBeTruthy();
  expect(screen.queryByDisplayValue('Todo 2')).not.toBeTruthy();
  expect(screen.queryByDisplayValue('Todo 3')).toBeTruthy();
});
