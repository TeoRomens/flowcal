"use client"

import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { eventFormSchema } from "@/schema/events"
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
import Link from "next/link"
import { Button } from "../ui/button"
import { Textarea } from "../ui/textarea"
import { Switch } from "../ui/switch"
import { createEvent, deleteEvent, updateEvent } from "@/server/actions/events"
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTrigger,
  AlertDialogTitle,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "../ui/alert-dialog"
import { useTransition } from "react"
import { toast } from "sonner";

export function EventForm({
                            event,
                          }: {
  event?: {
    id: string
    name: string
    description?: string
    duration: number
    active: boolean
  }
}) {
  const [isDeletePending, startDeleteTransition] = useTransition()
  const form = useForm<z.infer<typeof eventFormSchema>>({
    resolver: zodResolver(eventFormSchema),
    defaultValues: event ?? {
      active: true,
      duration: 30,
    },
  })

  async function onSubmit(values: z.infer<typeof eventFormSchema>) {
    const action = event == null ? createEvent : updateEvent.bind(null, event.id)
    const { error } = await action(values)

    if (error) {
      toast.error("Si è verificato un errore durante il salvataggio dell'evento")
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex gap-4 flex-col"
      >
        {form.formState.errors.root && (
          <div className="text-destructive text-sm">
            {form.formState.errors.root.message}
          </div>
        )}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome Evento</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormDescription>
                Il nome che gli utenti vedranno quando prenotano
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="duration"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Durata</FormLabel>
              <FormControl>
                <Input type="number" {...field} />
              </FormControl>
              <FormDescription>In minuti</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Descrizione</FormLabel>
              <FormControl>
                <Textarea className="resize-none h-32" {...field} />
              </FormControl>
              <FormDescription>
                Descrizione opzionale dell&apos;evento
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="active"
          render={({ field }) => (
            <FormItem>
              <div className="flex items-center gap-2">
                <FormControl>
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormLabel>Attivo</FormLabel>
              </div>
              <FormDescription>
                Gli eventi inattivi non saranno visibili per la prenotazione
              </FormDescription>
            </FormItem>
          )}
        />
        <div className="flex gap-4 justify-end">
          {event && (
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button
                  variant="destructive"
                  disabled={isDeletePending || form.formState.isSubmitting}
                >
                  Elimina
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Sei sicuro?</AlertDialogTitle>
                  <AlertDialogDescription>
                    Questa azione non può essere annullata. Questo eliminerà permanentemente l&apos;evento.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Annulla</AlertDialogCancel>
                  <AlertDialogAction
                    disabled={isDeletePending || form.formState.isSubmitting}
                    onClick={() => {
                      startDeleteTransition(async () => {
                        const data = await deleteEvent(event.id)

                        if (data?.error) {
                          form.setError("root", {
                            message: "Si è verificato un errore durante l'eliminazione dell'evento",
                          })
                        }
                      })
                    }}
                  >
                    Elimina
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          )}

          <Button
            disabled={isDeletePending || form.formState.isSubmitting}
            type="button"
            asChild
            variant="outline"
          >
            <Link href="/events">Annulla</Link>
          </Button>
          <Button
            disabled={isDeletePending || form.formState.isSubmitting}
            type="submit"
          >
            Salva
          </Button>
        </div>
      </form>
    </Form>
  )
}