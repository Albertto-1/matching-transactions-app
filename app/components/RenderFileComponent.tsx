import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import SyntaxHighlighter from "react-syntax-highlighter";
import { gruvboxDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

import { readFileSync } from "fs";
import path from "path";
import { classNames } from "../utils";

function contentOfFile(_path: string) {
    const filePath = path.resolve(process.cwd(), _path);
    return readFileSync(filePath, "utf8");
}

export default function RenderFileComponent({
    filePath,
    codeString,
    language,
    className,
    withMaxH = false,
}: {
    filePath?: string;
    codeString?: string;
    language: string;
    className?: string;
    withMaxH?: boolean;
}) {
    let _codeString = codeString;
    if (filePath !== undefined) _codeString = contentOfFile(filePath);

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
                    {_codeString}
                </ReactMarkdown>
            ) : (
                <div
                    className={classNames(
                        withMaxH
                            ? "h-96 resize-y min-h-64 max-h-fit overflow-auto"
                            : "",
                    )}
                >
                    {_codeString && (
                        <SyntaxHighlighter
                            language={language}
                            style={gruvboxDark}
                            showLineNumbers
                        >
                            {_codeString}
                        </SyntaxHighlighter>
                    )}
                </div>
            )}
        </div>
    );
}
