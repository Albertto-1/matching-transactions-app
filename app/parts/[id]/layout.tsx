import Part1 from "@/app/components/Part1";
import Part2 from "@/app/components/Part2";
import Part3 from "@/app/components/Part3";
import Part4 from "@/app/components/Part4";

import { redirect } from "next/navigation";
import { ReactNode } from "react";
import Button from "@/app/components/Button";
import Bar from "@/app/components/Bar";

const PARTS: Record<number, ReactNode> = {
    1: <Part1 />,
    2: <Part2 />,
    3: <Part3 />,
    4: <Part4 />,
};
export { PARTS };

export default function PartsLayout({
    params,
    children,
}: {
    params: { id: number };
    children: ReactNode;
}) {
    if (!params.id || isNaN(params.id) || !PARTS[params.id]) redirect("1");

    const prevPart = +params.id - 1;
    const nextPart = +params.id + 1;

    const nav = (part: number) => async () => {
        "use server";
        if (part === 0) redirect("/");
        if (part === 5) redirect("/finish");
        redirect("/parts/" + part);
    };

    const prev = nav(prevPart);
    const next = nav(nextPart);

    return (
        <section className="h-full w-full flex flex-col">
            <div className="grow overflow-hidden p-6 pb-6">{children}</div>

            <Bar className="justify-between">
                <form action={prev}>
                    <Button label="Prev" type="submit" />
                </form>

                <form action={next}>
                    <Button
                        label={nextPart < 5 ? "Next" : "Finish"}
                        type="submit"
                    />
                </form>
            </Bar>
        </section>
    );
}
