export interface ISection {
  photoSlider?: IPicture[] | null;
  gallery?: IPicture[] | null;
  images?: IPicture[] | null;
  contentSlider?: { link: string; value: string }[] | null;
  content?: IContent[] | null;
  services?: { desc: string; image: string; price: string; title: string }[] | null;
}

export interface IPicture {
  url: string;
  public_id: string;
}

export interface IProject {
  user: IUser;
  main: ISection[];
}

export interface IUser {
  userPhoto: IUserPhoto;
  userInfo: IUserInfo[];
}

export interface IUserInfo {
  value: string;
  label: string;
  desc: string;
}

export interface IUserPhoto {
  url: string;
  public_id: string;
}

export interface IContent {
  value: string;
  type: string;
  explan: string;
  label: string;
}

///admin

export interface IAdmin {
  refreshToken: string;
  accessToken: string;
  id: string,
  email: string,
  isAdmin: boolean,
  password: string,
  isActivated: boolean,
}