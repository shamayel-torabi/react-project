import { DefaultUser } from "next-auth";

interface IUserWithPassword extends DefaultUser {
    password: string;
    role: "Admin" | "User" | "Editor";
}

const users: IUserWithPassword[] = [
    { id: "1", name: "شمایل ترابی", email: "sh-torabi@hrec.co.ir", image: "", password: "sham", role: "Admin" },
    { id: "2", name: "سکینه ترابی", email: "sk-torabi@hrec.co.ir", image: "", password: "sknh", role: "User" },
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
        }, 300);
    });

    return myPromise;
}