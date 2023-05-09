interface INote {
  id: string;
  userId: string;
  title: string;
  description: string;
  dateCreation: string;
}

interface IUser {
  userId: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  createdAt: string;
  dateOfBirth: string;
}

export type { INote, IUser };
