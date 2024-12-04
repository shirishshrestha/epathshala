import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { EditCourseForm } from "../../components";
import { Toaster } from "@/components/ui/toaster";

const EditCoursePage = () => {
  return (
    <div className="wrapper ">
      <div className="bg-secondary rounded-lg shadow-xl">
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center text-foreground">
              <div>
                <CardTitle className="text-2xl">Edit course</CardTitle>
                <CardDescription className="text-foreground">
                  Update the details below to modify your course information
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <EditCourseForm />
          </CardContent>
        </Card>
        <Toaster />
      </div>
    </div>
  );
};

export default EditCoursePage;
