import { DrawerTrigger } from "@/components/ui/drawer";
import CreateTransactionDrawer from "./components/CreateTransactionDrawer";
import { useLazyLoadQuery, useMutation } from "react-relay";
import { UserDataQuery } from "./getUserInfoById";
import { useCookies } from "react-cookie";
import { Button } from "@/components/ui/button";
import { TransactionByUser } from "./transactionsByUser";
import { format } from "date-fns-tz";
import { formatMoney } from "@/util/formatMoney";
import { LogoutMutation } from "./logout";
import { promisifyCommit } from "@/util/promiseCommitMutation";
import { useNavigate } from "react-router-dom";

interface UserDataQuery {
  getUserInfoById: {
    id: string;
    name: string;
    balance: number;
    code: string;
  };
}

interface Transaction {
  listUserTransactions: {
    id: string;
    amount: number;
    originId: string;
    destinationId: string;
    createdAt: string;
  }[];
}

const Dash = () => {
  const [cookies] = useCookies(["userId"]);

  const userData = useLazyLoadQuery(UserDataQuery, {
    userId: cookies.userId,
  }) as UserDataQuery;

  const [commitMutation, isMutationInFlight] = useMutation(LogoutMutation);

  const navigate = useNavigate();

  const { listUserTransactions } = useLazyLoadQuery(TransactionByUser, {
    userId: cookies.userId,
  }) as Transaction;

  const checkTransactionOrigin = (originId: string) => {
    return originId === cookies?.userId;
  };

  const onLogout = () => {
    promisifyCommit(commitMutation, {
      variables: {
        userId: cookies.userId,
      },
    }).then(() => {
      navigate("/");
    });
  };

  return (
    <div className="w-screen min-w-screen min-h-screen border flex flex-col bg-white p-8">
      <div className="max-w-[600px] w-full mx-auto">
        <div className="ml-auto flex">
          <Button
            disabled={isMutationInFlight}
            onClick={() => onLogout()}
            variant="ghost"
            className="ml-auto bg-black text-white"
          >
            Sair
          </Button>
        </div>
        <div className="border w-full mt-4 p-4 w-full flex flex-col sm:flex-row border items-center rounded-lg min-h-[100px]">
          <div className="flex flex-col w-full sm:w-[60%]">
            <div className="flex items-center mb-1">
              <p className="text-sm sm:text-lg font-bold mr-2 max-w-[22ch] h-[22px] overflow-hidden">
                {userData?.getUserInfoById?.name}
              </p>
              <p className="text-sm sm:text-lg">
                #{userData?.getUserInfoById?.code}
              </p>
            </div>
            <p className="text-sm text-gray-500 ">Saldo</p>
            <div className="text-sm sm:text-lg font-bold">
              R${userData?.getUserInfoById?.balance / 100}
            </div>
          </div>
          <div className="w-full sm:w-[40%] mt-2 flex justify-center">
            <CreateTransactionDrawer
              triggerButton={
                <DrawerTrigger className="text-white text-[14px] sm:text-[16px] bg-black">
                  Fazer Transferência
                </DrawerTrigger>
              }
            />
          </div>
        </div>
        <div className="border w-full mt-4 p-4 w-full flex flex-col rounded-lg min-h-[100px]">
          <p>Extrato</p>
          <div className="flex flex-col">
            {listUserTransactions?.length ? (
              listUserTransactions?.slice(0, 4).map((item) => (
                <div className="flex mt-2">
                  <div>
                    {checkTransactionOrigin(item?.originId) ? (
                      <p className="text-sm">Transferência enviada.</p>
                    ) : (
                      <p>Transferência recebida</p>
                    )}
                    <p className="text-sm font-bold">
                      {formatMoney(item?.amount / 100)}
                    </p>
                  </div>
                  <p className="ml-auto text-sm">
                    {item?.createdAt
                      ? format(new Date(+item?.createdAt), "dd/MM/yyyy HH:mm")
                      : ""}
                  </p>
                </div>
              ))
            ) : (
              <p className="text-center">Não há nada para exibir.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dash;
