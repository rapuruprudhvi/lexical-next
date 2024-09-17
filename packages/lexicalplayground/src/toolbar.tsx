"use client";
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { $getSelection, $isRangeSelection, $getRoot, $createTextNode } from 'lexical'; // Import $createTextNode and other utilities from lexical
import { $createListNode, $createListItemNode } from '@lexical/list'; // Import list creation functions
import { FORMAT_TEXT_COMMAND } from 'lexical';

function Toolbar() {
  const [editor] = useLexicalComposerContext();

  const applyBulletList = () => {
    editor.update(() => {
      const selection = $getSelection();
      if ($isRangeSelection(selection)) {
        const list = $createListNode('bullet');
        selection.getNodes().forEach(node => {
          if (node.getType() === 'text') { // Check if node type is 'text'
            list.append($createListItemNode().append($createTextNode(node.getTextContent())));
            node.remove();
          }
        });
        const root = $getRoot();
        root.append(list);
      }
    });
  };

  const applyNumberedList = () => {
    editor.update(() => {
      const selection = $getSelection();
      if ($isRangeSelection(selection)) {
        const list = $createListNode('number');
        selection.getNodes().forEach(node => {
          if (node.getType() === 'text') { // Check if node type is 'text'
            list.append($createListItemNode().append($createTextNode(node.getTextContent())));
            node.remove();
          }
        });
        const root = $getRoot();
        root.append(list);
      }
    });
  };

  const applyBold = () => {
    editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'bold');
  };

  const applyItalic = () => {
    editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'italic');
  };

  return (
    <div className="toolbar">
      <button onClick={applyBold}>Bold</button>
      <button onClick={applyItalic}>Italic</button>
      <button onClick={applyBulletList}>Bullet List</button>
      <button onClick={applyNumberedList}>Numbered List</button>
    </div>
  );
}

export default Toolbar;
