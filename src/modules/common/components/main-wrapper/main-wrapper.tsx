import { ReactNode } from 'react';
import { Wrapper } from './main-wrapper.style';

type Props = {
  children: ReactNode;
};

export const MainWrapper = (Props: Props) => {
  return <Wrapper>{Props.children}</Wrapper>;
};

export default MainWrapper;
