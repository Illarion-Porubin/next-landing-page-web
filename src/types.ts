
export interface ISiteInfo {
    title: string;
    value: string;
    mark: string;
  }
  
  export interface IUserInfo {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    card: string;
  }

  export interface IUser {
    value: string | undefined;
    label: string;
  }
  
  export interface IContent {
    siteInfo: ISiteInfo[];
    user: IUserInfo;
    galary: IPhoto[];
    sliderData: ISliderData;
  }
  
  export interface IAdmin {
    isAdmin: true;
    isActivated: true;
    accessToken: string;
    refreshToken: string;
    email: string;
  }
  
  export interface IForm {
    labe: string;
    placeholder: string;
    type: string;
  }
  
  export interface IPhoto {
    id: string;
    url: string;
  }
  
  export interface ISliderData {
    list: string[];
    slider1: IPhoto[];
    slider2: IPhoto[];
  }
  
  export interface IUpload {
    upload: {
      handleChange: (e: React.ChangeEvent<HTMLInputElement>) => Promise<void>;
      handlePick: () => void;
    }
  }

  
export interface ILinks {
  title: string;
  link: string;
}

export interface IPost {
  title: string;
  desc: string;
  img: string;
  userId: string;
  slug: string
}

// export interface IUser {
//   username: string;
//   email: string;
//   password: string;
//   img: string;
//   isAdmin: false
// }