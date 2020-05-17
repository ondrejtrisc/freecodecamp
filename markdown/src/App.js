import React from 'react';
import marked from 'marked';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      input: "# Welcome to my React Markdown Previewer!\n ## This is a sub-heading...\n ### And here's some other cool stuff:\n Heres some code, `<div></div>`, between 2 backticks.\n ```\n // this is multi-line code:\n function anotherExample(firstLine, lastLine) {\n if (firstLine == '```' && lastLine == '```') {\n return multiLineCode;\n }\n }\n ```\n\n     You can also make text **bold**... whoa!\n Or _italic_.\n Or... wait for it... **_both!_**\n And feel free to go crazy ~~crossing stuff out~~.\n\n There's also [links](https://www.freecodecamp.com), and\n> Block Quotes!\n\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | ------------- \nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n  - Some are bulleted.\n     - With different indentation levels.\n        - That look like this.\n\n1. And there are numbererd lists too.\n1. Use just 1s if you want! \n1. But the list goes on...\n- Even if you use dashes or asterisks.\n* And last but not least, let's not forget embedded images:\n\n![React Logo w/ Text](https://goo.gl/Umyytc)\n"
    };

    this.handleChange = event => {
      this.setState({
        input: event.target.value
      });
    };
  }

  render() {
    return (
      <div className="App">
        <textarea id="editor" onChange={this.handleChange} rows="20" cols="100">{this.state.input}</textarea>
        <div id="preview" dangerouslySetInnerHTML={{__html: marked(this.state.input)}}>
        </div>
      </div>
    );
  }
}

export default App;
