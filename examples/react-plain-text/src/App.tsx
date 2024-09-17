// App.tsx
"use client";
import React from 'react';
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { LexicalErrorBoundary } from '@lexical/react/LexicalErrorBoundary';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { AutoFocusPlugin } from '@lexical/react/LexicalAutoFocusPlugin';
import TreeViewPlugin from './plugins/TreeViewPlugin';
import Toolbar from '@/components/toolbar';
import { ListPlugin } from '@lexical/react/LexicalListPlugin';
import { ListNode, ListItemNode } from '@lexical/list';
import { HeadingNode } from '@lexical/rich-text';

function Placeholder() {
  return <div className="editor-placeholder">Enter text...</div>;
}

const editorConfig = {
  namespace: 'React.js Demo',
  nodes: [ListNode, ListItemNode, HeadingNode],
  onError(error: Error) {
    console.error(error);
  },
  theme: {
    paragraph: 'mb-1',
    quote: 'editor-quote',
    heading: {
      h1: 'text-4xl font-bold mb-4',
      h2: 'text-2xl font-bold mb-3',
      h3: 'text-xl font-bold mb-2',
      h4: 'text-lg font-bold mb-1',
      h5: 'text-base font-bold mb-1',
      h6: 'text-sm font-bold',
    },
    list: {
      ul: 'list-disc list-inside mb-1',
      ol: 'list-decimal list-inside mb-1',
    },
  },
};

export default function App() {
  return (
    <LexicalComposer initialConfig={editorConfig}>
      <div className="max-w-3xl mx-auto bg-white rounded-lg h-[50vh] p-5">
        <div className="editor-inner">
          <Toolbar />
          <RichTextPlugin
            contentEditable={
              <ContentEditable
                className="focus:outline-none min-h-[400px] p-8"
                style={{ height: 'auto', minHeight: '400px' }}
              />
            }
            placeholder={<Placeholder />}
            ErrorBoundary={LexicalErrorBoundary}
          />
          <HistoryPlugin />
          <AutoFocusPlugin />
          <TreeViewPlugin />
          <ListPlugin />
        </div>
      </div>
    </LexicalComposer>
  );
}