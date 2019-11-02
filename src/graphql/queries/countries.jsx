import { gql } from 'apollo-boost';

const countries = (page) => (
  gql`
  query countriesQuery {
    countries(page: ${page}) {
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

const country = (id) => (
  gql`
  query countryQuery {
    country(id: ${id}) {
      id
      name
      stars
      info {
        description
      }
      pic
      cities {
        id
        name
        stars
        pic
        info {
          description
        }
      }
      popularCities {
        id
        name
        stars
        pic
        info {
          description
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
    }
  }
`);

export {
  countries,
  country,
};
