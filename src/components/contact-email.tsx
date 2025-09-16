"use client";

import { Dispatch, SetStateAction, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type FormData = {
  name: string;
  email: string;
  message: string;
};
type ContactDialogType = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export default function ContactDialog({
  isOpen,
  setIsOpen,
}: ContactDialogType) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>();

  const formRef = useRef<HTMLFormElement>(null);
  const [success, setSuccess] = useState(false);

  const onSubmit = async () => {
    if (!formRef.current) return;

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,

        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      setSuccess(true);
      reset();
    } catch (err) {
      console.error("Failed to send email:", err);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Contact Me</DialogTitle>
        </DialogHeader>

        <form
          ref={formRef}
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4"
        >
          <Input
            className="border-gray-600"
            type="text"
            placeholder="Name"
            {...register("name", { required: true })}
          />
          {errors.name && (
            <span className="text-red-500 text-sm">Name is required</span>
          )}

          <Input
            className="border-gray-600"
            type="email"
            placeholder="Email"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="text-red-500 text-sm">Email is required</span>
          )}

          <Textarea
            className="border-gray-600"
            placeholder="Your message (optional)"
            {...register("message", { required: false })}
          />
          {errors.message && (
            <span className="text-red-500 text-sm">Message is required</span>
          )}

          <DialogFooter>
            <Button
              type="submit"
              className=" bg-sectionTitle hover:bg-sectionTitle"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send"}
            </Button>
          </DialogFooter>

          {success && (
            <p className=" text-center pt-2">
              Thanks for reaching out! Will get back to you asap!
            </p>
          )}
        </form>

        <p className="text-center mt-2">
          You can also reach out to me at
          <br />
          <Link
            href={"mailto:nishantpatil2911@gmail.com"}
            className="font-semibold text-sectionTitle"
          >
            nishantpatil2911@gmail.com
          </Link>
        </p>
      </DialogContent>
    </Dialog>
  );
}
