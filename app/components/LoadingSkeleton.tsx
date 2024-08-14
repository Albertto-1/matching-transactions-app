export default function LoadingSkeleton({
    text = "Loading...",
}: {
    text?: string;
}) {
    const textL = text.length;
    const step = 500 / textL;

    return (
        <>
            <h2>
                {text.split("").map((c, i) => (
                    <span
                        key={c + i}
                        className="animate-pulse"
                        style={{
                            animationDelay: i * step + "ms",
                        }}
                    >
                        {c}
                    </span>
                ))}
            </h2>
            <div className="flex flex-col space-y-7 w-full">
                {Array.from(Array(5).keys()).map((k) => (
                    <div
                        key={k}
                        className="h-4 bg-gray-300 rounded-lg animate-pulse"
                        style={{
                            width:
                                (Math.floor(Math.random() * 4) + 7) * 10 + "%",
                        }}
                    ></div>
                ))}
            </div>
        </>
    );
}
