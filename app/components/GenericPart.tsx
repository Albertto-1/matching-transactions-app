import { ReactNode } from "react";
import { classNames } from "../utils";

export default function GenericPart({
    left,
    right,
    center,
}: {
    left: ReactNode;
    right: ReactNode;
    center?: ReactNode;
}) {
    return (
        <div
            className={classNames(
                "h-full w-full",
                "lg:flex lg:flex-row lg:space-x-7",
                "justify-normal items-stretch",
                "lg:overflow-hidden overflow-auto",
            )}
        >
            <div className="lg:flex-1 overflow-auto">{left}</div>

            {center && (
                <div className="lg:flex-1 mt-8 lg:m-0 overflow-auto">
                    {center}
                </div>
            )}

            <div className="lg:flex-1 mt-8 lg:m-0 overflow-auto">{right}</div>
        </div>
    );
}
