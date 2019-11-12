import Place from './place';

export default interface City {
  id: string;
  name: string;
  stars: number;
  pic: string;
  info: {
    description?: string;
    address?: string;
    price?: string;
  };
  places: Array<Place>;
  popularPlaces: Array<Place>;
  placesTypes: [{
    id: number;
    name: string;
  }];
  country: {
    id: number;
    name: string;
  };
}
