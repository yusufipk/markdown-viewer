import { Component } from "react";
import Previewer from "../previewer/previewer-component";
import "./text-area-styles.scss";
class TextArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input:
        " # Write your markdown here! \r\n ## or here \r\n [hey](google.com) \r\n ```javascript \r\n var s = 'JavaScript syntax highlighting'; \r\n alert(s); \r\n ``` \r\n Inline `code` has `back-ticks around` it. \r\n 1. First ordered list item \r\n 2. Another item \r\n ⋅⋅* Unordered sub-list. \r\n1. Actual numbers don't matter, just that it's a number \r\n ⋅⋅1. Ordered sub-list \r\n 4. And another item. \r\n > This is a very long line that will still be quoted properly when it wraps. Oh boy let's keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can *put* **Markdown** into a blockquote.  \r\n ![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png 'Logo Title Text 1')",
    };
  }

  handleChange = (event) => {
    this.setState({
      input: event.target.value,
    });
  };

  render() {
    return (
      <div>
        {/* <h1>Markdown</h1>
        <h1 id="second">Preview</h1> */}
        <div id="parent">
          <textarea
            id="editor"
            value={this.state.input}
            onChange={this.handleChange}
            type="textarea"
          ></textarea>
          <Previewer data={this.state.input} />
        </div>
      </div>
    );
  }
}

export default TextArea;
