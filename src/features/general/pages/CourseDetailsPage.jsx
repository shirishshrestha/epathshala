import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Award,
  // Edit,
  FileText,
  Infinity,
  Send,
  Smartphone,
  Star,
  Video,
} from "lucide-react";
import { useGetCourseById } from "../hooks";
import { useParams } from "react-router-dom";
import {
  Loader,
  useAddComment,
  useGetComments,
  useToggle,
} from "@/features/shared";
import { toast } from "@/hooks/use-toast";
import { useSelector } from "react-redux";
import { Toaster } from "@/components/ui/toaster";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { useMemo, useState } from "react";

const CourseDetailsPage = () => {
  const { id } = useParams();

  const { data: SingleCourseData, isPending: SingleCoursePending } =
    useGetCourseById(id);

  const { handleSubmit, register, reset } = useForm();
  const repliesForm = useForm();

  const [resetType, setResetType] = useState();
  const [commentId, setCommentId] = useState();
  const [replyInput, toggleReply] = useToggle();

  const authStatus = useSelector((state) => state?.auth?.status);
  const role = useSelector((state) => state?.auth?.userData?.data?.userType);

  const { data: CourseComments, isFetching: CourseCommentsFetching } =
    useGetComments("CourseComments", id);

  const { mutate: AddComment, isPending: AddCommentsPending } = useAddComment(
    resetType === "comment" ? reset : repliesForm.reset,
    "CourseComments",
    toggleReply,
    resetType
  );

  const handleBuyClick = (courseId) => {
    if (!authStatus) {
      toast({
        title: "Error!",
        description: "Please login to buy course",
        variant: "destructive",
        duration: 3000,
      });
    } else {
      // CourseEnroll.mutate(courseId);
    }
  };

  const handleCommentSubit = (data) => {
    const commentData = {
      comment: data.comment,
      comment_on: "course",
      comment_on_ref: id,
    };
    setResetType("comment");
    AddComment(commentData);
  };

  const handleReplySubmit = (data) => {
    const replyData = {
      comment: data.reply,
      comment_on: "course",
      comment_on_ref: id,
      parent_comment_ref: commentId,
    };
    setResetType("reply");
    AddComment(replyData);
  };

  const getInitials = useMemo(
    () => (name) => {
      const parts = name.split(" ");
      return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
    },
    []
  );

  return (
    <section className="pt-[6rem]">
      {(SingleCoursePending ||
        CourseCommentsFetching ||
        AddCommentsPending) && <Loader />}
      <Toaster />
      <div className="p-8 container mx-auto">
        <div className="flex gap-6 relative min-h-[100vh]">
          <div className="space-y-6">
            <div className="p-6 bg-secondary shadow-xl rounded-lg">
              <div className="flex justify-between items-start mb-4">
                <h1 className="text-4xl font-bold ">
                  {SingleCourseData?.data?.title}
                </h1>
                <Badge>INDEPTH</Badge>
              </div>
              <p className="text-lg mb-4">
                {SingleCourseData?.data?.description}
              </p>
              <div className="flex gap-8 items-start justify-between ">
                <div>
                  <div className="flex gap-4 mb-2">
                    <div className="flex items-center gap-4">
                      Category:
                      <Badge
                        variant="secondary"
                        className="bg-violet-600 cursor-pointer capitalize text-[0.8rem] hover:text-primary hover:bg-[#ffea00]"
                      >
                        {SingleCourseData?.data?.category?.name}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-4">
                      Level:
                      <Badge
                        variant="secondary"
                        className="bg-accent capitalize cursor-pointer text-[0.8rem] hover:text-primary hover:bg-[#ffea00]"
                      >
                        {SingleCourseData?.data?.level}
                      </Badge>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <span className="ml-2">
                      {SingleCourseData?.data?.averageRating}
                    </span>
                    <span className="ml-2">(5,186 ratings)</span>
                  </div>
                </div>
                <div className="text-[14px]">
                  <div className="flex items-center">
                    <span>Created by</span>
                    <p className="text-accent ml-2 hover:underline">
                      {SingleCourseData?.data?.creator?.fullname}
                    </p>
                  </div>
                  <div className="flex items-center space-x-4 mt-2 text-sm">
                    <div className="flex items-center">
                      <span>
                        Last updated{" "}
                        {SingleCourseData?.data?.updatedAt.split("T")[0]}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-secondary rounded-lg p-6">
              <div className="flex items-center mb-6">
                <h2 className="text-xl font-semibold">Course content</h2>
              </div>
              <div className="text-sm mb-6">
                {SingleCourseData?.data?.lectures.length} lectures
              </div>
              <Accordion type="single" collapsible className="space-y-2">
                {SingleCourseData?.data?.lectures?.map((lecture, index) => (
                  <AccordionItem
                    key={index}
                    value={`section-${index}`}
                    className="border-muted"
                  >
                    <AccordionTrigger className="hover:text-accent">
                      <div className="flex justify-between w-full pr-4">
                        <span>{lecture.title}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-foreground">
                      {lecture.description}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold">All Comments</h2>
                <div className="flex items-center space-x-2 mt-2">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <h2 className="text-[1.1rem] font-semibold">
                    4.7 course rating
                  </h2>
                </div>
              </div>
              <div className="grid gap-6">
                <form
                  onSubmit={handleSubmit(handleCommentSubit)}
                  className="flex gap-4"
                >
                  <Input
                    name="comment"
                    placeholder="Add comment"
                    className="bg-secondary focus:!ring-0 text-foreground focus:!border-primary "
                    {...register("comment", { required: true })}
                  ></Input>
                  <Button variant="ghost" type="submit">
                    <Send />
                  </Button>
                </form>
                {CourseComments?.length > 0 ? (
                  CourseComments.map((review, index) => (
                    <div key={index} className="bg-[#3a3a59] p-6 rounded-lg">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-4">
                          <Avatar className="cursor-pointer  ">
                            <AvatarImage src={""} />
                            <AvatarFallback>
                              {getInitials(review.commentor.fullname)}
                            </AvatarFallback>
                          </Avatar>
                          <div className="w-full">
                            <div className="capitalize font-[600] flex gap-3 items-center ">
                              <h2> {review.commentor.fullname}</h2>
                              <span className="font-[400] text-[12px] text-gray-300">
                                {review.updatedAt.split("T")[0]}
                              </span>
                            </div>
                            <div className="pt-1">{review.content}</div>
                            <button
                              type="button"
                              className="pt-1 text-[13px] text-mild font-[600] underline "
                              onClick={() => {
                                toggleReply();
                                setCommentId(review._id);
                              }}
                            >
                              Reply
                            </button>
                            {replyInput && commentId === review._id && (
                              <form
                                onSubmit={repliesForm.handleSubmit(
                                  handleReplySubmit
                                )}
                                className="flex gap-4 pt-2 w-full"
                              >
                                <Input
                                  name="reply"
                                  placeholder="Add Reply"
                                  className="bg-secondary focus:!ring-0 text-foreground focus:!border-primary "
                                  {...repliesForm.register("reply", {
                                    required: true,
                                  })}
                                ></Input>
                                <Button variant="ghost" type="submit">
                                  <Send />
                                </Button>
                              </form>
                            )}
                            {review.subComments.length > 0 ? (
                              <div className="flex flex-col gap-2 pt-4">
                                {review.subComments.map((replies) => (
                                  <div key={replies._id}>
                                    <div className="flex items-start gap-2 w-full">
                                      <Avatar className="cursor-pointer  ">
                                        <AvatarImage src={""} />
                                        <AvatarFallback>
                                          {getInitials(
                                            replies.commentor.fullname
                                          )}
                                        </AvatarFallback>
                                      </Avatar>
                                      <div className="w-full">
                                        <div className="capitalize font-[600]">
                                          {replies.commentor.fullname}
                                        </div>
                                        <div className="pt-1">
                                          {replies.content}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            ) : (
                              <></>
                            )}
                          </div>
                        </div>
                        {/* <div>
                          <Button variant="ghost" size="icon">
                            <Edit />
                          </Button>
                        </div> */}
                      </div>
                    </div>
                  ))
                ) : (
                  <div>No comments yet.</div>
                )}
              </div>
            </div>
          </div>

          <div className="sticky top-4 w-full h-full max-w-sm">
            <Card className="bg-secondary text-foreground border-none p-6">
              <div className="mb-6 h-[250px] w-full ">
                <img
                  src={SingleCourseData?.data?.thumbnail}
                  alt="course-thumbnail"
                  className="h-full w-full object-cover rounded-lg "
                />
              </div>
              <div className="space-y-6">
                {/* Price Section */}
                <div className="flex items-center justify-between gap-2">
                  <span className="text-3xl font-bold">
                    Rs. {SingleCourseData?.data?.price}
                  </span>
                  <span className="hover:underline cursor-pointer">
                    {SingleCourseData?.data?.creator?.fullname}
                  </span>
                </div>

                {/* Action Buttons */}
                {role !== "teacher" && (
                  <div className="space-y-3">
                    <Button
                      variant="ghost"
                      className="w-full  text-white"
                      onClick={() =>
                        handleBuyClick(SingleCourseData?.data?._id)
                      }
                    >
                      Buy now
                    </Button>
                  </div>
                )}

                <div className="text-center text-sm ">
                  30-Day Money-Back Guarantee
                </div>

                {/* Course Features */}
                <div className="space-y-4">
                  <h3 className="font-semibold">This course includes:</h3>
                  <ul className="space-y-3 ">
                    <li className="flex items-center gap-2">
                      <FileText className="h-4 w-4" />
                      <span>
                        {SingleCourseData?.data?.lectures.length} Lectures
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Video className="h-4 w-4" />
                      <span>Adaptive Video Streming</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Smartphone className="h-4 w-4" />
                      <span>Access on mobile and TV</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Infinity className="h-4 w-4" />
                      <span>Full lifetime access</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Award className="h-4 w-4" />
                      <span>Certificate of completion</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseDetailsPage;
