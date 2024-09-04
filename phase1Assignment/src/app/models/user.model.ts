export interface User {
    id: number;
    username: string;
    email: string;
    roles: string[];  // Roles assigned to the user (e.g., admin, user)
    groups: string[]; // Groups the user belongs to
  }
  