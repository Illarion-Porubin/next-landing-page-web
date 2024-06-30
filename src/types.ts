


export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  card: string;
}

export interface IUserForm {
  value: string;
  label: string;
}

export interface IProject {
  main: IMain;
  about: IAbout;
  portfolio: IPortfolio;
  prices: IPrices;
  contacts: IContacts;
}

export interface IService {
  title: string;
  desc: string;
  price: string;
  image: string;
}

export interface IContent {
  project: IProject;
  user: IUser;
}
export interface IMain {
  desc: string;
  title_firstPart: string;
  title_secondPart: string;
}

export interface IAbout {
  title_firstPart: string;
  title_secondPart: string;
  desc: string;
  images: {
    link_1: string,
    link_2: string,
  }

}

export interface IPortfolio {
  gallery: { link: string }[]
}

export interface IPrices {
  title: string;
  services: IService[]
}

export interface IContacts {
  title: string;
  desc: string;
  phone: string;
  email: string;
  address: string;
}

export interface IAdmin {
  accessToken: string;
  user: {
    id: string;
    email: string;
    password: string;
    isAdmin: boolean;
    isActivated: boolean;
  }
}