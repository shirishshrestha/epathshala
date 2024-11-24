import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef(
  ({ className, type, autoComplete = "on", ...props }, ref) => {
    return (
      <div className="w-full">
        <input
          type={type}
          className={`${cn(
            "flex h-10 w-full rounded-md border border-border bg-foreground px-3 py-2 text-primary ring-offset-foreground file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus:border-none",
            className
          )}  `}
          ref={ref}
          {...props}
          autoComplete={autoComplete}
        />
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
