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
    image: 'assets/logos/poke.png'
  },
  {
    path: '/home/users',
    name: 'Ver Usuarios',
    icon: 'fas fa-user',
    image: 'assets/logos/user.jpg'
  }
];

