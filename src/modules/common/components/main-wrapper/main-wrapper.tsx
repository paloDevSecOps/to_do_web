import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const MainWrapper = ({ children }: Props) => {
  return <div>{children}</div>;
};
