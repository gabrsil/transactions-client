/**
 * @generated SignedSource<<3e96e72a0ca1437f56ec4d746d5bd545>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type CreateAccountInput = {
  email: string;
  name: string;
  password: string;
};
export type registerMutation$variables = {
  params: CreateAccountInput;
};
export type registerMutation$data = {
  readonly createUser: {
    readonly id: string | null | undefined;
  } | null | undefined;
};
export type registerMutation = {
  response: registerMutation$data;
  variables: registerMutation$variables;
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
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "createUser",
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
    "name": "registerMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "registerMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "1c4709949929105a4ba8dfcee4e1daa5",
    "id": null,
    "metadata": {},
    "name": "registerMutation",
    "operationKind": "mutation",
    "text": "mutation registerMutation(\n  $params: CreateAccountInput!\n) {\n  createUser(params: $params) {\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "2cbf8501c52d81ae84af587e43bc7470";

export default node;
