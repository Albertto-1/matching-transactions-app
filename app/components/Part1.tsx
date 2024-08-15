import { exactMatchString } from "../utils/exactMatch";
import { exactMatchInstructions, exactMatchSolution } from "../utils/markdown";
import { typesString } from "../utils/types";
import GenericPart from "./GenericPart";
import RenderFileComponent from "./RenderFileComponent";

export default function Part1() {
    return (
        <GenericPart
            left={
                <>
                    <RenderFileComponent
                        language="markdown"
                        codeString={exactMatchInstructions}
                    />
                    <RenderFileComponent
                        className="mt-6"
                        language="typescript"
                        codeString={typesString}
                    />
                </>
            }
            right={
                <>
                    <RenderFileComponent
                        language="markdown"
                        codeString={exactMatchSolution}
                    />
                    <RenderFileComponent
                        className="mt-6"
                        language="typescript"
                        codeString={exactMatchString}
                    />
                </>
            }
        />
    );
}
