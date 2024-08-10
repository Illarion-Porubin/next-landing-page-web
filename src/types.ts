
export interface ISection {
  photoSlider?: IPicture[] | null;
  gallery?: IPicture[] | null;
  images?: IPicture[] | null;
  contentSlider?: { link: string; value: string }[] | null;
  content?: IContent[] | null;
  services?: IService[] | null;
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

export interface IAdmin {
  refreshToken: string;
  accessToken: string;
  id: string,
  email: string,
  isAdmin: boolean,
  password: string,
  isActivated: boolean,
}

export interface IService {
  title: string;
  desc: string;
  url: string;
  public_id: string,
  price: string;
}

//////fetch

export interface IUpdatePicture {
  action: string;
  page: string;
  sectionId: string;
  content: string;
  contentId: string;
  value: string;
  oldPubId: string;
  newPubId: string;
}

export interface IAddPicture {
  page: string;
  sectionId: string;
  content: string;
  value: string;
  newPubId: string;
}

export interface IDeletePicture {
  action: string;
  page: string;
  sectionId: string;
  content: string;
  contentId: string;
  oldPubId: string;
}

export interface IUpdateText {
  action: string;
  page: string;
  sectionId: string;
  contentId: string;
  value: string;
}

export interface IUpdateService {
  url?: string;
  newPubId?: string;
  type?: "price" | "desc" | "title";
  action?: string;
  oldPubId?: string;
  value: string;
  page: string;
  sectionId: string;
  contentId: string;
}

export interface IUpdateServicePicture {
  url?: string;
  newPubId?: string;
  oldPubId?: string;
  page: string;
  sectionId: string;
  contentId: string;
}

export interface IUpdateUser {
  action: string;
  newValue: string;
  label: string;
}