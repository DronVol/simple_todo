import { handleActions } from 'redux-actions';

import * as actions from './actions';

const emptyTask = {newTask: ""};

export const getTask = handleActions({
    [actions.addTask](state, { payload }) {
        return { ...state, newTask: payload.task };
    },
}, emptyTask);