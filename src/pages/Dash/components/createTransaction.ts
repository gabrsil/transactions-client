import { graphql } from "relay-runtime";

export const CreateTransaction = graphql`
    mutation createTransactionMutation($params: CreateTransactionInput!) {
        createTransaction(params: $params){
            id
        }
    }
`