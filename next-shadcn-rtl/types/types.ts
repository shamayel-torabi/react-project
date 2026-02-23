export interface IUser {
  id: string;
  name: string;
  email: string;
  role: "Admin" | "User" | "Editor";
  image?: string | undefined | null;
}
