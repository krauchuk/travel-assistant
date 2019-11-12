import { gql } from 'apollo-boost';

const cities = (page: number) => (
  gql`
  query citiesQuery {
    cities(page: ${page}) {
      all {
        id
        name
        stars
        pic
        info {
          description
        }
      }
      popular {
        id
        name
        stars
        pic
        info {
          description
        }
      }
      pagination {
        currentPage
        hasNext
        hasPrev
      }
    }
  }
`);

const city = (id: string) => (
  gql`
  query cityQuery {
    city(id: ${id}) {
      id
      name
      stars
      info {
        description
      }
      pic
      country {
        id
        name
      }
      places {
        id
        name
        stars
        pic
        typeId
        info {
          price
          address
        }
      }
      popularPlaces {
        id
        name
        stars
        pic
        info {
          price
        }
      }
      placesTypes {
        id
        name
      }
    }
  }
`);

export {
  cities,
  city,
};
