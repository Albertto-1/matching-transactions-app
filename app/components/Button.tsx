"use client";
import { MouseEventHandler } from "react";
import { classNames } from "../utils";

export default function Button({
    label,
    className,
    type,
    onClick,
}: {
    label: string;
    className?: string;
    type?: "submit" | "reset" | "button";
    onClick?: MouseEventHandler;
}) {
    return (
        <button
            className={classNames(
                "bg-[#209af1] text-white",
                "transition-all",
                "hover:brightness-110",
                "px-5 py-1.5",
                "rounded-lg",
                "font-medium text-lg",
                className,
            )}
            type={type}
            onClick={onClick}
        >
            {label}
        </button>
    );
}
