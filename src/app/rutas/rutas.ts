export interface Ruta {
  path: string;
  name: string;
  icon: string;
  image?: string;
}

export const RUTAS: Ruta[] = [
  {
    path: '/auth',
    name: 'Login',
    icon: 'fas fa-door-closed'
  },
  {
    path: '/home/main',
    name: 'Home',
    icon: 'fas fa-home'
  },
  {
    path: '/home/pokemons',
    name: 'CRUD Pokemons',
    icon: 'fas fa-frog',
    image: 'https://assets.stickpng.com/categories/345.png'
  },
  {
    path: '/home/users',
    name: 'Ver Usuarios',
    icon: 'fas fa-user',
    image: 'https://miro.medium.com/max/724/0*Zw1ZfCk0svcXVQXg.jpg'
  }
];

