"use client"

import { useFieldArray, useForm } from "react-hook-form";
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { Fragment } from "react";
import { DAYS_OF_WEEK } from "@/data/constants";
import { scheduleFormSchema } from "@/schema/schedule";
import { timeToInt } from "@/lib/utils";
import { Plus, X } from "lucide-react";
import { saveSchedule } from "@/server/actions/schedule";
import { toast } from "sonner";
import { withMask } from "use-mask-input";

export function ScheduleForm({
                            schedule,
                          }: {
  schedule?: {
    id: string
    timezone: string
    schedule_availability: {
      start_time: string
      end_time: string
      day: (typeof DAYS_OF_WEEK)[number]
    }[]
  }
}) {
  const form = useForm<z.infer<typeof scheduleFormSchema>>({
    resolver: zodResolver(scheduleFormSchema),
    defaultValues: {
      availabilities: schedule?.schedule_availability?.map(a => ({
        ...a,
        start_time: a.start_time.slice(0, 5), // Keep only HH:MM
        end_time: a.end_time.slice(0, 5), // Keep only HH:MM
      })).toSorted((a, b) => {
        return timeToInt(a.start_time) - timeToInt(b.start_time)
      }),
    },
  })

  const {
    append: addAvailability,
    remove: removeAvailability,
    fields: availabilityFields,
  } = useFieldArray({ name: "availabilities", control: form.control })

  const groupedAvailabilityFields = Object.groupBy(
    availabilityFields.map((field, index) => ({ ...field, index })),
    availability => availability.day
  )

  async function onSubmit(values: z.infer<typeof scheduleFormSchema>) {
    const data = await saveSchedule(values)

    if (data?.error) {
      toast.error("Errore")
    } else {
      toast.success("Schedule salvata correttamente!")
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex gap-4 flex-col"
      >
        <div className="grid grid-cols-[auto,1fr] gap-y-4 gap-x-4">
          {DAYS_OF_WEEK.map(dayOfWeek => (
            <Fragment key={dayOfWeek}>
              <div className="flex items-center justify-between">
                <span className="capitalize text-sm font-semibold">{dayOfWeek}</span>
                <Button
                  type="button"
                  className="size-6 p-1"
                  variant="outline"
                  onClick={() => {
                    addAvailability({
                      day: dayOfWeek,
                      start_time: "09:00",
                      end_time: "18:00",
                    });
                  }}
                >
                  <Plus className="size-full" />
                </Button>
              </div>
              {groupedAvailabilityFields[dayOfWeek]?.map((field, labelIndex) => (
                <div className="flex items-center gap-2" key={field.id}>
                  <FormField
                    control={form.control}
                    name={`availabilities.${field.index}.start_time`}
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormControl>
                          <Input
                            className="w-full"
                            aria-label={`${dayOfWeek} Start Time ${labelIndex + 1}`}
                            type="text"
                            {...field}
                            ref={el => {
                              field.ref(el);
                              withMask("99:99", {
                                placeholder: "-",
                                showMaskOnHover: false,
                              })(el);
                            }}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <span>-</span>
                  <FormField
                    control={form.control}
                    name={`availabilities.${field.index}.end_time`}
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormControl>
                          <Input
                            className="w-full"
                            aria-label={`${dayOfWeek} End Time ${labelIndex + 1}`}
                            {...field}
                            ref={el => {
                              field.ref(el);
                              withMask("99:99", {
                                placeholder: "-",
                                showMaskOnHover: false,
                              })(el);
                            }}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    type="button"
                    className="size-6 p-1"
                    variant="ghost"
                    onClick={() => removeAvailability(field.index)}
                  >
                    <X />
                  </Button>
                </div>
              ))}
            </Fragment>
          ))}
        </div>

        <div className="flex gap-2 justify-end">
          <Button disabled={form.formState.isSubmitting} type="submit">
            Save
          </Button>
        </div>

      </form>
    </Form>
  )
}