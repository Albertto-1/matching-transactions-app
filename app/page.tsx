import { redirect } from "next/navigation";
import Button from "./components/Button";
import RenderFileComponent from "./components/RenderFileComponent";
import { readme } from "./utils/markdown";

export default function Home() {
    const submit = async () => {
        "use server";
        redirect("/parts");
    };

    return (
        <div className="mx-auto p-8 max-w-7xl prose h-full flex flex-col space-y-8">
            <RenderFileComponent language="markdown" codeString={readme} />

            <form action={submit} className="flex flex-row justify-center">
                <Button label="Start" type="submit" />
            </form>
        </div>
    );
}
