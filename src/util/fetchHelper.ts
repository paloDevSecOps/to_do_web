export async function verify(username: string, password: string) {
  const res = await fetch(
    'https://s6vdttf6jc.execute-api.ap-southeast-2.amazonaws.com/getUser',
    {
      method: 'POST',
      body: JSON.stringify({
        username: username,
        password: password,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  return await res.json();
}
