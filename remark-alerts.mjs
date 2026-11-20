export default function remarkAlerts() {
    return (tree) => {
        for (const block of tree.children) {
            if (block.type !== "blockquote") continue;

            const paragraph = block.children[0];
            const marker = paragraph?.children[0];
            const match = marker?.type === "text"
                ? marker.value.match(/^\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\](?:[ \t]*\n|[ \t]+|$)/)
                : null;
            if (!match) continue;

            const type = match[1].toLowerCase();
            const label = type[0].toUpperCase() + type.slice(1);
            marker.value = marker.value.slice(match[0].length);
            if (!marker.value) paragraph.children.shift();
            if (!paragraph.children.length) block.children.shift();

            block.data = {
                hName: "aside",
                hProperties: { className: ["markdown-alert", `markdown-alert-${type}`] },
            };
            block.children.unshift({
                type: "paragraph",
                children: [{ type: "strong", children: [{ type: "text", value: label }] }],
                data: { hProperties: { className: ["markdown-alert-title"] } },
            });
        }
    };
}
