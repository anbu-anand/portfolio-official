import { createSlice } from '@reduxjs/toolkit';

import { users } from '../users';

export const usersSlice = createSlice({
    name: 'users',
    initialState: { usersList: users },
    reducers: {
        addUser: (state, action) => {
            state.usersList.push(action.payload);
        },
    },
});

export const { addUser } = usersSlice.actions;
export default usersSlice.reducer;
