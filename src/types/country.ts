import City from './city';
import Place from './place';

export default interface Country {
  id: string;
  name: string;
  stars: number;
  pic: string;
  info: {
    description: string;
    address?: string;
    price?: string;
  };
  cities: Array<City>;
  popularCities: Array<City>;
  popularPlaces: Array<Place>;
}
