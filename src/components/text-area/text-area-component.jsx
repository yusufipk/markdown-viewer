import { Component } from "react";
import Previewer from "../previewer/previewer-component";
import "./text-area-styles.scss";
class TextArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: `# Write your markdown here!`,
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
