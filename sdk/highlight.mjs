import hljs from "highlight.js/lib/index.js";

export function highlightCode(code, language) {
  if (!code || !language || !hljs.getLanguage(language)) {
    return null;
  }

  try {
    return hljs.highlight(code, { language, ignoreIllegals: true }).value;
  } catch {
    return null;
  }
}
