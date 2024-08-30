"use client"

import { useCallback, useEffect, useMemo, useState } from "react"
import { fuzzyMatchFlow } from "../utils/fuzzyMatch"
import Button from "./Button"
import { classNames } from "../utils"
import { Order, OrderTransaction } from "../utils/types"
import OTDetail from "./OTDetail"
import OTHER_ORDERS from "../utils/otherOrders"
import ORDERS from "../utils/orders"
import TRANSACTIONS from "../utils/transactions"
import TRANSCRIBED_TRANSACTIONS from "../utils/transcribedTransactions"
import OTTypeIcon from "../icons/OTTypeIcon"
import SettingsIcon from "../icons/SettingsIcon"

//

const shortcuts = [
    { key: "h", desc: "Toggle help menu" },
    {
        key: "s",
        desc: "Toggle settings menu",
    },
    {
        key: "j",
        desc: "Select next order",
    },
    {
        key: "k",
        desc: "Select prev order",
    },
    {
        key: "n",
        desc: "Select next unmatched transaction",
    },
    {
        key: "p",
        desc: "Select prev unmatched transaction",
    },
    {
        key: "Enter",
        desc: "Match transaction with selected order",
    },
    {
        key: "Esc",
        desc: "Skip current transaction",
    },
]

//

export default function Part4Workflow() {
    const [orders, setOrders] = useState<Order[]>(
        structuredClone([...ORDERS, ...OTHER_ORDERS] as Order[]),
    )
    const transactions = useMemo<OrderTransaction[]>(
        () =>
            structuredClone([
                ...TRANSACTIONS,
                ...TRANSCRIBED_TRANSACTIONS,
            ] as OrderTransaction[]),
        [],
    )
    const matches: Record<number, Record<number, number>> = useMemo(() => {
        return fuzzyMatchFlow(orders, transactions)
        // Disable react-hooks/exhaustive-deps because
        // we just want to calculate matches once.
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [transactions])

    const [unmatchedTransactions, setUnmatchedTransactions] = useState<
        Set<number>
    >(new Set(transactions.map((_, index) => index)))

    const [matchingTransactionIndex, setMTI] = useState<number | undefined>(0)
    const [matchingOrderIndex, setMOI] = useState<number>()

    const [showSettings, setShowSettings] = useState<boolean>(false)
    const [showHelp, setShowHelp] = useState<boolean>(true)

    const matchingTransaction: OrderTransaction | undefined = useMemo(() => {
        const matchesKeys = Object.keys(matches)
        if (
            matchesKeys.length === 0 ||
            matchingTransactionIndex === undefined ||
            matchesKeys[matchingTransactionIndex] === undefined
        )
            return

        return transactions[+matchesKeys[matchingTransactionIndex]]
    }, [matches, matchingTransactionIndex, transactions])

    const matchingOrders = useMemo(() => {
        const mo: { order: Order; score: number; index: number }[] = []
        if (matchingTransactionIndex === undefined) return mo

        Object.keys(matches[matchingTransactionIndex]).forEach((oIndex) => {
            mo.push({
                order: orders[+oIndex],
                score: matches[matchingTransactionIndex][+oIndex],
                index: +oIndex,
            })
        })
        mo.sort((a, b) => {
            if (a.score > b.score) return 1
            else if (a.score < b.score) return -1
            return 0
        })
        if (mo.length) setMOI(mo[0].index)

        return mo
    }, [matchingTransactionIndex, matches, orders])

    const { selectNextTransaction, selectPrevTransaction } = useMemo(() => {
        let selectPrevTransaction = () => {}
        let selectNextTransaction = () => setMTI(undefined)

        if (matchingTransactionIndex !== undefined) {
            const uta = Array.from(unmatchedTransactions)
            const currIndex = uta.findIndex(
                (val) => matchingTransactionIndex === val,
            )

            if (uta[currIndex + 1] !== undefined)
                selectNextTransaction = () => setMTI(uta[currIndex + 1])
            if (uta[currIndex - 1] !== undefined)
                selectPrevTransaction = () => setMTI(uta[currIndex - 1])
        }

        return {
            selectPrevTransaction,
            selectNextTransaction,
        }
    }, [matchingTransactionIndex, unmatchedTransactions])

    const match = useCallback(
        (oi: number, ti: number) => {
            const newOrders = structuredClone(orders)
            const order = newOrders[oi]
            const transaction = transactions[ti]

            if (!order.transactions) order.transactions = []
            order.transactions.push(transaction)

            if (unmatchedTransactions.has(ti)) {
                unmatchedTransactions.delete(ti)
                setUnmatchedTransactions(unmatchedTransactions)
            }

            setOrders(newOrders)
            selectNextTransaction()
        },
        [orders, transactions, unmatchedTransactions, selectNextTransaction],
    )

    const { selectNextOrder, selectPrevOrder } = useMemo(() => {
        let selectPrevOrder = () => {}
        let selectNextOrder = () => {}

        const currIndex = matchingOrders.findIndex(
            (val) => matchingOrderIndex === val.index,
        )
        if (matchingOrders[currIndex + 1] !== undefined)
            selectNextOrder = () => setMOI(matchingOrders[currIndex + 1].index)
        if (matchingOrders[currIndex - 1] !== undefined)
            selectPrevOrder = () => setMOI(matchingOrders[currIndex - 1].index)

        return {
            selectPrevOrder,
            selectNextOrder,
        }
    }, [matchingOrders, matchingOrderIndex])

    const toggleSettings = () => {
        setShowSettings((prev) => !prev)
        if (showHelp) setShowHelp(false)
    }
    const toggleHelp = () => {
        setShowHelp((prev) => !prev)
        if (showSettings) setShowSettings(false)
    }
    const closeExtraView = () => {
        if (showHelp) setShowHelp(false)
        if (showSettings) setShowSettings(false)
    }

    useEffect(() => {
        function keyDownHandler(e: KeyboardEvent) {
            if (e.key === "Enter") {
                e.preventDefault()
                if (showHelp || showSettings) return closeExtraView()
                if (
                    matchingOrderIndex === undefined ||
                    matchingTransactionIndex === undefined
                )
                    return
                match(matchingOrderIndex, matchingTransactionIndex)
            } else if (e.key === "j") selectNextOrder()
            else if (e.key === "k") selectPrevOrder()
            else if (e.key === "n") selectNextTransaction()
            else if (e.key === "p") selectPrevTransaction()
            else if (e.key === "h") toggleHelp()
            else if (e.key === "s") toggleSettings()
            else if (e.key === "Escape") {
                if (showHelp || showSettings) return closeExtraView()
                selectNextTransaction()
            }
        }

        document.addEventListener("keydown", keyDownHandler)
        return () => document.removeEventListener("keydown", keyDownHandler)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        matchingOrderIndex,
        matchingTransactionIndex,
        match,
        selectNextOrder,
        selectPrevOrder,
        selectNextTransaction,
        selectPrevTransaction,
        showHelp,
        showSettings,
    ])

    //

    return (
        <>
            <div
                className={classNames(
                    "h-full mx-auto max-w-6xl",
                    "flex flex-row",
                    "items-stretch space-x-8",
                    "p-8",
                )}
            >
                {/* UNMATCHED TRANSACTIONS */}
                <div
                    className={classNames(
                        "w-80 h-full bg-slate-100",
                        "shadow-inner rounded-lg",
                        "flex flex-col",
                        "space-y-4",
                        "p-5 pt-0",
                        "overflow-auto relative",
                    )}
                >
                    <h3
                        className={classNames(
                            "grow-0 shrink-0",
                            "py-3 -mx-3 pt-6",
                            "sticky top-0 z-10",
                            "bg-slate-100",
                            "text-lg text-slate-400/80",
                            "font-medium text-center",
                        )}
                    >
                        Unmatched transactions: {unmatchedTransactions.size}
                    </h3>

                    {Array.from(unmatchedTransactions).map((ti, index) => (
                        <OTDetail
                            key={"transaction-" + index}
                            element={transactions[ti]}
                            isSelected={matchingTransactionIndex === ti}
                            isCompact
                            onClick={() => {
                                setMTI(ti)
                            }}
                        />
                    ))}
                </div>

                {/* MATCHING SECTION */}
                <div
                    className={classNames(
                        "grow h-full bg-slate-100",
                        "shadow-inner rounded-lg",
                        "flex flex-col",
                        "space-y-4 p-4",
                    )}
                >
                    <div
                        className={classNames(
                            "h-12 w-full shrink-0",
                            "flex flex-row items-center justify-end",
                            "space-x-3",
                        )}
                    >
                        <Button label="Bulk approve" />

                        <span
                            className="size-7 block stroke-slate-600 fill-white"
                            onClick={toggleSettings}
                        >
                            <SettingsIcon />
                        </span>
                    </div>

                    <div
                        className={classNames(
                            "grow",
                            "flex flex-row",
                            "overflow-hidden",
                            "items-start space-x-4",
                        )}
                    >
                        <div className="flex-1 flex flex-col p-3 space-y-4 h-full">
                            <div
                                className={classNames(
                                    "flex flex-row",
                                    "items-center justify-center",
                                    "space-x-4",
                                )}
                            >
                                <h3 className="text-lg text-slate-400/80 font-medium text-center">
                                    Transaction
                                </h3>

                                <span className="fill-white stroke-slate-400 size-6">
                                    <OTTypeIcon type="txn" />
                                </span>
                            </div>

                            <div className="flex flex-col justify-center h-full">
                                {matchingTransaction && (
                                    <OTDetail element={matchingTransaction} />
                                )}
                            </div>
                        </div>

                        <span className="bg-slate-200 w-0.5 h-full rounded-full grow-0 shrink-0"></span>

                        <div className="flex-1 flex flex-col px-3 pb-3 space-y-4 overflow-auto h-full relative">
                            <div
                                className={classNames(
                                    "flex flex-row",
                                    "items-center justify-center",
                                    "space-x-4",
                                    "mb-1 py-3 -mx-3",
                                    "sticky top-0 z-10",
                                    "bg-slate-100",
                                )}
                            >
                                <h3 className="text-lg text-slate-400/80 font-medium text-center">
                                    Possible orders
                                </h3>

                                <span className="fill-white stroke-slate-400 size-6">
                                    <OTTypeIcon type="order" />
                                </span>
                            </div>

                            {matchingTransactionIndex !== undefined &&
                                matchingOrders.map((matchingOrder, index) => {
                                    const similarity =
                                        100 -
                                        +(100 * matchingOrder.score).toFixed(0)
                                    return (
                                        <OTDetail
                                            key={
                                                matchingOrder.order.orderId +
                                                index
                                            }
                                            element={matchingOrder.order}
                                            isSelected={
                                                matchingOrder.index ===
                                                matchingOrderIndex
                                            }
                                            score={similarity}
                                            onClick={() =>
                                                setMOI(matchingOrder.index)
                                            }
                                            onDoubleClick={() => {
                                                match(
                                                    matchingOrder.index,
                                                    matchingTransactionIndex,
                                                )
                                            }}
                                            isBestMatch={index === 0}
                                        />
                                    )
                                })}
                        </div>
                    </div>

                    <div className="flex flex-row justify-between items-center space-x-2 h-12">
                        <Button
                            label="Skip"
                            style="tertiary"
                            onClick={selectNextTransaction}
                        />
                        <div className="flex flex-row justify-end items-center space-x-2">
                            {matchingTransactionIndex !== undefined &&
                                matchingOrderIndex !== undefined && (
                                    <>
                                        <p className="text-sm text-slate-400">
                                            Double click the order, press enter
                                            or press the button to:
                                        </p>

                                        <Button
                                            label="Match"
                                            onClick={() => {
                                                match(
                                                    matchingOrderIndex,
                                                    matchingTransactionIndex,
                                                )
                                            }}
                                        />
                                    </>
                                )}
                        </div>
                    </div>
                </div>
            </div>

            {/* OVER EVERYTHING SECTION */}
            <div
                className={classNames(
                    "overflow-hidden",
                    "transition-all",
                    "backdrop-blur",
                    "fixed z-20",
                    "inset-x-0 bottom-0",
                    showHelp || showSettings ? "h-full" : "h-0",
                    "flex flex-row items-center justify-center",
                )}
                onClick={closeExtraView}
            >
                {showHelp && (
                    <div
                        className={classNames(
                            "bg-slate-200/90",
                            "shadow",
                            "rounded-lg p-4",
                            "space-y-3",
                        )}
                    >
                        <h3 className="text-slate-400 font-semibold mb-6">
                            Keyboard shortcuts
                        </h3>

                        {shortcuts.map((sc) => (
                            <div
                                className="flex flex-row items-center justify-between space-x-4"
                                key={sc.key}
                            >
                                <h5 className="h-7 min-w-7 px-2 bg-slate-50 rounded flex justify-center items-center shadow-sm font-bold text-slate-600">
                                    {sc.key}
                                </h5>

                                <h6 className="font-semibold text-slate-500">
                                    {sc.desc}
                                </h6>
                            </div>
                        ))}
                    </div>
                )}

                {showSettings && (
                    <div
                        className={classNames(
                            "bg-slate-200/90",
                            "shadow",
                            "rounded-lg p-4",
                            "space-y-3",
                            "size-8",
                        )}
                    ></div>
                )}
            </div>
        </>
    )
}
