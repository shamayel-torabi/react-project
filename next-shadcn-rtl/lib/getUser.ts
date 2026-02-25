
interface IUser {
  id: string;
  name: string;
  email: string;
  role: "Admin" | "User" | "Editor";
  image?: string | undefined | null;
  password: string;
}

const users: IUser[] = [
  { id: "1", name: "شمایل ترابی", email: "sh-torabi@hrec.co.ir", image: "/avatars/shadcn.jpg", password: "sham", role: "Admin" },
  { id: "2", name: "سکینه ترابی", email: "sk-torabi@hrec.co.ir", image: "/avatars/shadcn.jpg", password: "sknh", role: "User" },
];

export const getUser = async (email: string): Promise<IUser | null> => {
  const myPromise: Promise<IUser | null> = new Promise((resolve, reject) => {
    setTimeout(() => {
      const user: IUser | undefined = users.find((u) => u.email == email);

      if (user) {
        resolve(user);
      } else reject(null);
    }, 100);
  });

  return myPromise;
};
