import enjoy from './enjoy/enjoy';
import favoritesCoffe from './Favourites_Coffee/favorites';
import about from './About/about';
import mobile from './Mobile App/mobile';

const main = document.createElement('main');
main.append(
  enjoy.enjoy,
  favoritesCoffe.favoritesCoffe,
  about.about,
  mobile.mobile,
);

export default main;
