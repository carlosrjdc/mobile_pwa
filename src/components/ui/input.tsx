import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  texto?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ texto, className, type, ...props }, ref) => {
    return (
      <div className="flex focus-visible:p-2 focus:p-2 items-center gap-2 h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50">
        <span className="font-bold">{texto}</span>
        <input
          type={type}
          className={cn(
            "selection:animate-none outline-none w-full h-8 ",
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
