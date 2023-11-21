# Script to update which projects are complete and which are todo
# Should be run from src directory

import json

# Read JSON data from file
json_file = "../public/projects.json"

# Load JSON data
with open(json_file) as f:
    data = json.load(f)

# Extract project data
complete_projects = []
todo_projects = []

for project in data['widgetData']:
    title = project['title']
    link = project['link']

    if link.startswith('/projects'):
        complete_projects.append(title)
    else:
        todo_projects.append(title)

# Create Markdown lists
with open('projects.md', 'w') as md_file:
    md_file.write(f"# Total Projects: {len(complete_projects) + len(todo_projects)}\n\n")
    md_file.write(f"## Complete ({len(complete_projects)})\n")
    for project in complete_projects:
        md_file.write(f"- {project}\n")

    md_file.write(f"\n## Todo ({len(todo_projects)})\n")
    for project in todo_projects:
        md_file.write(f"- {project}\n")

print("Markdown file 'projects.md' created with complete and todo project lists.")
