import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Loader } from "@/features/shared";
import { AlertTriangle, Trash2 } from "lucide-react";

const DeleteCourseAlert = ({
  deleteAlert,
  setDeleteAlert,
  handleDeleteCourse,
}) => {
  return (
    <AlertDialog open={deleteAlert}>
      
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-center flex flex-col items-center gap-2 ">
            <div className="p-4 rounded-full bg-red-400">
              <Trash2 />
            </div>
            Confirm Delete
          </AlertDialogTitle>
          <AlertDialogDescription className="flex flex-col gap-1 items-center text-center">
            <p>
              Are you sure you want to delete this course? This action cannot be
              undone.
            </p>
            <p className="text-highlight text-[14px] flex items-center gap-2 text-center">
              <AlertTriangle className="h-4 w-4 text-yellow-500" />
              Important: Deleting this course will remove all its associated
              data.
            </p>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="!justify-center">
          <AlertDialogAction onClick={() => setDeleteAlert(false)}>
            Cancel
          </AlertDialogAction>
          <AlertDialogAction
            onClick={() => {
              handleDeleteCourse();
            }}
            className="bg-red-500 text-foreground hover:text-foreground hover:bg-red-600"
          >
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteCourseAlert;
