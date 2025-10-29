import { jsonrepair } from "jsonrepair";

export function fixJson(input) {
    if (!input.trim()) return "";

    try {
        const repaired = jsonrepair(input);
        const obj = JSON.parse(repaired);
        return JSON.stringify(obj, null, 2);
    } catch (error) {
        return `⚠️ Could not fix JSON:\n${error.message}`;
    }
}
