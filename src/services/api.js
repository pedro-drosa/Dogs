export function TOKEN_POST(body) {
  return {
    url: `${process.env.REACT_APP_API_URL}/jwt-auth/v1/token`,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}

export function USER_GET() {
  return true;
}
