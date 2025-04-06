export interface Profile {
  id: number;
  name: string;
  age: number;
  bio: string;
  images: string[];
}

export interface Message {
  id: number;
  text: string;
  timestamp: Date;
  isUser: boolean;
}