/**
 * @generated SignedSource<<af261969396f429cf0fd4a1ba708b734>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type getUserInfoByIdQuery$variables = {
  userId: string;
};
export type getUserInfoByIdQuery$data = {
  readonly getUserInfoById: {
    readonly balance: number;
    readonly code: string;
    readonly email: string;
    readonly id: string | null | undefined;
    readonly name: string;
  };
};
export type getUserInfoByIdQuery = {
  response: getUserInfoByIdQuery$data;
  variables: getUserInfoByIdQuery$variables;
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
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "getUserInfoById",
    "plural": false,
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
        "name": "name",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "email",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "balance",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "code",
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
    "name": "getUserInfoByIdQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "getUserInfoByIdQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "6ed9d5425356ac9e93ffbb17bc1964b9",
    "id": null,
    "metadata": {},
    "name": "getUserInfoByIdQuery",
    "operationKind": "query",
    "text": "query getUserInfoByIdQuery(\n  $userId: ID!\n) {\n  getUserInfoById(userId: $userId) {\n    id\n    name\n    email\n    balance\n    code\n  }\n}\n"
  }
};
})();

(node as any).hash = "add260f89bda8bf23ddac20309fd5d7c";

export default node;
