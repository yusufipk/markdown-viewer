import { Component } from "react";
import Previewer from "../../previewer/previewer-component";
import "./text-area-styles.scss";
class TextArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      input: event.target.value,
    });
  };

  render() {
    return (
      <div id="parent">
        <textarea
          id="editor"
          value={this.state.input}
          onChange={this.handleChange}
          type="textarea"
        ></textarea>
        <Previewer data={this.state.input} />
      </div>
    );
  }
}

export default TextArea;
