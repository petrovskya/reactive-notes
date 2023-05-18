export interface IUserAPI {
  id: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  createdAt: string;
  dateOfBirth: string;
}

export interface INoteAPI {
  id: string;
  userId: string;
  dateCreation: string;
  title: string;
  description: string;
}
