import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { CourseFormSchema } from "../../utils/CourseSchema";
import { useAddCourse } from "../../hooks";
import {
  Loader,
  uploadImageToCloudinary,
  useGetCategory,
} from "@/features/shared";
import { useGetPresignedData } from "@/features/shared/hooks/query/usePresignedData";
import { useState } from "react";
import { Info } from "lucide-react";
import LectureAlertDialogue from "./LectureAlertDialogue";

const AddCourseForm = () => {
  const navigate = useNavigate();
  const [isUploading, setIsUploading] = useState(false);
  const [lectureAlert, setLectureAlert] = useState(false);
  const PresignedData = useGetPresignedData("course-thumbnails");
  const GetCategory = useGetCategory();

  const form = useForm({
    defaultValues: {
      title: "",
      category: "",
      level: "",
      subtitle: "",
      description: "",
      pricing: "",
      thumbnail: "",
    },
    resolver: zodResolver(CourseFormSchema),
  });

  const AddCourse = useAddCourse(setLectureAlert);

  function onSubmit(values) {
    AddCourse.mutate(values);
  }

  return (
    <>
      {AddCourse.isPending && <Loader />}
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6 text-foreground"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Course Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter course title" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="subtitle"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Subtitle (Optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter course subtitle" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {GetCategory?.isPending ? (
                        <SelectItem value="loading" disabled>
                          Loading categories...
                        </SelectItem>
                      ) : GetCategory?.isError ? (
                        <SelectItem value="error" disabled>
                          Error loading categories
                        </SelectItem>
                      ) : (
                        GetCategory?.data?.data.map((category) => (
                          <SelectItem key={category._id} value={category._id}>
                            {category.name}
                          </SelectItem>
                        ))
                      )}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="level"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Level</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select level" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Beginner">Beginner</SelectItem>
                      <SelectItem value="Intermediate">Intermediate</SelectItem>
                      <SelectItem value="Advanced">Advanced</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="pricing"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Pricing</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Enter course price"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription className="flex gap-2 items-center  ">
                    <Info className="h-4 w-4" /> Write
                    <span className="font-sans ">0</span> if course is free
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="thumbnail"
              /* eslint-disable no-unused-vars */
              render={({ field: { onChange, value, ...field } }) => {
                return (
                  <FormItem>
                    <FormLabel>Thumbnail</FormLabel>
                    <FormControl>
                      <>
                        <Input
                          type="file"
                          {...field}
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) {
                              setIsUploading(true);
                              uploadImageToCloudinary(file, PresignedData)
                                .then((url) => {
                                  onChange(url);
                                })
                                .finally(() => {
                                  setIsUploading(false);
                                });
                            }
                          }}
                        />
                        {isUploading && (
                          <div className="text-sm text-foreground mt-2">
                            Uploading image...
                          </div>
                        )}
                      </>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
          </div>

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Enter course description"
                    className="min-h-[100px]"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex gap-3 justify-end">
            <Button
              type="button"
              variant="destructive"
              onClick={() => navigate(-1)}
            >
              Cancel
            </Button>
            <Button variant="ghost">Submit</Button>
          </div>
        </form>
      </Form>
      {lectureAlert && (
        <LectureAlertDialogue
          lectureAlert={lectureAlert}
          setLectureAlert={setLectureAlert}
        />
      )}
    </>
  );
};

export default AddCourseForm;