import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { useMutation } from "react-relay";
import { z } from "zod";
import { RegisterMutation } from "./register";
import { zodResolver } from "@hookform/resolvers/zod";
import { promisifyCommit } from "@/util/promiseCommitMutation";
import { toast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

const schema = z.object({
  email: z.string().email(),
  name: z.string(),
  password: z.string().min(6),
});

type FormType = z.infer<typeof schema>;

const Register = () => {
  const form = useForm<FormType>({
    resolver: zodResolver(schema),
  });

  const navigate = useNavigate();

  const [commitMutation, isMutationOnFlight] = useMutation(RegisterMutation);

  const onSubmit = (data: FormType) => {
    promisifyCommit(commitMutation, {
      variables: {
        params: { ...data },
      },
    })
      .then(() => {
        toast({
          title: "Sucesso",
          description: "Conta criada com sucesso.",
        });
        setTimeout(() => {
          navigate("/auth");
        }, 1500);
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
        <div className="mb-2">
          <p className="text-lg">Cadastro</p>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome</FormLabel>
                  <FormControl>
                    <Input placeholder="ex: Lucas" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="mt-2">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="ex: email@gmail.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="mt-2">
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
            </div>
            <Button disabled={isMutationOnFlight} className="w-full mt-8">
              {isMutationOnFlight ? `Carregando` : `Cadastrar`}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Register;
