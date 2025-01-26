import PropTypes from "prop-types";

const Editor = ({ markdown, setMarkdown }) => {
  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  return (
    <div>
      <textarea
        name="inputText"
        id="editor"
        value={markdown}
        onChange={handleChange}
        placeholder="Enter markdown here..."
      ></textarea>
    </div>
  );
};

Editor.propTypes = {
  markdown: PropTypes.string.isRequired,
  setMarkdown: PropTypes.func.isRequired,
};

export default Editor;
