export interface UserAccountInterface {
  name: string;
  title: string;
  bio: {
    short: string;
    long: string;
  };
  img: string;
}

export interface UserProfilePropsType {
  user: UserAccountInterface;
}
