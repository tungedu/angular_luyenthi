export type Product = {
  id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
  description: string;
};

export type RegisterUser = {
  name: string;
  email: string;
  password: string;
};

export type LoginUser = {
  email: string;
  password: string;
};
