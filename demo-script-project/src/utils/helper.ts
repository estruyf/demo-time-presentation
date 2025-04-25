function highlightCode(codeSnippet: string): string {
    // Simple syntax highlighting for demonstration purposes
    return codeSnippet
        .replace(/(const|let|var|function|return|if|else|for|while|switch|case|break|default|try|catch|finally|throw|async|await)/g, '<span class="keyword">$1</span>')
        .replace(/(".*?"|'.*?')/g, '<span class="string">$1</span>')
        .replace(/(\d+)/g, '<span class="number">$1</span>');
}

export { highlightCode };