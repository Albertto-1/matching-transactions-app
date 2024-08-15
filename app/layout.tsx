import type { Metadata } from "next";
import "./globals.css";
import Bar from "@/app/components/Bar";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Matching Transactions App",
    description: "App to fuzzy match orders and transactions",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="h-screen w-screen flex flex-col">
                <Bar>
                    <Image
                        alt="logo"
                        width={26}
                        height={26}
                        src="https://cdn.prod.website-files.com/62898f7a136f6141a59e1d79/64d1f07b78cbfe9cb944e91c_Group-163.svg"
                    />
                </Bar>

                <div className="grow shrink min-h-0 min-w-0">{children}</div>
            </body>
        </html>
    );
}
