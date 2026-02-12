import { createContext } from "react"
import type { Role, UserType } from "./UserType"

export type UserContexType = {
    users: UserType[],
    setRole: (userId: string, role: Role ) => void;
}

export const UserContex = createContext<UserContexType>({
    users:[],
    setRole: ()=>{}
})

