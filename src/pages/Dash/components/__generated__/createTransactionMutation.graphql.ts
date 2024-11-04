/**
 * @generated SignedSource<<2168c66c2a664d227e7acfd144fb077d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type CreateTransactionInput = {
  amount: string;
  destinationCode: string;
  originId: string;
};
export type createTransactionMutation$variables = {
  params: CreateTransactionInput;
};
export type createTransactionMutation$data = {
  readonly createTransaction: {
    readonly id: string | null | undefined;
  } | null | undefined;
};
export type createTransactionMutation = {
  response: createTransactionMutation$data;
  variables: createTransactionMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "params"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "params",
        "variableName": "params"
      }
    ],
    "concreteType": "Transaction",
    "kind": "LinkedField",
    "name": "createTransaction",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
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
    "name": "createTransactionMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "createTransactionMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "f497808b6e973a69e4d58a3debbcb8aa",
    "id": null,
    "metadata": {},
    "name": "createTransactionMutation",
    "operationKind": "mutation",
    "text": "mutation createTransactionMutation(\n  $params: CreateTransactionInput!\n) {\n  createTransaction(params: $params) {\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "d376a456b3791308f62e1a52b97fe47a";

export default node;
