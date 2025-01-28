import { forwardRef } from "react";
import PropTypes from "prop-types";

const Editor = forwardRef(({ markdown, setMarkdown }, ref) => {
  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  return (
    <div className="editor-box">
      <h2 className="title-heading">Editor</h2>
      <textarea
        aria-label="Markdown editor"
        name="inputText"
        id="editor"
        value={markdown}
        onChange={handleChange}
        placeholder="Enter markdown here..."
        className="editor"
        ref={ref}
      ></textarea>
    </div>
  );
});

// Add display name to the component
Editor.displayName = "Editor";

Editor.propTypes = {
  markdown: PropTypes.string.isRequired,
  setMarkdown: PropTypes.func.isRequired,
};

export default Editor;
