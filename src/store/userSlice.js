import { createSlice } from "@reduxjs/toolkit";

const users = [
  {
    id: 1,
    name: "Tanmay",
    role: "Dev",
    avatarUrl: "https://i.pravatar.cc/100?img=1",
  },
  {
    id: 2,
    name: "Rahul",
    role: "Designer",
    avatarUrl: "https://i.pravatar.cc/100?img=2",
  },
  {
    id: 3,
    name: "Priya",
    role: "PM",
    avatarUrl: "https://i.pravatar.cc/100?img=3",
  },
];

const userSlice = createSlice({
  //Boilerplate code
  name: "users",
  initialState: {
    list: [...users],
  },
  reducers: {
    addUser: (state, action) => {
      state.list.push(action.payload);
    },
    removeUser: (state, action) => {
      state.list = state.list.filter((u) => u.id !== action.payload);
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
