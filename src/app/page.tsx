'use client'

import FormDemo from "@/app/components/form";
import {useRef} from "react";

export default function Home() {
    const insertTextRef = useRef(null);

    const handleLabelClick = (text: string) => {
        if (insertTextRef.current) {
            insertTextRef.current(text);
        }
    };

    return (
        <div className="min-h-screen flex items-start justify-start bg-gray-100">
            <main className="w-full max-w-2xl p-8 bg-white shadow-md rounded-lg">
                <div className="mb-4">
                    <button
                        onClick={() => handleLabelClick("Sport")}
                        className="mr-2 p-2 bg-blue-500 text-white rounded"
                    >
                        Sport
                    </button>
                    <button
                        onClick={() => handleLabelClick("Animals")}
                        className="mr-2 p-2 bg-blue-500 text-white rounded"
                    >
                        Animals
                    </button>
                    <button
                        onClick={() => handleLabelClick("Nature")}
                        className="mr-2 p-2 bg-blue-500 text-white rounded"
                    >
                        Nature
                    </button>
                </div>
                <FormDemo insertText={insertTextRef} />
            </main>
        </div>
    );
}
