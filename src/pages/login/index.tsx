import { useState } from 'react';
import { verify } from '../../util/fetchHelper';

const Auth = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit() {
    if (!username || !password) {
      setErrorMsg('Either field is unfilled');
      return;
    }

    const res = await verify(username, password);
    console.log('res is ', res);
  }

  return (
    <>
      <label>
        <p>Username</p>
        <input
          type='text'
          name='username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <label>
        <p>Password</p>
        <input
          type='password'
          name='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button onClick={handleSubmit}>submit</button>
      <p style={{ color: 'red' }}>{errorMsg}</p>
    </>
  );
};

export default Auth;
