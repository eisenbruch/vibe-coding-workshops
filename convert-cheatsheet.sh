#!/bin/bash

# Convert Vibe Coding Fundamentals sheet from MD to PDF with page numbers

set -e

HTML_INPUT="Vibe Coding Fundamentals.html"
PDF_OUTPUT="Vibe Coding Fundamentals.pdf"
TEMP_HTML=$(mktemp)

echo "Preparing HTML with compact tools directory..."

# Copy HTML to temp file and inject wrapper div around Extended AI Tools Directory subsections only
# Starts after the h2 header and Note blockquote, wraps only the h3 subsections and tables
sed -e 's|<h3 id="vibe-coding--development-tools">|<div class="tools-directory"><h3 id="vibe-coding--development-tools">|' \
    -e 's|<h2 id="resources--support">|</div><h2 id="resources--support">|' \
    "$HTML_INPUT" > "$TEMP_HTML"

echo "Converting HTML to PDF..."
weasyprint -s <(echo '
@page { margin: 0.19in 0; }
pre, code { white-space: pre-wrap; word-wrap: break-word; overflow-wrap: break-word; }
td { vertical-align: top; }
.tools-directory { font-size: 11px; line-height: 1.3; }
.tools-directory p { margin: 0.2em 0; }
.tools-directory h3 { font-size: 14px; margin: 0.5em 0 0.3em 0; }
.tools-directory table { margin: 0.5em 0; width: 100%; table-layout: fixed; }
.tools-directory td { padding: 0.3em 0.5em; width: 50%; }
') "$TEMP_HTML" "$PDF_OUTPUT"

# Clean up temp file
rm "$TEMP_HTML"

echo "Adding page numbers..."
pdfcpu stamp add -mode text "%p" "pos:br, scale:0.5 abs, rot:0, margins:20" "$PDF_OUTPUT" "$PDF_OUTPUT"

echo "Done! Created $PDF_OUTPUT"
