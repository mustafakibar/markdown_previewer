import { marked } from 'marked';
import React from 'react';

const MARKDOWN_TEXT = `
# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;

marked.setOptions({ breaks: true });

const MarkdownPreview = ({ rawMarkdown }) => {
  return (
    <div
      id='preview'
      dangerouslySetInnerHTML={{
        __html: marked(rawMarkdown),
      }}
    />
  );
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rawMarkdown: MARKDOWN_TEXT,
    };
  }

  updatePreview(input) {
    this.setState({ rawMarkdown: input });
  }

  render() {
    const { rawMarkdown } = this.state;
    return (
      <React.Fragment>
        <div className='main'>
          <h1>Markdown Preview by kibar</h1>
          <div class='wrapper'>
            <div>
              <h3>Editor</h3>
              <textarea
                id='editor'
                type='text'
                value={rawMarkdown}
                onChange={(e) => this.updatePreview(e.target.value)}
              />
            </div>

            <div>
              <h3>Preview</h3>
              <MarkdownPreview rawMarkdown={rawMarkdown} />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
