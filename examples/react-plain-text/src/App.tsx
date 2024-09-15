"use client";

import React from 'react';
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin'; // Use RichTextPlugin for rich text
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { LexicalErrorBoundary } from '@lexical/react/LexicalErrorBoundary';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { AutoFocusPlugin } from '@lexical/react/LexicalAutoFocusPlugin';
import ExampleTheme from './ExampleTheme'; // Custom theme
import TreeViewPlugin from './plugins/TreeViewPlugin'; // Plugin to view editor state tree
import Toolbar from '@/components/toolbar'; 
// import { ListPlugin } from '@lexical/react/LexicalListPlugin'
// import { UnderlinePlugin } from '@lexical/react/LexicalUnderlinePlugin';



function Placeholder() {
  return <div className="editor-placeholder">Enter text...</div>;
}

// Editor configuration
const editorConfig = {
  namespace: 'React.js Demo',
  nodes: [], 
  onError(error: Error) {
    console.error(error);
  },
  theme: ExampleTheme, 
};

// Main App component
export default function App() {
  return (
    <LexicalComposer initialConfig={editorConfig}>
      <div className="editor-container">
        <div className="editor-inner">
          <Toolbar/>
          <RichTextPlugin
            contentEditable={<ContentEditable className="editor-input" />} 
            placeholder={<Placeholder />}
            ErrorBoundary={LexicalErrorBoundary} 
          />
          <HistoryPlugin />  
          <AutoFocusPlugin />
          <TreeViewPlugin /> 
          {/* <ListPlugin /> */}
          {/* <UnderlinePlugin /> */}
        </div>
      </div>
    </LexicalComposer>
  );
}
