import { graphql } from "relay-runtime";

export const TransactionByUser = graphql`
    query transactionsByUserQuery($userId: ID!){
        listUserTransactions(userId: $userId){
            id,            
            amount,
            originId,
            destinationId,
            createdAt,
            status,
        }
    }
`