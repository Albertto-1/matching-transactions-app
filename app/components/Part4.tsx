"use client";
import { useState } from "react";
import { part4 } from "../utils/markdown";
import RenderFileComponent from "./RenderFileComponent";
import Button from "./Button";
import Part4Workflow from "./Part4Workflow";

export default function Part4() {
    const [showWorkflow, setShowWorkflow] = useState(false);

    return (
        <>
            {showWorkflow ? (
                <div className="absolute inset-0">
                    <Part4Workflow />
                </div>
            ) : (
                <div className="mx-auto p-8 max-w-7xl prose flex flex-col space-y-8">
                    <RenderFileComponent
                        language="markdown"
                        codeString={part4}
                    />
                    <div className="flex flex-row items-center justify-center">
                        <Button
                            label="Start workflow"
                            onClick={() => setShowWorkflow(true)}
                        />
                    </div>
                </div>
            )}
        </>
    );
}
