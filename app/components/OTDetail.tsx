"use client"

import { MouseEventHandler, useEffect, useRef } from "react"
import { Order, OrderTransaction } from "../utils/types"
import { classNames } from "../utils"
import OTTypeIcon from "../icons/OTTypeIcon"
import UserIcon from "../icons/UserIcon"
import useIsVisible from "../hooks/useIsVisible"

function isOrderWithTransactions(
    orderOrTransaction: Order | OrderTransaction,
): orderOrTransaction is Order {
    return "transactions" in orderOrTransaction
}

export default function OTDetail({
    element,
    score,
    isBestMatch = false,
    onClick,
    onDoubleClick,
    isSelected = false,
    isCompact = false,
}: {
    element: Order | OrderTransaction
    score?: number
    isBestMatch?: boolean
    onClick?: MouseEventHandler
    onDoubleClick?: MouseEventHandler
    isSelected?: boolean
    isCompact?: boolean
}) {
    const isOWT = isOrderWithTransactions(element)

    const ref = useRef<HTMLDivElement>(null)

    const isVisible = useIsVisible(ref)

    useEffect(() => {
        if (isSelected && ref && !isVisible)
            ref.current?.scrollIntoView({
                behavior: "smooth",
                block: "nearest",
            })
    }, [isSelected, isVisible])

    return (
        <div
            className={classNames(
                "p-3 rounded-lg bg-slate-50",
                "transition-all",
                "flex flex-row flex-wrap",
                "justify-between",
                "shadow relative",
                "scroll-mt-[70px] scroll-mb-4",
                onClick !== undefined
                    ? "hover:bg-white hover:scale-105 ease-in-out duration-150 cursor-pointer"
                    : "",
                isSelected ? "outline outline-4 outline-[#209af1]" : "",
                isCompact ? "space-y-1" : "space-y-4",
            )}
            onClick={onClick}
            onDoubleClick={onDoubleClick}
            ref={ref}
        >
            {isCompact && (
                <>
                    <div className="flex flex-row items-center space-x-4 w-full">
                        <p className="text-slate-500/80 font-bold text-md grow-0 shrink-0">
                            {element.orderId}
                        </p>

                        <p className="text-slate-700 text-xl grow whitespace-nowrap truncate">
                            {element.product}
                        </p>

                        <div
                            className={classNames(
                                "grow-0 shrink-0",
                                "flex flex-row",
                                "items-center space-x-1.5",
                                "rounded -mt-2",
                            )}
                        >
                            <span className="fill-white stroke-slate-400 size-6">
                                <OTTypeIcon type={element.type} />
                            </span>
                        </div>
                    </div>

                    <div className="flex flex-row items-center justify-between">
                        <div className="flex flex-row items-center space-x-1.5">
                            <span className="fill-slate-50 stroke-slate-300 size-6">
                                <UserIcon />
                            </span>
                            <p className="text-slate-400 text-sm ">
                                {element.customerName}
                            </p>
                        </div>
                    </div>
                </>
            )}

            {!isCompact && (
                <>
                    <div className="grow flex flex-col space-y-2">
                        <p className="text-slate-500/80 font-bold text-md">
                            {element.orderId}
                        </p>

                        <p className="text-slate-700 text-xl">
                            {element.product}
                        </p>

                        <div className="flex flex-row items-center space-x-1.5">
                            <span className="fill-slate-50 stroke-slate-300 size-6">
                                <UserIcon />
                            </span>
                            <p className="text-slate-400 text-sm">
                                {element.customerName}
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col justify-end items-end">
                        <div
                            className={classNames(
                                "flex flex-row",
                                "items-center space-x-1.5",
                                "absolute top-3 right-3",
                                "rounded",
                                isOWT ? "bg-slate-300/50 p-0.5 px-2" : "",
                            )}
                        >
                            {isOWT && (
                                <span className="text-sm font-bold text-slate-400">
                                    {element.transactions?.length}
                                </span>
                            )}
                            <span className="fill-white stroke-slate-400 size-6">
                                <OTTypeIcon type={element.type} />
                            </span>
                        </div>

                        {score && (
                            <div
                                className={classNames(
                                    "px-2 rounded",
                                    "font-medium",
                                    isBestMatch
                                        ? "bg-[#209af1]/80 text-white"
                                        : "bg-[#209af1]/30 text-slate-600",
                                )}
                            >
                                <p>
                                    {score}% {isBestMatch && "similar"}
                                </p>
                            </div>
                        )}
                    </div>
                </>
            )}
        </div>
    )
}
