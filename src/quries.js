import gql from "graphql-tag";

export const HOME_PAGE = gql`
  {
    movies(limit: 50, rating: 7.0) {
      id
      title
      genres
      rating
    }
  }
`;