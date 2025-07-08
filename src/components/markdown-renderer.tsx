export const MarkdownRenderer = ({ content }: { content: string }) => {
  const parseMarkdown = (markdown: string) => {
    let html = markdown;

    // Store code blocks temporarily to prevent other regex from affecting them
    const codeBlocks: { language: string; code: string; html: string }[] = [];
    const inlineCodes: { code: string; html: string }[] = [];

    // Extract and store code blocks first
    html = html.replace(/```(\w+)?\n?([\s\S]*?)```/g, (match, lang, code) => {
      const language = lang || "text";
      const cleanCode = code.trim();
      const placeholder = `__CODE_BLOCK_${codeBlocks.length}__`;
      codeBlocks.push({
        language,
        code: cleanCode,
        html: `<div class="code-block-container mb-6 rounded-lg overflow-hidden shadow-sm">
          <div class="code-header bg-gray-800 text-gray-300 px-4 py-2 text-sm font-mono flex items-center justify-between">
            <span class="text-xs opacity-75">CODE</span>
          </div>
          <pre class="code-block bg-gray-900 text-gray-100 p-4 overflow-x-auto"><code class="language-${language}">${cleanCode
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")}</code></pre>
        </div>`,
      });
      return placeholder;
    });

    // Extract and store inline code
    html = html.replace(/`([^`\n]+)`/g, (match, code) => {
      const placeholder = `__INLINE_CODE_${inlineCodes.length}__`;
      inlineCodes.push({
        code: code.trim(),
        html: `<code class="inline-code bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm font-mono border">${code
          .trim()
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")}</code>`,
      });
      return placeholder;
    });

    // Headers
    html = html.replace(
      /^### (.*$)/gm,
      '<h3 class="text-lg md:text-xl font-semibold mb-3 mt-6 text-textClr">$1</h3>'
    );
    html = html.replace(
      /^## (.*$)/gm,
      '<h2 class="text-xl md:text-2xl font-bold mb-4 mt-8 text-textClr">$1</h2>'
    );
    html = html.replace(
      /^# (.*$)/gm,
      '<h1 class="text-xl md:text-3xl font-bold mb-6 mt-10 text-textClr">$1</h1>'
    );

    // Bold and Italic (more specific patterns)
    html = html.replace(
      /\*\*\*((?:(?!\*\*\*).)+)\*\*\*/g,
      '<strong class="font-bold text-sectionTitle"><em class="italic">$1</em></strong>'
    );
    html = html.replace(
      /\*\*((?:(?!\*\*).)+)\*\*/g,
      '<strong class="font-bold text-sectionTitle">$1</strong>'
    );
    html = html.replace(
      /\*((?:(?!\*).)+)\*/g,
      '<em class="italic text-sectionTitle">$1</em>'
    );

    // Images with better styling
    html = html.replace(
      /!\[([^\]]*)\]\(([^)]+)\)/g,
      '<div class="image-container my-8 text-center"><img src="$2" alt="$1" class="max-w-full h-auto rounded-lg shadow-lg mx-auto border" style="max-height: 400px; object-fit: cover;" /></div>'
    );

    // Links
    html = html.replace(
      /\[([^\]]+)\]\(([^)]+)\)/g,
      '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 underline hover:no-underline transition-all duration-200">$1</a>'
    );

    // Blockquotes
    html = html.replace(
      /^> (.+)$/gm,
      '<blockquote class="border-l-4 border-blue-500 pl-6 py-3 my-6 bg-blue-50 italic text-gray-700 rounded-r-lg">$1</blockquote>'
    );

    // Process lists more carefully
    const lines = html.split("\n");
    const processedLines = [];
    let inList = false;
    let listType = "";

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const isUnorderedListItem = /^\* (.+)$/.test(line);
      const isOrderedListItem = /^\d+\. (.+)$/.test(line);

      if (isUnorderedListItem) {
        if (!inList || listType !== "ul") {
          if (inList && listType === "ol") {
            processedLines.push("</ol>");
          }
          if (!inList) {
            processedLines.push('<ul class="pl-6 my-4 space-y-2">');
          }
          inList = true;
          listType = "ul";
        }
        const content = line.replace(/^\* (.+)$/, "$1");
        processedLines.push(`<li class="mb-2 text-gray-700">• ${content}</li>`);
      } else if (isOrderedListItem) {
        if (!inList || listType !== "ol") {
          if (inList && listType === "ul") {
            processedLines.push("</ul>");
          }
          if (!inList) {
            processedLines.push(
              '<ol class="list-decimal pl-6 my-4 space-y-2">'
            );
          }
          inList = true;
          listType = "ol";
        }
        const content = line.replace(/^\d+\. (.+)$/, "$1");
        processedLines.push(`<li class="mb-2">${content}</li>`);
      } else {
        if (inList) {
          processedLines.push(`</${listType}>`);
          inList = false;
          listType = "";
        }
        processedLines.push(line);
      }
    }

    if (inList) {
      processedLines.push(`</${listType}>`);
    }

    html = processedLines.join("\n");

    // Horizontal rules
    html = html.replace(/^---$/gm, '<hr class="border-gray-300 my-8" />');

    // Paragraphs (avoid headers, lists, and other block elements)
    html = html.replace(/^(?!<[h|u|o|b|d|p|_]).+$/gm, (match) => {
      if (
        match.trim() === "" ||
        match.includes("__CODE_BLOCK_") ||
        match.includes("__INLINE_CODE_")
      ) {
        return match;
      }
      return `<p class="mb-4  leading-relaxed">${match}</p>`;
    });

    // Restore code blocks
    codeBlocks.forEach((block, index) => {
      html = html.replace(`__CODE_BLOCK_${index}__`, block.html);
    });

    // Restore inline code
    inlineCodes.forEach((code, index) => {
      html = html.replace(`__INLINE_CODE_${index}__`, code.html);
    });

    return html;
  };

  return (
    <div
      className="markdown-content prose max-w-none"
      dangerouslySetInnerHTML={{ __html: parseMarkdown(content) }}
    />
  );
};
