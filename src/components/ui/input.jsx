import * as React from "react";

import { cn } from "@/lib/utils";
import { useFormContext } from "react-hook-form";
import { InputErrorMessage } from "@/features/shared";

const Input = React.forwardRef(
  ({ className, type, name, errors, autoComplete = "on", ...props }, ref) => {
    const { register } = useFormContext();

    const hasError = Object.prototype.hasOwnProperty.call(errors, name);
    

    return (
      <div>
        <input
          type={type}
          className={`${cn(
            "flex h-10 w-full rounded-md border border-border bg-foreground px-3 py-2 text-base ring-offset-foreground file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus:border-none",
            className
          )} ${
            hasError &&
            "ring-destructive ring-2 focus-visible:!ring-destructive"
          } `}
          ref={ref}
          {...register(name)}
          {...props}
          autoComplete={autoComplete}
        />
        <InputErrorMessage errors={errors} name={name} />
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
