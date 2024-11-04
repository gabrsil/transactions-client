import { Input } from "../../components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../components/ui/form";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { useMutation } from "react-relay";
import { LoginMutation } from "./login";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { promisifyCommit } from "@/util/promiseCommitMutation";
import { toast } from "@/hooks/use-toast";

const requiredError = "Obrigatório";

const loginSchema = z.object({
  email: z.string({ required_error: requiredError }).email(),
  password: z.string({ required_error: requiredError }).min(3),
});

type FormType = z.infer<typeof loginSchema>;

export default function Auth() {
  const form = useForm<FormType>({
    resolver: zodResolver(loginSchema),
  });

  const [commitMutation, isMutationInFlight] = useMutation(LoginMutation);
  const navigate = useNavigate();

  const onSubmit = (data: FormType) => {
    const { email, password } = data;
    promisifyCommit(commitMutation, {
      variables: {
        email,
        password,
      },
    })
      .catch((err) =>
        toast({
          title: "Erro",
          variant: "destructive",
          description: err[0]?.message,
        })
      );
  };
  return (
    <div className="flex border min-h-screen flex-col items-center justify-center w-screen h-full min-w-screen">
      <div className="flex mt-12 flex-col w-full h-full mx-auto max-w-[350px]">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="email@gmail.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Senha</FormLabel>
                  <FormControl>
                    <Input type="password" className="mt-4" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button disabled={isMutationInFlight} className="w-full mt-4">{isMutationInFlight ? `Carregando` : `Login`}</Button>
            <Button
              variant="link"
              onClick={() => navigate("/register")}
              className="w-full bg-transparent mt-2 border-none hover:border-none"
            >
              Não possui conta? Cadastre-se
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
