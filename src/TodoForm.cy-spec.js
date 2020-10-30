import React from "react";
import {mount} from 'cypress-react-unit-test'
import {TodoForm} from "./App";

describe('TodoForm', () => {
  it('should not call addTodo when the input is empty', () => {
    // cypress built-in stub to control behavior
    const addTodo = cy.stub();
    mount(<TodoForm addTodo={addTodo} />);

    // type Enter key
    cy.get('input').type('{enter}')
    .then(() => {
      /* eslint-disable-next-line */
      expect(addTodo).not.have.been.called
    });

    // type "Learn React" and Enter key
    cy.get('input').type('Learn React{enter}')
    .then(() => {
      // ensure addTodo has been called
      expect(addTodo).to.be.calledWith('Learn React')
    })
  })
})

