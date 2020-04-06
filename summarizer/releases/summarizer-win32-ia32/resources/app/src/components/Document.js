import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Document, Page } from "react-pdf";
import Nav from "./Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import "../styles/document.css";
import path from "../files/Concept-Proposal.pdf";
import { pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const options = {
  cMapUrl: "cmaps/",
  cMapPacked: true
};

const highlightPattern = (text, pattern) => {
  const splitText = text.split(pattern);
  if (splitText.length <= 1) {
    return text;
  }

  const matches = text.match(pattern);

  return splitText.reduce(
    (arr, element, index) =>
      matches[index]
        ? [...arr, element, <mark>{matches[index]}</mark>]
        : [...arr, element],
    []
  );
};

class Documents extends Component {
  state = {
    numPages: null,
    pageNumber: 1,
    searchText: ""
  };

  makeTextRenderer = searchText => textItem =>
    highlightPattern(textItem.str, searchText);

  onChange = event => this.setState({ searchText: event.target.value });

  onFileChange = event => {
    this.setState({
      file: event.target.files[0]
    });
  };

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  };

  onMouseUp = e => {
    // if (e.type === "mouseup") {
    //   this.setState({ message: "Mouse Up" });
    // }
    // this.makeTextRenderer();
    // this.searchText = e.target.value;
    // this.state.searchText = window.getSelection().toString();
    // this.makeTextRenderer(this.state.searchText);
    // console.log(window.getSelection().toString());
    console.log(this.state.searchText);
    // highlightPattern(this.searchText, window.getSelection().toString());
  };

  render() {
    const { numPages } = this.state;
    return (
      <div>
        <Nav myProp="Concept-Proposal.pdf" />
        <div className="document">
          <Document
            file={path}
            onLoadSuccess={this.onDocumentLoadSuccess.bind(this)}
            options={options}
          >
            {Array.from(new Array(numPages), (el, index) => (
              <Page
                key={`page_${index + 1}`}
                pageNumber={index + 1}
                customTextRenderer={this.makeTextRenderer(
                  this.state.searchText
                )}
                onMouseUp={this.onMouseUp}
              />
            ))}
          </Document>
          <Link to="/summarize">
            <button>Summarize</button>
          </Link>
          <label htmlFor="search" className="SearchLabel">
            Search:
          </label>
          <input
            type="search"
            id="search"
            value={this.state.searchText}
            onChange={this.onChange}
            className="Search"
          />
        </div>
      </div>
    );
  }
}

export default Documents;
export { Documents };
