// pages/api/users.ts
export interface User {
    id: number;
    email: string;
    password: string;
  }
  
  let users: User[] = [
    { id: 1, email: "test@hotmail.com", password: "password" },
    { id: 2, email: "john.doe@outlook.com", password: "123456" },
    { id: 3, email: "jane@yahoo.com", password: "qwerty" },
    { id: 4, email: "Amnahere2003@gmail.com", password: "111" },

  ];
  
  export function getUsers(): User[] {
    return users;
  }
  
  export function addUser(user: User): void {
    users.push(user);
  }
  
  export function findUserByEmail(email: string): User | undefined {
    return users.find((user) => user.email === email);
  }
  