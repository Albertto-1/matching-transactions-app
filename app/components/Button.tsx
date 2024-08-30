"use client"
import { MouseEventHandler } from "react"
import { classNames } from "../utils"

export default function Button({
    label,
    className,
    type = "button",
    onClick,
    style = "primary",
}: {
    label: string
    className?: string
    type?: "submit" | "reset" | "button"
    onClick?: MouseEventHandler
    style?: "primary" | "tertiary"
}) {
    let _className = classNames(
        "transition-all",
        "px-5 py-1.5",
        "rounded-lg",
        "font-medium text-lg",
        className,
    )

    if (style === "primary")
        _className += classNames(
            "bg-[#209af1] text-white",
            "hover:brightness-110",
        )
    else if (style === "tertiary")
        _className += classNames(
            "bg-transparent text-slate-500 font-semibold",
            "hover:underline",
        )

    return (
        <button className={_className} type={type} onClick={onClick}>
            {label}
        </button>
    )
}
