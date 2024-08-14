import { redirect } from "next/navigation";
import Button from "./Button";
import LoadingSkeleton from "./LoadingSkeleton";

export default function UnderConstruction({
    text = "Under Construction...",
}: {
    text?: string;
}) {
    const submit = async () => {
        "use server";
        redirect("/");
    };

    return (
        <div className="mx-auto p-8 max-w-7xl prose h-full flex flex-col space-y-8">
            <LoadingSkeleton text={text} />

            <form action={submit} className="flex flex-row justify-center">
                <Button label="Go Home" type="submit" />
            </form>
        </div>
    );
}
