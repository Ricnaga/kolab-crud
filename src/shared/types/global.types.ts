export type PostType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type CommentType = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

type GeoType = {
  lat: string;
  lng: string;
};

type AddressType = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: GeoType;
};

type CompanyType = {
  name: string;
  catchPhrase: string;
  bs: string;
};

export type UserType = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address: AddressType;
  company: CompanyType;
};

export type ResultHook<T = unknown> = Record<"current", T>;
