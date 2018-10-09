import { createAction } from 'redux-actions';

// export const addTask = createAction('MENU_OPEN');

export const addTask = createAction('ADD_TASK', task => ({ task }));