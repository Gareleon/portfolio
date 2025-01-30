"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Typography from "./typography";
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
import { Textarea } from "../ui/textarea";
import { FaPaperPlane } from "react-icons/fa";
import { useState } from "react";

const formSchema = z.object({
  first_name: z
    .string()
    .min(2, "First name must be at least 2 characters long")
    .max(50, "First name must not exceed 50 characters")
    .trim(),
  last_name: z
    .string()
    .min(2, "Last name must be at least 2 characters long")
    .max(50, "Last name must not exceed 50 characters")
    .trim(),
  email: z
    .string()
    .email("Invalid email format")
    .min(5, "Email must be at least 5 characters long")
    .max(100, "Email must not exceed 100 characters")
    .trim(),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters long")
    .max(500, "Message must not exceed 500 characters")
    .trim(),
});

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  // Define the form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      message: "",
    },
  });

  // Define submit handler
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    setMessage("");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Failed to send message. Please try again.");
      }

      setMessage("Message sent successfully!");
      form.reset(); // Reset form after successful submission
    } catch (error: any) {
      setMessage(error.message);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section
      className="min-h-screen w-full flex flex-col justify-between items-center gap-8 py-16 px-4 sm:px-6 lg:px-8"
      id="contact-form"
    >
      <Typography text="Contact" variant="h1" />
      <div className="w-full">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-4 max-w-lg mx-auto p-4 border rounded-md shadow-lg bg-popover"
          >
            {/* First Name */}
            <FormField
              control={form.control}
              name="first_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    <Typography variant="p" text="First Name" />
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Your first name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Last Name */}
            <FormField
              control={form.control}
              name="last_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    <Typography variant="p" text="Last Name" />
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Your last name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Email */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    <Typography variant="p" text="Email" />
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Your email address" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Message */}
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    <Typography variant="p" text="Message" />
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Your message here"
                      rows={5}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Submit Button */}
            <Button type="submit" disabled={isSubmitting}>
              <FaPaperPlane className="h-5 w-5" />{" "}
              <Typography
                variant="p"
                text={isSubmitting ? "Sending..." : "Submit"}
              />
            </Button>
          </form>
        </Form>
      </div>
    </section>
  );
}
