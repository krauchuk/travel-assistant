import { gql } from 'apollo-boost';

const places = (page: number) => (
  gql`
  query placesQuery {
    places(page: ${page}) {
      all {
        id
        name
        stars
        pic
        info {
          price
          address
        }
      }
      popular {
        id
        name
        stars
        pic
        info {
          price
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

const place = (id: string) => (
  gql`
  query placeQuery {
    place(id: ${id}) {
      id
      name
      stars
      pic
      type
      typeId
      info {
        description
        price
        address
      }
      city {
        id
        name
      }
      country {
        id
        name
      }
    }
  }
`);

export {
  places,
  place,
};
