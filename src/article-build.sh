#!/bin/bash

echo NOTE: should be run from project root

# Prompt the user for a name
echo "What is the name of the article? (file name, no spaces)"

# Read the name
read -r name

# Make the new folder
mkdir -p "./public/articles/$name"

# Copy the template into the new folder
cp "./public/articles/template/template.html" "./public/articles/$name/$name.html"

# Add to app.tsx

react_code_file="src/App.tsx"

# The line to be inserted
new_line="        <Route path=\"/projects/$(printf "%q" "$name")\" element={<TechnicalArticle htmlFilePath={ \"/articles/$(printf "%q" "$name")/$(printf "%q" "$name").html\" } />} />"

# Escape double quotes in the new_line
escaped_new_line=$(printf "%s\n" "$new_line" | sed 's/"/\\&/g')

# Insert the new line above the "ADD-ARTICLE-HERE" comment
awk -v line="$escaped_new_line" '/ADD-ARTICLE-HERE/ {print line} 1' "$react_code_file" > temp_file
mv temp_file "$react_code_file"

echo "Opening new article at ./public/articles/$name/$name.html"
code "./public/articles/$name/$name.html"

echo "Opening projects.json at ./public/projects.json"
code "./public/projects.json"

# Run the projects.py script
python3 projects.py

# Remind to add the article to articles.json in red text (macos)
echo -e "\033[0;31mDon't forget to add the article to projects.json!\033[0m"
