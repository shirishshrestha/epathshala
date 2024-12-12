import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AddLectureForm } from "../../components";
import { ArrowLeft, Trash2 } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { useGetLectureByCourseId } from "../../hooks";
import { Loader, VideoPlayer } from "@/features/shared";
import { Button } from "@/components/ui/button";

const AddLecturesPage = () => {
  const { course_id } = useParams();
  const { data: LectureData, isPending: LectureDataPending } =
    useGetLectureByCourseId("courseGetLecture", course_id);

  return (
    <div className="wrapper">
      {LectureDataPending && <Loader />}
      <div className="bg-secondary rounded-lg shadow-xl">
        <div className="pl-6 pt-6 w-fit">
          <Link to={-1}>
            <button className="flex items-center ">
              <p className="bg-primary rounded-full p-1 w-fit">
                <ArrowLeft className="h-5 w-5" />
              </p>
              <p className="pl-2"> Go to courses</p>
            </button>
          </Link>
        </div>

        <Card className="shadow-none">
          <CardHeader className="flex flex-row items-center pb-4 justify-between text-foreground">
            <CardTitle className="">Upload Lectures</CardTitle>
          </CardHeader>
          <CardContent>
            <AddLectureForm />
          </CardContent>
        </Card>

        <div className="px-6 pb-6">
          <h3 className="font-semibold text-[1.4rem] pb-3">
            Uploaded Lectures:
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {LectureData?.data?.length > 0 &&
              LectureData?.data?.map((lecture) => (
                <Card key={lecture._id} className="bg-primary ">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-center">
                      <h4 className="text-[1.2rem] font-[600] text-foreground ">
                        {lecture.title}
                      </h4>
                      <Button size="sm" variant="destructive">
                        <Trash2 />
                      </Button>
                    </div>
                    <p className="text-foreground">{lecture.description}</p>
                    <VideoPlayer url={lecture.manifestFile} />
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddLecturesPage;
