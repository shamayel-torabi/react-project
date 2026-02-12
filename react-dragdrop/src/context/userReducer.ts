import type { Role, UserType } from "./UserType";

export type UserState = {
  users: UserType[];
};

export type Action = {
  type: string;
  payload: { userId: string; role: Role };
};

export const userReducer = (state: UserState, action: Action): UserState => {
  switch (action.type) {
    case "setRole": {
      const { userId, role } = action.payload;
      const updateUsers = [...state.users];

      const userIndex = updateUsers.findIndex((u) => u.id === userId);
      updateUsers[userIndex].role = role;

      return { users: updateUsers };
    }
    default:
      return state;
  }
};
