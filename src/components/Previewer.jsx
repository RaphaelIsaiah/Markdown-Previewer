import { forwardRef } from "react";
import PropTypes from "prop-types";
import ReactMarkdown from "react-markdown";
import remarkBreaks from "remark-breaks";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

const Previewer = forwardRef(({ markdown }, ref) => {
  return (
    <div className="previewer-box">
      <h2 className="title-heading">Previewer</h2>
      <div id="preview" ref={ref}>
        <ReactMarkdown
          remarkPlugins={[remarkGfm, remarkBreaks]}
          rehypePlugins={[rehypeRaw]}
        >
          {markdown}
        </ReactMarkdown>
      </div>
    </div>
  );
});

// Add display name to the component
Previewer.displayName = "Previewer";

Previewer.propTypes = {
  markdown: PropTypes.string.isRequired,
};

export default Previewer;
