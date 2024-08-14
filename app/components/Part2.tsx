import GenericPart from "./GenericPart";
import RenderFileComponent from "./RenderFileComponent";

export default function Part2() {
    return (
        <GenericPart
            left={
                <>
                    <RenderFileComponent
                        language="markdown"
                        filePath="./public/fuzzyMatchInstructions1.md"
                    />
                    <RenderFileComponent
                        className="mt-6"
                        language="typescript"
                        filePath="./public/fuzzyData.ts"
                        withMaxH
                    />
                    <RenderFileComponent
                        className="mt-6"
                        language="markdown"
                        filePath="./public/fuzzyMatchInstructions2.md"
                    />
                </>
            }
            right={
                <>
                    <RenderFileComponent
                        language="markdown"
                        filePath="./public/fuzzyMatchSolution.md"
                    />
                    <RenderFileComponent
                        className="mt-6"
                        language="typescript"
                        filePath="./public/fuzzyMatch.ts"
                    />
                </>
            }
        />
    );
}
