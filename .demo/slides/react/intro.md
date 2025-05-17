---
theme: quantum
layout: intro
---

# Improve Your Presentation Skills by Scripting Your Live Coding Demos to Perfection

Elio Struyf

---

# What typically goes wrong during sessions?

- Too many distractions:
  - Notifications
  - Applications
  - Hover panels
  - Tabs
- Context switching
- Opening the wrong file, typos, etc.
- Forgetting the next step
- Etc...

---

# Some things can be fixed with settings

```json
{
  // Use a light theme
  "workbench.colorTheme": "GitHub Light Default",
  // Font size
  "editor.fontSize": 20,
  "terminal.integrated.fontSize": 25,
  // Cursor style
  "editor.cursorStyle": "block",
  "editor.cursorBlinking": "expand",
  "workbench.colorCustomizations": {
    "editorCursor.foreground": "#FF0000"
  },
  // Disable hover panels
  "editor.hover.enabled": false
}
```

---
layout: section
---

# Presentations and live coding can be stressful

---
layout: section
---

# But it doesn't have to be!

---

<img src=".demo/assets/demotime-bg.svg" alt="Demo time" style="height: 60%; margin: 0px auto; inset: 50%; position: absolute; transform: translate(-50%, -50%);" />

--- 

# What is Demo Time?

- A Visual Studio Code extension for presentations and coding demos.
- Script demos (JSON)
- Create slides with Markdown
- Create files, add code, and highlight lines
- Easier dry-runs
- Present demos (and slides) like you are in PowerPoint, Keynote, etc.

---

# Benefits

- No context switching between tools
- You don't lose track of your steps
- No more snippet creation
- Create once, get started quickly
- Can be shared with the audience
- Almost every VS Code feature can be used

---

# How to get started?

- Open Visual Studio Code
- Go to the Extensions view
- Search for `Demo Time`
- Click on Install
- Open the Demo Time - Panel View
- Click on Initialize


<img src=".demo/assets/initialize.png" alt="Initialize" style="margin: 0 auto; width: 45%;"/>

---
layout: section
---

# Use-cases 1:<br />Create a demo script, and add some code actions
