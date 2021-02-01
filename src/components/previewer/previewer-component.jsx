import { Component } from "react";
import "./previewer-styles.scss";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";

class Previewer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="preview">
        <ReactMarkdown plugins={[gfm]} children={this.props.data} />
      </div>
    );
  }
}

export default Previewer;
