const header = {
  'Content-Type': 'application/json',
  // eslint-disable-next-line prettier/prettier
  Accept: 'application/json,application/xhtml+xml,application/xml,text/html',
};

export const requestOptions = {
  headers: new Headers(header),
};
