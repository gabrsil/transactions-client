/**
 * @generated SignedSource<<b1d59409e4bd5ccb081934dd02d37695>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type loginMutationMutation$variables = {
  email: string;
  password: string;
};
export type loginMutationMutation$data = {
  readonly loginUser: {
    readonly token: string;
  } | null | undefined;
};
export type loginMutationMutation = {
  response: loginMutationMutation$data;
  variables: loginMutationMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "email"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "password"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "email",
        "variableName": "email"
      },
      {
        "kind": "Variable",
        "name": "password",
        "variableName": "password"
      }
    ],
    "concreteType": "LoginReturn",
    "kind": "LinkedField",
    "name": "loginUser",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "token",
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
    "name": "loginMutationMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "loginMutationMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "7f34575892e5bef804f004b0a86833b4",
    "id": null,
    "metadata": {},
    "name": "loginMutationMutation",
    "operationKind": "mutation",
    "text": "mutation loginMutationMutation(\n  $email: String!\n  $password: String!\n) {\n  loginUser(email: $email, password: $password) {\n    token\n  }\n}\n"
  }
};
})();

(node as any).hash = "d4982919a0c8737ea74834ec04de238d";

export default node;
