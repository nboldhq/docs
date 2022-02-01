#!/bin/bash

# Convert everything to pdf
find ./src -name "*.md" | while read i; do ./bin/pandoc/pandoc -F mermaid-filter "$i" --metadata-file ./build/exports/.pandoc_config.yaml -o "${i%.*}.pdf"; done
# Remove previously generated zip
rm ./dist/exports/docs_pdf.zip

cd ./src

# Zip all pdf files
zip -r ../dist/exports/docs_pdf.zip . --exclude=*vuepress* --exclude=*.md --exclude=*.docx --exclude=*.err
# Delete all generated pdf files
find . -type f -iname \*.pdf -delete

cd ..

find . -type f -iname \*.err -delete
