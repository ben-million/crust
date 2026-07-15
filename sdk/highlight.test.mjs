import assert from "node:assert/strict";
import test from "node:test";

import { highlightCode } from "./highlight.mjs";

test("highlights known code and diff languages", () => {
  const rust = highlightCode('fn main() { println!("hello {}", 42); }', "rust");
  const diff = highlightCode("+1 added\n-1 removed", "diff");

  assert.match(rust, /hljs-keyword/);
  assert.match(rust, /hljs-string/);
  assert.match(rust, /hljs-number/);
  assert.match(diff, /hljs-addition/);
  assert.match(diff, /hljs-deletion/);
});

test("escapes source text before it reaches the HTML renderer", () => {
  const html = highlightCode(
    '<script>alert("x")</script><img src=x onerror=alert(1)> &',
    "html",
  );

  assert.doesNotMatch(html, /<script|<img/i);
  assert.match(html, /&lt;/);
  assert.match(html, /&quot;/);
  assert.match(html, /&amp;/);
});

test("skips unknown languages", () => {
  assert.equal(highlightCode("plain text", "not-a-language"), null);
});
