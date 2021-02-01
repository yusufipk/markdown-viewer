import { Component } from "react";
import Previewer from "../previewer/previewer-component";
import "./text-area-styles.scss";
class TextArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input:
        " # Write your markdown here! \n ## or here \n [hey](google.com) \n ```javascript \n var s = 'JavaScript syntax highlighting'; \n alert(s); \n ``` \n Inline `code` has `back-ticks around` it. \n 1. First ordered list item \n 2. Another item \n ⋅⋅* Unordered sub-list. \n1. Actual numbers don't matter, just that it's a number \n ⋅⋅1. Ordered sub-list \n 4. And another item. \n > This is a very long line that will still be quoted properly when it wraps. Oh boy let's keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can *put* **Markdown** into a blockquote.  \n ![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png 'Logo Title Text 1')",
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
