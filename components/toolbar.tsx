import React, { useState } from 'react';
import { FontBoldIcon } from "@radix-ui/react-icons";
import { Toggle } from '@/components/ui/toggle'; 
import { FaItalic } from "react-icons/fa"; 
import { UnderlineIcon } from '@radix-ui/react-icons';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { UNDO_COMMAND, REDO_COMMAND, FORMAT_TEXT_COMMAND, $getSelection, $isRangeSelection } from 'lexical';
import { INSERT_UNORDERED_LIST_COMMAND, INSERT_ORDERED_LIST_COMMAND } from '@lexical/list';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    $setBlocksType,
} from '@lexical/selection';
import {
    $createHeadingNode,
    $createParagraphNode,
    HeadingTagType,
} from '@lexical/rich-text';

// Define a type that includes headings and a normal paragraph
type HeadingType = HeadingTagType | 'paragraph';

const blockTypeToBlockName: Record<HeadingType, string> = {
  paragraph: 'Normal',
  h1: 'Heading 1',
  h2: 'Heading 2',
  h3: 'Heading 3',
};

const Toolbar: React.FC = () => {
  const [editor] = useLexicalComposerContext();
  const [selectedHeading, setSelectedHeading] = useState<HeadingType>('paragraph');

  const handleUndo = () => editor.dispatchCommand(UNDO_COMMAND, undefined);
  const handleRedo = () => editor.dispatchCommand(REDO_COMMAND, undefined);
  const handleBold = () => editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'bold');
  const handleItalic = () => editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'italic');
  const handleBulletList = () => editor.dispatchCommand(INSERT_UNORDERED_LIST_COMMAND, undefined);
  const handleNumberedList = () => editor.dispatchCommand(INSERT_ORDERED_LIST_COMMAND, undefined);
  const handleUnderline = () => {
    // Implement your underline logic here
  };

  const formatHeading = (headingSize: HeadingType) => {
    editor.update(() => {
      const selection = $getSelection();
      if ($isRangeSelection(selection)) {
        if (headingSize === 'paragraph') {
          $setBlocksType(selection, () => $createParagraphNode());
        } else {
          $setBlocksType(selection, () => $createHeadingNode(headingSize));
        }
      }
    });
    setSelectedHeading(headingSize);
  };

  return (
    <div className="navbar p-2 flex items-center space-x-4 border-b border-gray-700 bg-white shadow-sm">
      {/* Undo & Redo */}
      <svg onClick={handleUndo} className="w-[16px] h-[18px] fill-[gray] cursor-pointer mt-2.5 mb-2 strokeWidth=1" viewBox="0 0 512 512">
        <path d="M125.7 160H176c17.7 0 32 14.3 32 32s-14.3 32-32 32H48c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32s32 14.3 32 32v51.2L97.6 97.6c87.5-87.5 229.3-87.5 316.8 0s87.5 229.3 0 316.8s-229.3 87.5-316.8 0c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0c62.5 62.5 163.8 62.5 226.3 0s62.5-163.8 0-226.3s-163.8-62.5-226.3 0L125.7 160z"/>
      </svg>

      <svg onClick={handleRedo} className="w-[16px] h-[18px] fill-[gray] cursor-pointer mt-2.5 mb-2" viewBox="0 0 512 512">
        <path d="M386.3 160H336c-17.7 0-32 14.3-32 32s14.3 32 32 32H464c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32s-32 14.3-32 32v51.2L414.4 97.6c-87.5-87.5-229.3-87.5-316.8 0s-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3s163.8-62.5 226.3 0L386.3 160z" />
      </svg>

      {/* Dropdown for Lists and Headings */}
      <DropdownMenu>
        <DropdownMenuTrigger className="w-39 flex items-center justify-between px-2 py-1 bg-white border-none rounded hover:bg-gray-100">
          <span className="ml-2">{blockTypeToBlockName[selectedHeading]}</span>
        </DropdownMenuTrigger>

        <DropdownMenuContent>
          {/* Heading Options */}
          <DropdownMenuItem onSelect={() => formatHeading('paragraph')}>
            <span className="flex items-center">Normal</span>
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={() => formatHeading('h1')}>
            <span className="flex items-center">H1 Heading</span>
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={() => formatHeading('h2')}>
            <span className="flex items-center">H2 Heading</span>
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={() => formatHeading('h3')}>
            <span className="flex items-center">H3 Heading</span>
          </DropdownMenuItem>
          {/* List Options */}
          <DropdownMenuItem onSelect={handleBulletList}>
            <span className="flex items-center">
              <svg className="w-[20px] h-[20px] fill-[#8e8e8e]" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                <path d="M40 48C26.7 48 16 58.7 16 72v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V72c0-13.3-10.7-24-24-24H40zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM16 232v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V232c0-13.3-10.7-24-24-24H40c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V392c0-13.3-10.7-24-24-24H40z"/>
              </svg>
              Bullet List
            </span>
          </DropdownMenuItem>

          <DropdownMenuItem onSelect={handleNumberedList}>
            <span className="flex items-center">
              <svg className="w-[20px] h-[20px] fill-[#8e8e8e] mr-2" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                <path d="M40 48C26.7 48 16 58.7 16 72v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V72c0-13.3-10.7-24-24-24H40zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM16 232v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V232c0-13.3-10.7-24-24-24H40c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V392c0-13.3-10.7-24-24-24H40z"/>
              </svg>
              Numbered List
            </span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Bold, Italic, Underline */}
      <Toggle ariaLabel="Bold" onToggle={handleBold}>
        <FontBoldIcon />
      </Toggle>
      <Toggle ariaLabel="Italic" onToggle={handleItalic}>
        <FaItalic className="h-3 w-3" />
      </Toggle>
      <Toggle ariaLabel="Underline" onToggle={handleUnderline}>
        <UnderlineIcon />
      </Toggle>
    </div>
  );
};

export default Toolbar;
