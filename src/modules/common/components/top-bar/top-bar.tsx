import { Button } from './top-bar.style';

type Props = {
  isLoggedIn: boolean;
};

export default function TopBar({ isLoggedIn }: Props) {
  return (
    <div
      style={{
        backgroundColor: 'black',
        color: 'white',
        display: 'flex',
      }}
    >
      <h3> Welcome to the PALO todo list</h3>
      {isLoggedIn && <Button>Logout</Button>}
    </div>
  );
}
