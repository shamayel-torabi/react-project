import { useReducer, type PropsWithChildren } from "react"
import { UserContex, type UserContexType } from "./UserContex";
import { userReducer, type UserState } from "./userReducer";
import type { Role } from "./UserType";

const initialState: UserState = {
    users: [
        {
            id: "1",
            name: "شمایل",
            role: "Users"
        },
        {
            id: "2",
            name: "سکینه",
            role: "Users"
        }
    ]
}

export const UserProvider = ({ children }: PropsWithChildren) => {
    const [state, dispach] = useReducer(userReducer, initialState);

    const setRole = (userId: string, role: Role ) => {
        dispach({ type: "setRole", payload: { userId,  role}});
    }

    const contextValue: UserContexType = {
        users: state.users,
        setRole
    }

    return (
        <UserContex value={contextValue}>{children}</UserContex>
    )
}