/* export const sortByName = ( data: Data[] ) => {
  console.log(data);
  const sort = data.sort((a,b) => (a.nombre > b.nombre) ? 1 : ((b.nombre > a.nombre) ? -1 : 0));
  console.log(sort);
  return [...sort];
} */


export interface Token {
  token: string;
}

export interface UserRequest {
  email:    string;
  password: string;
}


export interface Token {
    page:        number;
    per_page:    number;
    total:       number;
    total_pages: number;
    data:        User[];
    support:     Support;
}

export interface User {
    id:         number;
    email:      string;
    first_name: string;
    last_name:  string;
    avatar:     string;
}

export interface Support {
    url:  string;
    text: string;
}


/////

export interface ListUsers {
  page:        number;
  per_page:    number;
  total:       number;
  total_pages: number;
  data:        User[];
  support:     Support;
}

export interface User {
  id:         number;
  email:      string;
  first_name: string;
  last_name:  string;
  avatar:     string;
}

export interface Support {
  url:  string;
  text: string;
}


/////

export interface UserResponse {
  data:    User;
  support: Support;
}


///
export interface Car{
  marca: string;
  modelo: string;
  year: number;
}

