import { graphql } from "react-relay";

export const UserDataQuery = graphql`
  query getUserInfoByIdQuery($userId: ID!) {
    getUserInfoById(userId: $userId) {
      id
      name
      email
      balance
      code
    }
  }
`;
