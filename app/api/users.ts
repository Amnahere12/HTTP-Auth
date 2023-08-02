// app/api/users.ts
export interface User {
    id: number;
    email: string;
    password: string;
  }
  
  let users: User[] = [
    { id: 1, email: "test@example.com", password: "password" },
    { id: 2, email: "john.doe@example.com", password: "123456" },
    { id: 3, email: "jane.smith@example.com", password: "qwerty" },
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
  