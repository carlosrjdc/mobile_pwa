import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  texto?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ texto, className, type, ...props }, ref) => {
    return (
      <div className="flex focus-visible:p-2 focus:p-2 items-center gap-2 h-14 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50">
        <div className="font-bold">{texto}</div>
        <input
          type={type}
          className={cn(
            "selection:animate-none text-center align-middle justify-center file:text-center file:justify-center file:items-center outline-none w-full h-12 file:bg-lime-200",
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
