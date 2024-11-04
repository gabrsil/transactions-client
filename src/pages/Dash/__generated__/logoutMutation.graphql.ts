/**
 * @generated SignedSource<<779755c44b155d90e520ce61379ac89a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type logoutMutation$variables = {
  userId: string;
};
export type logoutMutation$data = {
  readonly logoutUser: {
    readonly loggedOut: boolean | null | undefined;
  } | null | undefined;
};
export type logoutMutation = {
  response: logoutMutation$data;
  variables: logoutMutation$variables;
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
    "concreteType": "LogoutReturn",
    "kind": "LinkedField",
    "name": "logoutUser",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "loggedOut",
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
    "name": "logoutMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "logoutMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "bd6555ab44271f4ac6940a04ab80ef62",
    "id": null,
    "metadata": {},
    "name": "logoutMutation",
    "operationKind": "mutation",
    "text": "mutation logoutMutation(\n  $userId: String!\n) {\n  logoutUser(userId: $userId) {\n    loggedOut\n  }\n}\n"
  }
};
})();

(node as any).hash = "dd6bb33e06f7e85b76d70f78c6b0cf9a";

export default node;
