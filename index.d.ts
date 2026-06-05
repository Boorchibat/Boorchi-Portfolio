export type Project = {
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