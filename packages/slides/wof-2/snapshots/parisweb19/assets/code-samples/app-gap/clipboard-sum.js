// old, text specific
await navigator.clipboard.writeText('Hello Clipboard!');
let text = await navigator.clipboard.readText();

// new, w/ ClipboardItem
await navigator.clipboard.writeText([clipboardItem]);
let clipboardItem = await navigator.clipboard.read();
