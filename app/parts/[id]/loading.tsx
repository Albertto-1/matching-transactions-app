import LoadingSkeleton from "../../components/LoadingSkeleton";

export default function Parts() {
    return (
        <div className="mx-auto p-8 max-w-7xl prose h-full flex flex-col space-y-8">
            <LoadingSkeleton />
        </div>
    );
}
