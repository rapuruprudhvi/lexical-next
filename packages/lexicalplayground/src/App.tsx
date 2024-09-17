"use client";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { ListPlugin } from "@lexical/react/LexicalListPlugin";
import { ListNode, ListItemNode, $createListItemNode, $createListNode } from "@lexical/list";
import { $createParagraphNode, $createTextNode, $getRoot } from "lexical";
import PlaygroundEditorTheme from "./themes/PlaygroundEditorTheme";
import Editor from "./Editor";
import Toolbar from '@/packages/lexicalplayground/src/toolbar';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin'; // Import RichTextPlugin
import { ErrorBoundary } from '@lexical/react/LexicalErrorBoundary';

// Prepopulate the editor with some content including a list
function $prepopulatedEditorState() {
  const root = $getRoot();
  if (root.getFirstChild() === null) {
    const paragraph = $createParagraphNode();
    paragraph.append($createTextNode("This is a paragraph before the list."));
    root.append(paragraph);

    const list = $createListNode("bullet");
    list.append(
      $createListItemNode().append($createTextNode("List item 1")),
      $createListItemNode().append($createTextNode("List item 2")),
      $createListItemNode().append($createTextNode("List item 3"))
    );
    root.append(list);
  }
}

const initialConfig = {
  editorState: $prepopulatedEditorState,
  namespace: "MyEditor",
  nodes: [ListNode, ListItemNode], // Register the ListNode and ListItemNode here
  onError: (error: Error) => {
    throw error;
  },
  theme: PlaygroundEditorTheme,
};

function App(): JSX.Element {
  return (
    <LexicalComposer initialConfig={initialConfig}>
      <div className="editor-shell">
        <Toolbar /> {/* Add the toolbar here */}
        <Editor /> {/* Editor component */}
        <RichTextPlugin
          contentEditable={<div className="content-editable" />} // Adjust the class as needed
          placeholder={<div>Enter some text...</div>}
          ErrorBoundary={ErrorBoundary} // Provide ErrorBoundary here
        />
        <ListPlugin /> {/* Include the ListPlugin */}
      </div>
    </LexicalComposer>
  );
}

export default App;
