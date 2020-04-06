import React, { Component } from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import "../styles/main.css";

class Main extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = {
      files: [],
      file: ""
    };
    this.fileInput = React.createRef();
  }

  onChange(e) {
    this.setState({
      files: [
        ...this.state.files,
        ...Array.prototype.slice.call(e.target.files)
      ],
      file: this.fileInput.current.files[0].name
    });
  }

  removeFile(f) {
    this.setState({ files: this.state.files.filter(x => x !== f) });
  }

  render() {
    return (
      <div>
        <Nav myProp={this.state.file} />
        <div className="main">
          <FontAwesomeIcon icon={faUpload} className="upload" />
          <label className="file-input">
            <input
              type="file"
              multiple
              onChange={this.onChange}
              ref={this.fileInput}
            />
            Select a file...
          </label>
          {this.state.files.map(x => (
            <div
              className="file-preview"
              onClick={this.removeFile.bind(this, x)}
            >
              {x.name}
            </div>
          ))}
          <button>
            <Link to="/document">Upload</Link>
          </button>
        </div>
      </div>
    );
  }
}

export default Main;
export { Main };
