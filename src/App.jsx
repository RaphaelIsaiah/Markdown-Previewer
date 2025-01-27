import { useState, useEffect, useRef } from "react";
import { syncScroll } from "./utils";
import "./App.css";
import Editor from "./components/Editor";
import Previewer from "./components/Previewer";

function App() {
  const initialMarkdown = `
# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Here's some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine === \`\`\`\` && lastLine === \`\`\`\`) {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

| Wild Header    | Crazy Header     | Another Header?  |
|----------------|------------------|------------------|
| Your content can | be here, and it  | can be here....  |
| And here.      | Okay.            | I think we get it.|


- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.

1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;

  const [markdown, setMarkdown] = useState(initialMarkdown);

  const editorRef = useRef(null);
  const previewRef = useRef(null);

  useEffect(() => {
    const editor = editorRef.current;
    const preview = previewRef.current;

    // Use syncScroll for bi-directional scrolling
    const cleanUpEditorToPreview = syncScroll(editor, preview);
    const cleanUpPreviewToEditor = syncScroll(preview, editor);

    // Cleanup listeners on component unmount
    return () => {
      cleanUpEditorToPreview();
      cleanUpPreviewToEditor();
    };
  }, []);

  return (
    <div className="app">
      <h1 className="header">Markdown Previewer</h1>
      <div className="container">
        <Editor markdown={markdown} setMarkdown={setMarkdown} ref={editorRef} />
        <Previewer markdown={markdown} ref={previewRef} />
      </div>
    </div>
  );
}

export default App;
