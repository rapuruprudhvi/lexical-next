import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import {
  INSERT_UNORDERED_LIST_COMMAND,
  INSERT_ORDERED_LIST_COMMAND,
  REMOVE_LIST_COMMAND,
} from '@lexical/list';
import { useEffect } from 'react';

export function ListPlugin() {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    const removeList = editor.registerCommand(
      REMOVE_LIST_COMMAND,
      () => {
        // Implement remove list logic here
        return true;
      },
      0
    );

    const insertUnorderedList = editor.registerCommand(
      INSERT_UNORDERED_LIST_COMMAND,
      () => {
        // Implement insert unordered list logic here
        // Make sure not to re-dispatch INSERT_UNORDERED_LIST_COMMAND
        return true;
      },
      0
    );

    const insertOrderedList = editor.registerCommand(
      INSERT_ORDERED_LIST_COMMAND,
      () => {
        // Implement insert ordered list logic here
        // Make sure not to re-dispatch INSERT_ORDERED_LIST_COMMAND
        return true;
      },
      0
    );

    return () => {
      removeList();
      insertUnorderedList();
      insertOrderedList();
    };
  }, [editor]);

  return null;
}