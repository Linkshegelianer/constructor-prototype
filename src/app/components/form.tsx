'use client'

import * as Label from '@radix-ui/react-label';
import {useRef} from "react";

const FormDemo = ({ insertText }) => {
    const textareaRef = useRef(null);

    const handleInsertText = (text) => {
        const textarea = textareaRef.current;
        if (textarea) {
            const start = textarea.selectionStart;
            const end = textarea.selectionEnd;
            const textBeforeCursor = textarea.value.substring(0, start);
            const textAfterCursor = textarea.value.substring(end, textarea.value.length);
            textarea.value = textBeforeCursor + text + textAfterCursor;
            textarea.setSelectionRange(start + text.length, start + text.length);
            textarea.focus();
        }
    };

    insertText.current = handleInsertText;

    return (
        <form className="w-full p-8">
            <div className="mb-4">
                <Label.Root htmlFor="textChunk" className="block text-lg font-medium text-black mb-2">
                    Label
                </Label.Root>
                <textarea
                    ref={textareaRef}
                    id="textChunk"
                    placeholder="Enter your text here"
                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-lg h-48 resize-none text-black"
                />
            </div>
        </form>
    );
};


export default FormDemo;
