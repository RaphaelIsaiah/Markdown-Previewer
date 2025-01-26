import PropTypes from "prop-types";
import { marked } from "marked";
import "highlight.js/styles/github.css";

marked.use({ breaks: true });

const Previewer = ({ markdown }) => {
  const getMarkdownText = () => {
    const rawMarkUp = marked.parse(markdown);
    return { __html: rawMarkUp };
  };
  return <div id="preview" dangerouslySetInnerHTML={getMarkdownText()}></div>;
};

Previewer.propTypes = {
  markdown: PropTypes.string.isRequired,
};

export default Previewer;
