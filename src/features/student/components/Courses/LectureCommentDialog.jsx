import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const LectureCommentDialog = ({ openDialog, toggleDialog }) => {
  return (
    <Dialog open={openDialog} onOpenChange={toggleDialog}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Comments</DialogTitle>
          <DialogDescription className="text-foreground pt-4">
            <div>No comments available for this lecture.</div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default LectureCommentDialog;
