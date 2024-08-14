import RenderFileComponent from "./RenderFileComponent";
import UnderConstruction from "./UnderConstruction";

export default function Part4() {
    return (
        <>
            <div className="mx-auto p-8 max-w-7xl prose flex flex-col space-y-8">
                <RenderFileComponent
                    language="markdown"
                    filePath="./public/part4.md"
                />
            </div>
            <UnderConstruction text="Under Construction..." />
        </>
    );
}
