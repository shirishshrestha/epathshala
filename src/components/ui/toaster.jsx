import { useToast } from "@/hooks/use-toast";
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast";
import { FaCheck } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props}>
            <div className="flex items-center gap-4 ">
              {props.variant === "success" && (
                <div
                  className={
                    "w-14 h-10 bg-green-500 rounded-full flex items-center justify-center p-1"
                  }
                >
                  <FaCheck className="w-5 h-5" />
                </div>
              )}
              {props.variant === "destructive" && (
                <div
                  className={
                    "w-[3rem] h-[3rem] bg-red-500 rounded-full flex items-center justify-center "
                  }
                >
                  <FaXmark className="w-5 h-5" />
                </div>
              )}
              <div>
                {title && <ToastTitle>{title}</ToastTitle>}
                {description && (
                  <ToastDescription>{description}</ToastDescription>
                )}
              </div>
            </div>
            {action}
            <ToastClose />
          </Toast>
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
}
