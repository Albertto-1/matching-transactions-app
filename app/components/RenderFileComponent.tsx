import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import SyntaxHighlighter from "react-syntax-highlighter";
import { gruvboxDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

import { classNames } from "../utils";

export default function RenderFileComponent({
    codeString,
    language,
    className,
    withMaxH = false,
}: {
    codeString?: string;
    language: string;
    className?: string;
    withMaxH?: boolean;
}) {
    return (
        <div
            className={classNames(
                "bg-white",
                "rounded-lg overflow-hidden",
                className,
                language !== "markdown" ? "text-sm" : "",
            )}
        >
            {language === "markdown" ? (
                <ReactMarkdown
                    className={classNames(
                        "prose",
                        "prose-pre:bg-[#282828]",
                        "prose-hr:mt-0",
                        "max-w-none",
                    )}
                    remarkPlugins={[remarkGfm]}
                >
                    {codeString}
                </ReactMarkdown>
            ) : (
                <div
                    className={classNames(
                        withMaxH
                            ? "h-96 resize-y min-h-64 max-h-fit overflow-auto"
                            : "",
                    )}
                >
                    {codeString && (
                        <SyntaxHighlighter
                            language={language}
                            style={gruvboxDark}
                            showLineNumbers
                        >
                            {codeString}
                        </SyntaxHighlighter>
                    )}
                </div>
            )}
        </div>
    );
}
