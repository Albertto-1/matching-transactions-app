import { PARTS } from "./layout";

export default function Part({ params }: { params: { id: number } }) {
    // Validation for PARTS and params.id already done in layout
    return PARTS[params.id];
}
