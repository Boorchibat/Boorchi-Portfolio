 type Project = {
  _id?: string; 
  title: string;
  shortDescription: string;
  description: string;
  image: string;
  link: string;
  sourceCode: string;
  tags: string[];
  createdAt?: string;
  updatedAt?: string;
  Type: string;
}
 type SignInResponse = {
  token: string;
  user: User;
}
type User = {
  _id: string;
  username: string;
  email: string;
  role: string;
  number: string;
}