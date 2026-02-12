
export type Role = "Users" | "Admin"

export type UserType = {
  id: string;
  name: string;
  role: Role;
};