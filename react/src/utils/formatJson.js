export function formatJson(input) {
    if (!input.trim()) return "";

    try {
        const obj = JSON.parse(input);
        return JSON.stringify(obj, null, 2);
    } catch (error) {
        return `❌ Invalid JSON:\n${error.message}`;
    }
}
