import GenericPart from "./GenericPart";
import RenderFileComponent from "./RenderFileComponent";
import Part3Output from "./Part3Output";
import { part3Code, part3Input, part3Output } from "../utils/markdown";
import { fuzzyMatchString } from "../utils/fuzzyMatch";
import { fuzzyDataString } from "../utils/fuzzyData";

export default function Part3() {
    return (
        <GenericPart
            left={
                <>
                    <RenderFileComponent
                        language="markdown"
                        codeString={part3Input}
                    />
                    <RenderFileComponent
                        className="mt-6"
                        language="typescript"
                        codeString={fuzzyDataString}
                    />
                </>
            }
            center={
                <>
                    <RenderFileComponent
                        language="markdown"
                        codeString={part3Code}
                    />
                    <RenderFileComponent
                        className="mt-6"
                        language="typescript"
                        codeString={fuzzyMatchString}
                    />
                </>
            }
            right={
                <>
                    <RenderFileComponent
                        language="markdown"
                        codeString={part3Output}
                    />
                    <Part3Output />
                </>
            }
        />
    );
}
