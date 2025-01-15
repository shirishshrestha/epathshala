import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Loader, useToggle, VideoPlayer } from "@/features/shared";
import { useGetLectureByCourseId } from "@/features/teacher/hooks";
import { FaComment, FaRegThumbsUp, FaThumbsUp } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { LectureCommentDialog } from "../../components";
import { useToggleLikeOnVideo } from "../../hooks";
import { ImSpinner9 } from "react-icons/im";
import { useState } from "react";

const StudentViewLectures = () => {
  const { id } = useParams();
  const [openDialog, toggleDialog] = useToggle();

  const [videoId, setVideoId] = useState();
  const { data: LectureData, isPending: LectureDataPending } =
    useGetLectureByCourseId("courseGetLecture", id);

  const { mutate: ToggleLike, isPending: ToggleLikePending } =
    useToggleLikeOnVideo("courseGetLecture");

  const handleLikeToggle = (video_id, likedBool) => {
    const data = {
      video_id: video_id,
      likeAction: likedBool ? "dislike" : "like",
    };
    ToggleLike(data);
  };

  return (
    <div className="wrapper">
      {LectureDataPending && <Loader />}
      <div className="bg-secondary rounded-lg p-6 shadow-xl">
        <Card className="bg-primary text-white p-8 rounded-xl shadow-lg">
          <div className="space-y-2">
            {/* Title and Level */}
            <div className="flex flex-wrap items-center gap-3">
              <h1 className="text-3xl font-bold tracking-tight">Web Dev</h1>
              <Badge
                variant="secondary"
                className="bg-[#4f46e5] hover:text-primary hover:bg-[#ffea00]"
              >
                Advanced
              </Badge>
            </div>

            {/* Subtitle */}
            <h2 className="text-2xl font-semibold text-[#ffea00]">
              Your Full Advanced Web dev Course
            </h2>

            {/* Description */}
            <p className="text-gray-300 leading-relaxed max-w-2xl">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum
              repellat quae ipsum corrupti molestias illo similique culpa dicta
              eveniet alias. Similique, hic dolorem.
            </p>

            {/* Category and Creator */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between pt-2 border-t border-[#ffd700]/20">
              <Badge className="w-fit bg-[#ffd700]/10 text-[#ffd700] hover:bg-[#ffd700]/20 text-sm">
                Web development
              </Badge>
              <p className="text-gray-300">
                Created by{" "}
                <span className="font-medium text-[#ffd700]">Test Test</span>
              </p>
            </div>
          </div>
        </Card>
        <h2 className="font-semibold text-[1.4rem] mt-6 mb-4">
          Course Content
        </h2>
        <Accordion
          type="single"
          collapsible
          className="w-full bg-primary rounded-lg overflow-hidden"
        >
          {LectureData?.data?.videos?.map((lecture) => (
            <AccordionItem
              key={lecture._id}
              value={lecture._id}
              className="border-b border-mild/20 last:border-b-0"
            >
              <AccordionTrigger className="px-4 py-3 text-[1.05rem] text-white hover:bg-accent/70">
                {lecture.title}
              </AccordionTrigger>
              <AccordionContent className="px-4 py-3 bg-primary">
                <div className="space-y-4">
                  <p className="text-[1rem]">
                    <span className="font-semibold">Lecture Description:</span>{" "}
                    {lecture.description}
                  </p>
                  <div className="relative w-full rounded-lg overflow-hidden">
                    <VideoPlayer url={lecture.manifestFile} />
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center pl-2">
                    <span className="font-mono pr-2">{lecture.likes}</span>
                    <Button
                      variant="none"
                      className="flex items-center px-1"
                      onClick={() =>
                        handleLikeToggle(lecture._id, lecture.liked)
                      }
                    >
                      {!lecture.liked ? (
                        <>
                          {ToggleLikePending ? (
                            <ImSpinner9 />
                          ) : (
                            <FaRegThumbsUp />
                          )}
                          Like Video
                        </>
                      ) : (
                        <>
                          {ToggleLikePending ? <ImSpinner9 /> : <FaThumbsUp />}{" "}
                          Liked
                        </>
                      )}
                    </Button>
                  </div>
                  <div className="flex items-center pl-2">
                    <Button
                      variant="none"
                      className="flex items-center px-1"
                      onClick={() => {
                        toggleDialog();
                        setVideoId(lecture._id);
                      }}
                    >
                      <FaComment /> Comments
                    </Button>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <LectureCommentDialog
        openDialog={openDialog}
        toggleDialog={toggleDialog}
        videoId={videoId}
      />
    </div>
  );
};

export default StudentViewLectures;
