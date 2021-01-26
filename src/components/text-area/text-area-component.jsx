import { Component } from "react";
import "./text-area-styles.scss";
class TextArea extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <textarea id="editor" type="textarea"></textarea>;
  }
}

export default TextArea;
