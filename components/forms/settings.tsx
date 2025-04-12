"use client"

import { useEffect } from "react";
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form"
import { Input } from "../ui/input"
import {settingsFormSchema} from "@/schema/settings";
import {useUser} from "@clerk/nextjs";
import {Button} from "@/components/ui/button";
import {LoaderCircleIcon} from "lucide-react";
import {updatePublicMessage} from "@/server/actions/settings";
import {toast} from "sonner";

export function SettingsForm() {
  const {user} = useUser()

  const form = useForm<z.infer<typeof settingsFormSchema>>({
    resolver: zodResolver(settingsFormSchema),
    defaultValues: {
      publicMessage: "",
      activityName: "",
    }
  })

  useEffect(() => {
    if (user) {
      form.reset({
        publicMessage: user.publicMetadata["public_message"] as string || "",
        activityName: user.publicMetadata["activity_name"] as string || "",
      });
    }
  }, [user]);

  async function onSubmit(values: z.infer<typeof settingsFormSchema>) {
    if (form.getFieldState("publicMessage").isDirty) {
      await updatePublicMessage(user?.id!, values.publicMessage)
      toast.success("Messaggio aggiornato con successo.")
    }
    if (form.getFieldState("activityName").isDirty) {
      await updatePublicMessage(user?.id!, values.publicMessage)
      toast.success("Nome attività aggiornato con successo.")
    }
  }

  return (
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {form.formState.errors.root && (
              <div className="text-destructive text-sm">
                {form.formState.errors.root.message}
              </div>
          )}

          <FormField
              control={form.control}
              name="activityName"
              render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome attività</FormLabel>
                    <FormControl>
                      <Input placeholder="Il nome del tuo negozio" {...field} />
                    </FormControl>
                    <FormDescription>
                      Questo è il nome che gli utenti visualizzano quando prenotano dalla tua {" "}
                      <a className={"underline"} target="_blank" href={`${location.origin}/book/${user?.id}`}>pagina</a>.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
              )}
          />

          <FormField
              control={form.control}
              name="publicMessage"
              render={({ field }) => (
                  <FormItem>
                    <FormLabel>Messaggio</FormLabel>
                    <FormControl>
                      <Input placeholder="Il 25 Dicembre siamo chiusi!" {...field} />
                    </FormControl>
                    <FormDescription>
                      Questo è il messaggio che verrà mostrato agli utenti in fase di prenotazione.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
              )}
          />

          <Button disabled={form.formState.isSubmitting || !form.formState.isDirty} type="submit">
            {form.formState.isSubmitting &&
                <LoaderCircleIcon className="-ms-1 animate-spin" size={16} aria-hidden="true" />
            }
            Salva
          </Button>
        </form>
      </Form>
  )
}