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
            <div className="flex gap-8 items-center  ">
              {props.variant === "success" && (
                <div className="min-w-[2rem]">
                  <div
                    className={
                      "w-12 h-12  bg-green-500 rounded-full flex items-center justify-center p-1"
                    }
                  >
                    <FaCheck className="w-5 h-5" />
                  </div>
                </div>
              )}
              {props.variant === "destructive" && (
                <div className="min-w-[2rem]">
                  <div
                    className={
                      "w-12 h-12 bg-red-500 rounded-full flex items-center justify-center p-1"
                    }
                  >
                    <FaXmark className="w-5 h-5" />
                  </div>
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
