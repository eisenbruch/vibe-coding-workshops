#!/bin/bash

# Convert Vibe Coding Workshop Cheatsheet from MD to PDF with page numbers

set -e

HTML_INPUT="Vibe Coding Workshop Cheatsheet.html"
PDF_OUTPUT="Vibe Coding Workshop Cheatsheet.pdf"

echo "Converting HTML to PDF..."
weasyprint -s <(echo '@page { margin: 0.19in 0; } pre, code { white-space: pre-wrap; word-wrap: break-word; overflow-wrap: break-word; }') "$HTML_INPUT" "$PDF_OUTPUT"

echo "Adding page numbers..."
pdfcpu stamp add -mode text "%p" "pos:br, scale:0.5 abs, rot:0, margins:20" "$PDF_OUTPUT" "$PDF_OUTPUT"

echo "Done! Created $PDF_OUTPUT"
