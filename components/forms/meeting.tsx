"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "../ui/form";
import { Input } from "../ui/input";
import Link from "next/link";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { meetingFormSchema } from "@/schema/meetings";
import {
  formatTimeString,
} from "@/lib/formatters";
import { useId } from "react";
import { createMeeting } from "@/server/actions/meetings";
import { Calendar } from "@/components/ui/calendar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { isSameDay } from "date-fns";
import { toast } from "sonner";

export function MeetingForm({
                              validTimes,
                              eventId,
                              clerkUserId
                            }: {
  validTimes: Date[]
  eventId: string
  clerkUserId: string
}) {
  const id = useId();
  const form = useForm<z.infer<typeof meetingFormSchema>>({
    resolver: zodResolver(meetingFormSchema),
    defaultValues: {
    }
  });

  const date = form.watch("date");

  async function onSubmit(values: z.infer<typeof meetingFormSchema>) {
    const data = await createMeeting({
      ...values,
      eventId,
      clerkUserId
    });

    if (data?.error) {
      toast.error("Errore");
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex gap-6 flex-col"
      >
        {form.formState.errors.root && (
          <div className="text-destructive text-sm">
            {form.formState.errors.root.message}
          </div>
        )}
        <div className="mt-4 rounded-lg border border-border max-w-fit mx-auto">
          <div className="flex max-sm:flex-col">
            <Calendar
              mode="single"
              selected={date}
              onSelect={(date) => form.setValue("date", date!)}
              className="p-2 sm:pe-5 w-auto"
              disabled={[
                { before: new Date() },
                (date) => date.getDay() == 6 || date.getDay() == 0,
                (date) => !validTimes.some((time) => isSameDay(date, time)),
              ]}
            />
            <div className="relative max-sm:h-48 sm:w-40">
              <div className="absolute inset-0 border-border py-4 max-sm:border-t">
                <ScrollArea className="h-full border-border sm:border-s">
                  <div className="space-y-3">
                    <div className="flex h-5 shrink-0 items-center px-5">
                      <p className="capitalize text-sm font-medium">
                        {date?.toLocaleDateString("it-IT", {
                          weekday: "long",
                          day: "numeric",
                          month: "numeric",
                        })}
                      </p>
                    </div>
                    <div className="grid gap-1.5 px-5 max-sm:grid-cols-2">
                      {validTimes
                        .filter((time) => isSameDay(time, date))
                        .map((slot) => (
                          <Button
                            key={`${id}-${slot}`}
                            type="button"
                            variant={
                              form.watch("startTime") && new Date(form.watch("startTime")).getTime() === slot.getTime()
                                ? "default"
                                : "outline"
                            }
                            size="sm"
                            className="w-full"
                            onClick={() => {
                              form.setValue("startTime", slot)
                            }}
                          >
                            {formatTimeString(slot)}
                          </Button>
                        ))}
                    </div>
                  </div>
                </ScrollArea>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-4 flex-col md:flex-row">
          <FormField
            control={form.control}
            name="guestName"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Nome e Cognome</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="guestEmail"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="guestNotes"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Note</FormLabel>
              <FormControl>
                <Textarea className="resize-none" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex gap-2 justify-end">
          <Button
            disabled={form.formState.isSubmitting}
            type="button"
            asChild
            variant="outline"
          >
            <Link href={`/book/${clerkUserId}`}>Cancel</Link>
          </Button>
          <Button disabled={form.formState.isSubmitting} type="submit">
            Conferma
          </Button>
        </div>
      </form>
    </Form>
  );
}
