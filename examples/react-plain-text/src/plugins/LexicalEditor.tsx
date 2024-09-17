import React from 'react';
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { HeadingPlugin } from './HeadingPlugin';

import { ListPlugin } from './ListPlugin';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { editorConfig } from './editorConfig';
import Toolbar from '@/components/toolbar';

const LexicalEditor = () => (
  <LexicalComposer initialConfig={editorConfig}>
    <Toolbar />
    <ListPlugin />
    <HistoryPlugin />
    <HeadingPlugin />
    {/* Add your editor component here */}
  </LexicalComposer>
);

export default LexicalEditor;
