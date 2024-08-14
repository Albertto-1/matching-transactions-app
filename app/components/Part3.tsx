import GenericPart from "./GenericPart";
import RenderFileComponent from "./RenderFileComponent";
import Part3Output from "./Part3Output";

export default function Part3() {
    return (
        <GenericPart
            left={
                <>
                    <RenderFileComponent
                        language="markdown"
                        filePath="./public/part3Input.md"
                    />
                    <RenderFileComponent
                        className="mt-6"
                        language="typescript"
                        filePath="./public/fuzzyData.ts"
                    />
                </>
            }
            center={
                <>
                    <RenderFileComponent
                        language="markdown"
                        filePath="./public/part3Code.md"
                    />
                    <RenderFileComponent
                        className="mt-6"
                        language="typescript"
                        filePath="./public/fuzzyMatch.ts"
                    />
                </>
            }
            right={
                <>
                    <RenderFileComponent
                        language="markdown"
                        filePath="./public/part3Output.md"
                    />
                    <Part3Output />
                </>
            }
        />
    );
}
