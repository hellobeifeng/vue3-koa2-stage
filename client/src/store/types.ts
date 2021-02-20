interface UserProps {
  userInfo: UserInfoProps;
}

export interface UserInfoProps {
  name: string;
  age?: number;
}

export interface GlobalDataProps {
  user: UserProps;
}
