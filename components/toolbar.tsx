import React from 'react';
import { FontBoldIcon } from "@radix-ui/react-icons";
import { Toggle } from '@/components/ui/toggle'; 
import { FaItalic } from "react-icons/fa"; 
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { UNDO_COMMAND, REDO_COMMAND, FORMAT_TEXT_COMMAND } from 'lexical';
import { INSERT_UNORDERED_LIST_COMMAND, INSERT_ORDERED_LIST_COMMAND } from '@lexical/list';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"

const Toolbar = () => {
  const [editor] = useLexicalComposerContext();

  const handleUndo = () => {
    editor.dispatchCommand(UNDO_COMMAND, undefined);
  };

  const handleRedo = () => {
    editor.dispatchCommand(REDO_COMMAND, undefined);
  };

  const handleBold = () => {
    editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'bold');
  };

  const handleItalic = () => {
    editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'italic');
  };

  const handleBulletList = () => {
    editor.dispatchCommand(INSERT_UNORDERED_LIST_COMMAND, undefined);
  };

  const handleNumberedList = () => {
    editor.dispatchCommand(INSERT_ORDERED_LIST_COMMAND, undefined);
  };

  return (
<div className="toolbar bg-gray-100 p-2 space-x-2 border-b border-gray-300">
<svg
  onClick={handleUndo}
  className="w-[24px] h-[24px] fill-[#8e8e8e] cursor-pointer mt-2.5"
  viewBox="0 0 512 512"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M125.7 160H176c17.7 0 32 14.3 32 32s-14.3 32-32 32H48c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32s32 14.3 32 32v51.2L97.6 97.6c87.5-87.5 229.3-87.5 316.8 0s87.5 229.3 0 316.8s-229.3 87.5-316.8 0c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0c62.5 62.5 163.8 62.5 226.3 0s62.5-163.8 0-226.3s-163.8-62.5-226.3 0L125.7 160z"></path>
</svg>

<svg
  onClick={handleRedo}
  className="w-[24px] h-[24px] fill-[#8e8e8e] cursor-pointer mt-2.5"
  viewBox="0 0 512 512"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M386.3 160H336c-17.7 0-32 14.3-32 32s14.3 32 32 32H464c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32s-32 14.3-32 32v51.2L414.4 97.6c-87.5-87.5-229.3-87.5-316.8 0s-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3s163.8-62.5 226.3 0L386.3 160z"></path>
</svg>


      <div className="flex items-center space-x-2">
        <Toggle ariaLabel="Toggle bold" onToggle={handleBold}>
          <FontBoldIcon className="h-4 w-4" />
        </Toggle>
        <Toggle ariaLabel="Toggle italic" onToggle={handleItalic}>
          <FaItalic className="h-4 w-4" />
        </Toggle>
      </div>
      <DropdownMenu>
      <DropdownMenuTrigger className="w-35 flex items-center justify-between px-2 py-1 bg-white border border-gray-300 rounded">
              {/* First SVG */}
              <svg className="w-[20px] h-[20px] fill-[#8e8e8e]" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                <path d="M448 64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32zm0 256c0-17.7-14.3-32-32-32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32-14.3 32-32zM0 192c0 17.7 14.3 32 32 32H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H32c-17.7 0-32 14.3-32 32zM448 448c0-17.7-14.3-32-32-32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32-14.3 32-32z"></path>
              </svg>
              {/* Text */}
              <span className="ml-2">Normal</span>
              {/* Second SVG */}
              <svg className="w-[20px] h-[20px] fill-[#8e8e8e]" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                <path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path>
              </svg>
              </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuSeparator />

    {/* Bullet List Option */}
    <DropdownMenuItem onSelect={handleBulletList}>
      <span className="flex items-center">
        <svg className="w-[24px] h-[24px] mr-2 fill-[#8e8e8e]" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
          <path d="M40 48C26.7 48 16 58.7 16 72v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V72c0-13.3-10.7-24-24-24H40zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM16 232v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V232c0-13.3-10.7-24-24-24H40c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V392c0-13.3-10.7-24-24-24H40z"></path>
        </svg>
        Bullet List
      </span>
    </DropdownMenuItem>

    {/* Numbered List Option */}
    <DropdownMenuItem onSelect={handleNumberedList}>
      <span className="flex items-center">
        <svg className="w-[24px] h-[24px] mr-2 fill-[#8e8e8e]" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 56c0-13.3 10.7-24 24-24H80c13.3 0 24 10.7 24 24V176h16c13.3 0 24 10.7 24 24s-10.7 24-24 24H40c-13.3 0-24-10.7-24-24s10.7-24 24-24H56V80H48C34.7 80 24 69.3 24 56zM86.7 341.2c-6.5-7.4-18.3-6.9-24 1.2L51.5 357.9c-7.7 10.8-22.7 13.3-33.5 5.6s-13.3-22.7-5.6-33.5l11.1-15.6c23.7-33.2 72.3-35.6 99.2-4.9c21.3 24.4 20.8 60.9-1.1 84.7L86.8 432H120c13.3 0 24 10.7 24 24s-10.7 24-24 24H32c-9.5 0-18.2-5.6-22-14.4s-2.1-18.9 4.3-25.9l72-78c5.3-5.8 5.4-14.6 .3-20.5zM224 64H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H224c-17.7 0-32-14.3-32-32s14.3-32 32-32zm0 160H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H224c-17.7 0-32-14.3-32-32s14.3-32 32-32zm0 160H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H224c-17.7 0-32-14.3-32-32s14.3-32 32-32z"></path>
        </svg>
        Numbered List
      </span>
    </DropdownMenuItem>

  </DropdownMenuContent>
</DropdownMenu>

    </div>
  );
};

export default Toolbar;
