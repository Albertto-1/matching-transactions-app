import Part1 from "@/app/components/Part1";
import Part2 from "@/app/components/Part2";
import Part3 from "@/app/components/Part3";
import Part4 from "@/app/components/Part4";
import { ReactNode } from "react";

export const PARTS: Record<number, ReactNode> = {
    1: <Part1 />,
    2: <Part2 />,
    3: <Part3 />,
    4: <Part4 />,
};
