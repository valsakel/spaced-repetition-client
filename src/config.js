// export const API_BASE_URL =
//   process.env.REACT_APP_API_BASE_URL || 'http://localhost:8080/api';
export const API_BASE_URL = process.env.NODE_ENV === 'production'
  ? 'https://spaced-rep-marjef-server.herokuapp.com/api' : 'http://localhost:8080/api';