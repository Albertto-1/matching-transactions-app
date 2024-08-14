"use client";

import { useMemo, useState } from "react";
import Button from "./Button";
import { fuzzyMatch } from "@/public/fuzzyMatch";
import { transcribedOrders, transcribedTransactions } from "@/public/fuzzyData";
import RenderFileComponent from "./RenderFileComponent";

export default function Part3Output() {
    const [showResult, setShowResult] = useState(false);
    const result = useMemo(
        () =>
            JSON.stringify(
                fuzzyMatch(
                    structuredClone(transcribedOrders),
                    transcribedTransactions,
                ),
                null,
                4,
            ),
        [],
    );

    if (!showResult)
        return (
            <>
                <Button
                    label="RUN"
                    onClick={() => setShowResult(true)}
                    className="mt-6"
                />
            </>
        );

    return (
        <RenderFileComponent
            className="mt-6"
            language="typescript"
            codeString={result}
        />
    );
}
