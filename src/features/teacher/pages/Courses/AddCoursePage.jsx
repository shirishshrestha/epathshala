import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AddCourseForm } from "../../components";
import { Toaster } from "@/components/ui/toaster";

const AddCoursePage = () => {
  return (
    <div className="wrapper ">
      <div className="bg-secondary rounded-lg shadow-xl">
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center text-foreground">
              <div>
                <CardTitle className="text-2xl">Create a new course</CardTitle>
                <CardDescription className="text-foreground">
                  Fill in the details below to create your course
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <AddCourseForm />
          </CardContent>
        </Card>
        <Toaster />
      </div>
    </div>
  );
};

export default AddCoursePage;
