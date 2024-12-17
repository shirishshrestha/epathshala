import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Loader, VideoPlayer } from "@/features/shared";
import { useGetLectureByCourseId } from "@/features/teacher/hooks";
import { useParams } from "react-router-dom";

const StudentViewLectures = () => {
  const { id } = useParams();
  console.log(id);
  const { data: LectureData, isPending: LectureDataPending } =
    useGetLectureByCourseId("courseGetLecture", id);
  console.log(LectureData);

  return (
    <div className="wrapper">
      {LectureDataPending && <Loader />}
      <div className="bg-secondary rounded-lg p-6 shadow-xl">
        <h2>Course Lectures</h2>
        <Accordion
          type="single"
          collapsible
          className="w-full bg-[#1a1940] rounded-lg overflow-hidden"
        >
          {LectureData?.data?.map((lecture) => (
            <AccordionItem
              key={lecture._id}
              value={lecture._id}
              className="border-b border-[#242260] last:border-b-0"
            >
              <AccordionTrigger className="px-4 py-3 text-white hover:bg-[#242260]">
                {lecture.title}
              </AccordionTrigger>
              <AccordionContent className="px-4 py-3 bg-[#242260]">
                <div className="space-y-4">
                  <p className="text-gray-300">{lecture.description}</p>
                  <div className="relative aspect-video w-full rounded-lg overflow-hidden">
                    <VideoPlayer url={lecture.manifestFile} />
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default StudentViewLectures;
