interface UserState {
  ssoInfo: SSOInfoProps;
}

export interface SSOInfoProps {
  username: string;
  role: Array<any>;
  permission?: {
    api: Array<any>;
    view: Array<any>;
  }
}

export interface CommonState {
  routes: Array<any>;
  asyncAddRouters?: Array<any>;
  loadingTimes: number;
  message: {
    status: Boolean;
    type: string;
    content: string
  }
}

export interface GlobalDataProps {
  user: UserState;
  common: CommonState
}
