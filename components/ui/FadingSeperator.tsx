import * as SeparatorPrimitive from "@radix-ui/react-separator";

export const FadingSeparator = ({ className }: { className?: string }) => (
  <SeparatorPrimitive.Root
    orientation="horizontal"
    className={`w-full h-[2px] my-6 bg-gradient-to-r from-gray-500 to-transparent ${className}`}
  />
);