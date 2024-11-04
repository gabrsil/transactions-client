import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { useMutation } from "react-relay";
import { CreateTransaction } from "./createTransaction";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { promisifyCommit } from "@/util/promiseCommitMutation";
import { toast } from "@/hooks/use-toast";
import { useCookies } from "react-cookie";
import { useEffect, useState } from "react";

interface Props {
  triggerButton: React.ReactNode;
}

const schema = z.object({
  amount: z.coerce.number(),
  destinationCode: z.string(),
  originId: z.string(),
});

type FormType = z.infer<typeof schema>;

const CreateTransactionDrawer: React.FC<Props> = ({
  triggerButton,
}) => {
  const form = useForm<FormType>({
    resolver: zodResolver(schema),
  });
  const [cookies] = useCookies(["userId"]);
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false)
  const [commitMutation, isMutationOnFlight] = useMutation(CreateTransaction);

  const onSubmit = (data: FormType) => {
    const convertedAmount = data?.amount * 100;
    const config = {
      variables: {
        params: {
          ...data,
          amount: convertedAmount,
        },
      },
    };
    promisifyCommit(commitMutation, config)
      .then(() => {
        const toastParams = {
          title: "Sucesso",
          description: "Transferência agendada.",
        };
        form.reset({
           amount: undefined,
           destinationCode: undefined
        })
        setTimeout(() => {
          setDrawerOpen(false)
        }, 1500)        
        toast(toastParams);
      })
      .catch((err) =>
        toast({
          title: "Erro",
          variant: "destructive",
          description: err[0]?.message,
        })
      );

  };

  useEffect(() => {
    form.setValue("originId", cookies?.userId);
  }, [cookies?.userId]);

  return (
    <Drawer open={drawerOpen} onOpenChange={setDrawerOpen}>
      {triggerButton}
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Transferência</DrawerTitle>
        </DrawerHeader>
        <div className="flex flex-col mb-4 items-center w-full mx-auto">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="amount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Valor</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        className="w-full h-[40px] mb-2"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="destinationCode"
                render={({ field }) => (
                  <FormItem className="mt-4">
                    <FormLabel>Código</FormLabel>
                    <FormControl>
                      <Input className="w-full h-[40px]" {...field} />
                    </FormControl>
                    <FormDescription>
                      O Código de quem irá receber a transferência.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <DrawerFooter className="flex flex-col items-center justify-center">
                <Button disabled={isMutationOnFlight} className="w-full max-w-[300px] h-[40px]">
                  {isMutationOnFlight ? `Carregando` : `Transferir`}
                </Button>
                <DrawerClose className="border bg-black text-white text-sm w-full h-[40px] max-w-[300px]">
                  Cancelar
                </DrawerClose>
              </DrawerFooter>
            </form>
          </Form>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default CreateTransactionDrawer;
