import GenericPart from "./GenericPart";
import RenderFileComponent from "./RenderFileComponent";

export default function Part1() {
    return (
        <GenericPart
            left={
                <>
                    <RenderFileComponent
                        language="markdown"
                        filePath="./public/exactMatchInstructions.md"
                    />
                    <RenderFileComponent
                        className="mt-6"
                        language="typescript"
                        filePath="./public/types.ts"
                    />
                </>
            }
            right={
                <>
                    <RenderFileComponent
                        language="markdown"
                        filePath="./public/exactMatchSolution.md"
                    />
                    <RenderFileComponent
                        className="mt-6"
                        language="typescript"
                        filePath="./public/exactMatch.ts"
                    />
                </>
            }
        />
    );
}
