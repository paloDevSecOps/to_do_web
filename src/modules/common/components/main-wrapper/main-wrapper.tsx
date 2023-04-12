import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  backgroundColorFlag: boolean;
};

export const MainWrapper = (Props: Props) => {
  if (Props.backgroundColorFlag) {
    return <div style={{ backgroundColor: 'pink' }}>{Props.children}</div>;
  }
  return <div>{Props.children}</div>;
};

export default MainWrapper;
