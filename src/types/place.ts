export default interface Place {
  id: string;
  name: string;
  stars: number;
  pic: string;
  typeId?: number;
  type?: string;
  info: {
    description?: string;
    address?: string;
    price?: string;
  };
  country: {
    id: number;
    name: string;
  };
  city: {
    id: number;
    name: string;
  };
}
