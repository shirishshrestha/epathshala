import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Loader,
  useAddComment,
  useGetComments,
  useToggle,
} from "@/features/shared";
import { Send } from "lucide-react";
import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";

const LectureCommentDialog = ({ openDialog, toggleDialog, videoId }) => {
  const { register, handleSubmit, reset } = useForm();

  const [replyInput, toggleReply] = useToggle();
  const [commentId, setCommentId] = useState();
  const [resetType, setResetType] = useState();

  const repliesForm = useForm();
  const { data: Comments, isFetching: CommentsFetching } = useGetComments(
    "videoComments",
    videoId
  );
  const { mutate: AddComment, isPending: AddCommentsPending } = useAddComment(
    resetType === "comment" ? reset : repliesForm.reset,
    "videoComments",
    toggleReply,
    resetType
  );

  const handleCommentSubit = (data) => {
    const commentData = {
      comment: data.comment,
      comment_on: "video",
      comment_on_ref: videoId,
    };
    setResetType("comment");
    AddComment(commentData);
  };

  const handleReplySubmit = (data) => {
    const replyData = {
      comment: data.reply,
      comment_on: "video",
      comment_on_ref: videoId,
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
    <Dialog open={openDialog} onOpenChange={toggleDialog}>
      {
        // Show Loader if comments are pending
        (AddCommentsPending || CommentsFetching) && <Loader />
      }
      <DialogContent className="max-w-[47%]">
        <DialogHeader>
          <DialogTitle>Comments</DialogTitle>
          <form
            onSubmit={handleSubmit(handleCommentSubit)}
            className="flex gap-4 pt-4"
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
          <DialogDescription className="text-foreground w-full pt-4 flex flex-col gap-4">
            {Comments?.length > 0 ? (
              Comments?.map((comment) => (
                <div key={comment._id} className="">
                  <div className="flex items-start gap-2 w-full">
                    <Avatar className="cursor-pointer  ">
                      <AvatarImage src={""} />
                      <AvatarFallback>
                        {getInitials(comment?.commentor.fullname)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="w-full">
                      <div className="capitalize font-[600]">
                        {comment.commentor.fullname}
                      </div>
                      <div className="pt-1">{comment.content}</div>
                      <button
                        type="button"
                        className="pt-1 text-[13px] text-mild font-[600] underline "
                        onClick={() => {
                          toggleReply();
                          setCommentId(comment._id);
                        }}
                      >
                        Reply
                      </button>
                      {replyInput && commentId === comment._id && (
                        <form
                          onSubmit={repliesForm.handleSubmit(handleReplySubmit)}
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

                      <div className="flex flex-col gap-2 pt-4">
                        {comment.subComments.length > 0 ? (
                          comment.subComments.map((replies) => (
                            <div key={replies._id}>
                              <div className="flex items-start gap-2 w-full">
                                <Avatar className="cursor-pointer  ">
                                  <AvatarImage src={""} />
                                  <AvatarFallback>
                                    {getInitials(replies.commentor.fullname)}
                                  </AvatarFallback>
                                </Avatar>
                                <div className="w-full">
                                  <div className="capitalize font-[600]">
                                    {replies.commentor.fullname}
                                  </div>
                                  <div className="pt-1">{replies.content}</div>
                                </div>
                              </div>
                            </div>
                          ))
                        ) : (
                          <></>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div>No comments available for this lecture.</div>
            )}
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default LectureCommentDialog;
