import { IUser } from "@/types/types";

interface IUserWithPassword extends IUser {
    password: string;
}

const users: IUserWithPassword[] = [
    { id: "1", name: "شمایل ترابی", email: "sh-torabi@hrec.co.ir", image: "/avatars/shadcn.jpg", password: "sham", role: "Admin" },
    { id: "2", name: "سکینه ترابی", email: "sk-torabi@hrec.co.ir", image: "/avatars/shadcn.jpg", password: "sknh", role: "User" },
]

export const getUser = async (email: string): Promise<IUserWithPassword | null> => {
    const myPromise: Promise<IUserWithPassword | null> = new Promise((resolve, reject) => {
        setTimeout(() => {
            const user: IUserWithPassword | undefined = users.find(u => u.email == email);

            if (user) {
                resolve(user);
            }
            else
                reject(null)
        }, 100);
    });

    return myPromise;
}