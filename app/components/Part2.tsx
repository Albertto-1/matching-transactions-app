import { fuzzyDataString } from "../utils/fuzzyData";
import { fuzzyMatchString } from "../utils/fuzzyMatch";
import {
    fuzzyMatchInstructions1,
    fuzzyMatchInstructions2,
    fuzzyMatchSolution,
} from "../utils/markdown";
import GenericPart from "./GenericPart";
import RenderFileComponent from "./RenderFileComponent";

export default function Part2() {
    return (
        <GenericPart
            left={
                <>
                    <RenderFileComponent
                        language="markdown"
                        codeString={fuzzyMatchInstructions1}
                    />
                    <RenderFileComponent
                        className="mt-6"
                        language="typescript"
                        codeString={fuzzyDataString}
                        withMaxH
                    />
                    <RenderFileComponent
                        className="mt-6"
                        language="markdown"
                        codeString={fuzzyMatchInstructions2}
                    />
                </>
            }
            right={
                <>
                    <RenderFileComponent
                        language="markdown"
                        codeString={fuzzyMatchSolution}
                    />
                    <RenderFileComponent
                        className="mt-6"
                        language="typescript"
                        codeString={fuzzyMatchString}
                    />
                </>
            }
        />
    );
}
