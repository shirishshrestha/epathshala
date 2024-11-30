import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { useState } from "react";
import { lectureSchema } from "../../utils/LectureSchema";
import { useUploadLecture } from "../../hooks/mutation/useUploadLecture";
import { Toaster } from "@/components/ui/toaster";
import { Loader } from "@/features/shared";

export default function AddLectureForm() {
  const [disableAddLecture, setDisableAddLecture] = useState(true);
  const [formIndex, setFormIndex] = useState();

  const form = useForm({
    resolver: zodResolver(lectureSchema),
    defaultValues: {
      lectures: [{ title: "", description: "", video: undefined }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "lectures",
  });

  const UploadLecture = useUploadLecture(
    setDisableAddLecture,
    formIndex,
    remove,
    form.reset
  );

  const onSubmit = (data) => {
    const lecture = data.lectures[formIndex];
    UploadLecture.mutate(lecture);
  };

  return (
    <>
      {UploadLecture.isPending && <Loader />}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {fields.map((field, index) => (
            <div
              key={field.id}
              className="p-4 rounded-lg bg-primary text-foreground shadow-lg relative"
            >
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Add Lecture</h3>

                <FormField
                  control={form.control}
                  name={`lectures.${index}.title`}
                  render={({ field: inputField }) => (
                    <FormItem>
                      <FormLabel>Lecture Title</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter lecture title"
                          {...inputField}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name={`lectures.${index}.description`}
                  render={({ field: inputField }) => (
                    <FormItem>
                      <FormLabel>Lecture Description</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter lecture description"
                          {...inputField}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name={`lectures.${index}.video`}
                  // eslint-disable-next-line no-unused-vars
                  render={({ field: { value, onChange, ...fieldProps } }) => (
                    <FormItem>
                      <FormLabel>Upload Lecture Video</FormLabel>
                      <FormControl>
                        <Input
                          type="file"
                          accept="video/*"
                          onChange={(e) => onChange(e.target.files)}
                          {...fieldProps}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <Button className="mt-4" onClick={() => setFormIndex(index)}>
                Upload Lecture
              </Button>
            </div>
          ))}
        </form>
        <div className="flex justify-between gap-4 mt-4">
          <Button
            type="button"
            className="disabled:cursor-not-allowed"
            variant="ghost"
            onClick={() =>
              append({ title: "", description: "", video: undefined })
            }
            disabled={disableAddLecture}
          >
            Add Another Lecture
          </Button>
        </div>
      </Form>
      <Toaster />
    </>
  );
}
