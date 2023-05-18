export interface INote {
  id: string;
  userId: string;
  title: string;
  description: string;
  dateCreation: string;
  author: string;
  isShared: boolean;
  availability: [];
}

export interface IUser {
  userId: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  createdAt: string;
  dateOfBirth: string;
}
