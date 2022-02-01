#!/bin/bash

# Convert everything to docx
find ./src -name "*.md" | while read i; do ./bin/pandoc/pandoc -F mermaid-filter "$i" -o "${i%.*}.docx"; done
# Remove previously generated zip
rm ./dist/exports/docs_docx.zip

cd ./src

# Zip all docx files
zip -r ../dist/exports/docs_docx.zip . --exclude=*vuepress* --exclude=*.md --exclude=*.pdf --exclude=*.err
# Delete all generated docx files
find . -type f -iname \*.docx -delete

cd ..

# Delete all .err files
find . -type f -iname \*.err -delete
