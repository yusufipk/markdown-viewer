import { Component } from "react";
import "./previewer-styles.scss";
import ReactMarkdown from "react-markdown";

class Previewer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // const marked = require("marked");
    // const h = marked(this.props.data);
    return (
      <div id="previewer">
        <div id="text">
          <ReactMarkdown source={this.props.data} />
        </div>
      </div>
    );
  }
}

export default Previewer;
