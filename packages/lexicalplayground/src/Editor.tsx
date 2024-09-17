    "use client";
    import * as React from 'react';
    import { LexicalComposer } from '@lexical/react/LexicalComposer';
    import { ContentEditable } from '@lexical/react/LexicalContentEditable';
    import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin'; // Import for rich text formatting
    import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin'; // Import for history management
    import ErrorBoundary from '@lexical/react/LexicalErrorBoundary'; // Import ErrorBoundary as default export

    const PlaygroundEditorTheme = {
    // Define your theme styles here
    };

    const initialConfig = {
    namespace: 'MyEditor', // Required field
    theme: PlaygroundEditorTheme,
    onError: (error: Error) => {
        console.error('Editor Error:', error);
    },
    };

    const Editor: React.FC = () => {
    return (
        <LexicalComposer initialConfig={initialConfig}>
        <RichTextPlugin
            contentEditable={<ContentEditable className="content-editable" />}
            placeholder={<div>Enter some text...</div>}
            ErrorBoundary={ErrorBoundary} // Provide ErrorBoundary here
        />
        <HistoryPlugin />
        </LexicalComposer>
    );
    };

    export default Editor;
