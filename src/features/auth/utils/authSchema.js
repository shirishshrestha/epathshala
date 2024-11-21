import { Modal } from "@/features/shared";
import { z } from "zod";

export const BaseSignupSchema = z.object({
  fullName: z
    .string()
    .min(Modal.fullName.minLength.value, Modal.fullName.minLength.message)
    .max(Modal.fullName.maxLength.value, Modal.fullName.maxLength.message)
    .regex(Modal.fullName.pattern.value, Modal.fullName.pattern.message),
  email: z
    .string()
    .email(Modal.email.pattern.message)
    .min(Modal.email.minLength.value, Modal.email.minLength.message)
    .max(Modal.email.maxLength.value, Modal.email.maxLength.message),
  password: z
    .string()
    .min(Modal.password.minLength.value, Modal.password.minLength.message)
    .regex(Modal.password.pattern.value, Modal.password.pattern.message),
});

export const SignUpFormSchema = BaseSignupSchema.extend({
  confirmPassword: z
    .string()
    .trim()
    .min(1, { message: "Confirm password is required" }),
}).refine(({ password, confirmPassword }) => password === confirmPassword, {
  path: ["confirmPassword"],
  message: "Retyped password does not match the  password.",
});
