import * as z from "zod";

// Updated Zod schema to include video input
export const lectureSchema = z.object({
  lectures: z
    .array(
      z.object({
        title: z
          .string()
          .min(3, { message: "Title must be at least 3 characters" }),
        description: z
          .string()
          .min(10, { message: "Description must be at least 10 characters" }),
        video: z.instanceof(FileList).refine((files) => files.length > 0, {
          message: "Video is required",
        }),
      })
    )
    .min(1, { message: "At least one lecture is required" }),
});
