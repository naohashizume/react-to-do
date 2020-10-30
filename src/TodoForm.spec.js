import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom/extend-expect';
import {TodoForm} from "./App";

describe('TodoForm', () => {
    it('should not call addTodo when the input is empty', () => {
      // to generate mock behavior
      const addTodo = jest.fn();
      render(<TodoForm addTodo={addTodo} />);
      const input = screen.getByTestId('todo-form');
      
      // type Enter key
      userEvent.type(input, '{enter}')
      expect(addTodo).not.toHaveBeenCalled();

      // type "Learn React" and Enter key
      fireEvent.change(input, { target: { value: 'Learn React' } });
      userEvent.type(input, '{enter}')
      // ensure addTodo has been called
      expect(addTodo).toHaveBeenNthCalledWith(1, 'Learn React');
    });
});

