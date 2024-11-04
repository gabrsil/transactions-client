import { graphql } from "relay-runtime";

export const LogoutMutation = graphql`
    mutation logoutMutation($userId: String!) {
        logoutUser(userId: $userId){
            loggedOut
        }
    }
`