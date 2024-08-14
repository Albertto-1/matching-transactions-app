import { classNames } from "../utils";
import { ReactNode } from "react";

export default function Bar({
    children,
    className = "justify-between",
}: {
    children: ReactNode;
    className?: string;
}) {
    return (
        <div className="bg-[#070f23] h-16 grow-0 shrink-0">
            <div
                className={classNames(
                    "mx-auto max-w-7xl h-full",
                    "flex flex-row items-center",
                    "px-8",
                    className,
                )}
            >
                {children}
            </div>
        </div>
    );
}
