export interface Ruta {
  path: string;
  name: string;
  icon: string;
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
    name: 'Pokemons',
    icon: 'fas fa-frog'
  },
  {
    path: '/home/users',
    name: 'User',
    icon: 'fas fa-user'
  },
  {
    path: '/home/cars',
    name: 'Car',
    icon: 'fas fa-car'
  },
];

