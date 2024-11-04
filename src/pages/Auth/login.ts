import { graphql } from "relay-runtime";


export const LoginMutation = graphql`
    mutation loginMutation($email: String!, $password: String!) {
        loginUser(email: $email, password: $password){
            token
        }
    }
`