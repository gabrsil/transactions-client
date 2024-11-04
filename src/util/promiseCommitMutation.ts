import { UseMutationConfig } from "react-relay";
import { MutationParameters } from "relay-runtime";

export const promisifyCommit = (
  commitMutation: Function,
  config: UseMutationConfig<MutationParameters>
) => {
  return new Promise((resolve, reject) => {
    commitMutation({
      variables: config.variables,
      onCompleted: (resp: any, err: any) => {
        if (err) return reject(err);
        return resolve(resp);
      },
      onError: (err: any) => {
        return reject(err);
      },
    });
  });
};
