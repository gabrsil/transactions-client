/**
 * @generated SignedSource<<37240f3459e28b63ad8035c6464ad4b3>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type transactionsByUserQuery$variables = {
  userId: string;
};
export type transactionsByUserQuery$data = {
  readonly listUserTransactions: ReadonlyArray<{
    readonly amount: number;
    readonly createdAt: string;
    readonly destinationId: string;
    readonly id: string | null | undefined;
    readonly originId: string;
    readonly status: string;
  } | null | undefined> | null | undefined;
};
export type transactionsByUserQuery = {
  response: transactionsByUserQuery$data;
  variables: transactionsByUserQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "userId"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "userId",
        "variableName": "userId"
      }
    ],
    "concreteType": "Transaction",
    "kind": "LinkedField",
    "name": "listUserTransactions",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "amount",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "originId",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "destinationId",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "createdAt",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "status",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "transactionsByUserQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "transactionsByUserQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "d7c64fedc20f3d8d3171f368b65242a8",
    "id": null,
    "metadata": {},
    "name": "transactionsByUserQuery",
    "operationKind": "query",
    "text": "query transactionsByUserQuery(\n  $userId: ID!\n) {\n  listUserTransactions(userId: $userId) {\n    id\n    amount\n    originId\n    destinationId\n    createdAt\n    status\n  }\n}\n"
  }
};
})();

(node as any).hash = "fc5a7de8e53f0500835af2f3e918b66d";

export default node;
