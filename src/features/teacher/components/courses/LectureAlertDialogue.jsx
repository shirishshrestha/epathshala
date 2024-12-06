import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Info } from "lucide-react";
import { useNavigate } from "react-router-dom";

const LectureAlertDialogue = ({ lectureAlert, setLectureAlert, courseId }) => {
  const navigate = useNavigate();
  const handleUploadLectures = () => {
    setLectureAlert(false);
    navigate(`/teacher/courses/add-lectures/${courseId}`);
  };

  return (
    <AlertDialog open={lectureAlert}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-center">
            Course Created
            <span className="text-emerald-500"> Successfully</span>
          </AlertDialogTitle>
          <AlertDialogDescription className="flex flex-col gap-1 items-center">
            <p>Your course has been added to the system.</p>
            <p className="text-highlight text-[14px] flex items-center gap-2 text-center">
              <Info className="h-4 w-4" />
              Important: If you do not upload lectures and videos, the
            </p>
            <p className="text-highlight text-[14px]">
              course will not be listed in Epathshala.
            </p>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="!justify-center">
          <AlertDialogAction
            onClick={() => {
              setLectureAlert(false);
              navigate("/teacher/courses");
            }}
            className="bg-violet-500 hover:text-foreground hover:bg-primary"
          >
            Upload Later
          </AlertDialogAction>
          <AlertDialogAction
            onClick={handleUploadLectures}
            className="hover:bg-primary hover:text-foreground"
          >
            Upload Lectures
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default LectureAlertDialogue;
