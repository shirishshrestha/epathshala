import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AddLectureForm } from "../../components";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const AddLecturesPage = () => {
  return (
    <div className="wrapper">
      <div className="bg-secondary rounded-lg shadow-xl">
        <div className="pl-6 pt-6">
          <Link to="/teacher/courses">
            <button className="flex items-center">
              <p className="bg-primary rounded-full p-1 w-fit">
                <ArrowLeft className="h-5 w-5" />
              </p>
              <p className="pl-2"> Go to courses</p>
            </button>
          </Link>
        </div>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between text-foreground">
            <CardTitle>Upload Lectures</CardTitle>
          </CardHeader>
          <CardContent>
            <AddLectureForm />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AddLecturesPage;
