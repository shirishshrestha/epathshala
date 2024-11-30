import { z } from "zod";

export const CourseFormSchema = z.object({
  title: z.string().min(5, "Title must be at least 5 characters"),
  category: z.string().min(1, "Please select a category"),
  level: z.string().min(1, "Please select a level"),
  subtitle: z.string().optional(),
  description: z.string().min(50, "Description must be at least 50 characters"),
  pricing: z.string().min(1, "Please enter course pricing"),
  thumbnail: z.any(),
});
