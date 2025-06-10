import * as React from "react";
import { cn } from "@/lib/utils";

function Container({
  children,
  className,
  ...props
}: React.ComponentProps<"section">) {
  return (
    <section
      data-slot="section"
      className={cn(
        "w-full h-auto py-12 px-4 md:px-8 xl:px-40",

        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}

export { Container };
