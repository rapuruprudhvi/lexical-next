// src/plugins/UnderlinePlugin.tsx
"use client"
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { FORMAT_TEXT_COMMAND } from 'lexical';
import { useEffect } from 'react';

const UnderlinePlugin = () => {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    const unregister = editor.registerCommand(
      FORMAT_TEXT_COMMAND,
      (payload) => {
        if (payload === 'underline') {
          editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'underline');
        }
        return true;
      },
      1 // Priority value
    );

    return () => {
      unregister();
    };
  }, [editor]);

  return null;
};

export default UnderlinePlugin;
