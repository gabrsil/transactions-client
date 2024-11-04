import { graphql } from "relay-runtime";

export const RegisterMutation = graphql`
    mutation registerMutation($params: CreateAccountInput!) {
        createUser(params: $params){
            id
        }
    }
`