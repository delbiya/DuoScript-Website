'use client';

import React, { useState, useRef } from 'react';
import Editor from '@monaco-editor/react';
import { Play,  RotateCcw, Download, Copy, Settings } from 'lucide-react';
import Navbar from './Navbar';

const Playground: React.FC = () => {
  const [code, setCode] = useState<string>(`// Welcome to DuoScript Playground! 
// Try writing some code with DuoScript features:
console.log("Hello Guys") ;



`);
  const [output, setOutput] = useState<string>('');
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  
  const editorRef = useRef<any>(null);

  const executeCode = () => {
    setIsRunning(true);
    setOutput('');
    
    try {
      const logs: string[] = [];
      const originalConsoleLog = console.log;
      
      console.log = (...args) => {
        logs.push(args.map(arg => typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)).join(' '));
      };
      
      new Function(editorRef.current?.getValue() || '')();
      
      setOutput(logs.join('\n'));
      console.log = originalConsoleLog;
    } catch (error) {
      setOutput(`Runtime Error: ${error instanceof Error ? error.message : 'An unknown error occurred'}`);
    } finally {
      setIsRunning(false);
    }
  };

  const resetCode = () => {
    setCode(`// Welcome to DuoScript Playground! \n// Try writing some code with DuoScript features:\n\n: console.log("Hello Guys") ;`);
  };

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const copyCode = () => {
    navigator.clipboard.writeText(code);
    alert('Code copied to clipboard!');
  };

  const downloadCode = () => {
    const element = document.createElement('a');
    const file = new Blob([code], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'duoscript-example.ds';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return  (
    <>
      <Navbar />
      <section id="playground" className={`py-16 ${theme === 'dark' ? 'bg-gray-900' : 'bg-orange-50'}`}> 
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h2 className={`text-3xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>DuoScript Playground</h2>
          </div>

          <div className={`rounded-lg shadow-xl overflow-hidden border ${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-orange-200'}`}>
            <div className="p-3 flex items-center justify-between bg-gray-100 border-b border-orange-200">
              <button onClick={executeCode} disabled={isRunning} className="bg-blue-500 text-white p-2 rounded flex items-center gap-2">
                <Play size={16} /> Run
              </button>
              <button onClick={resetCode} className="bg-gray-500 text-white p-2 rounded flex items-center gap-2">
                <RotateCcw size={16} /> Reset
              </button>
              <button onClick={toggleTheme} className="bg-yellow-500 text-white p-2 rounded flex items-center gap-2">
                <Settings size={16} /> Theme
              </button>
              <button onClick={copyCode} className="bg-green-500 text-white p-2 rounded flex items-center gap-2">
                <Copy size={16} /> Copy
              </button>
              <button onClick={downloadCode} className="bg-purple-500 text-white p-2 rounded flex items-center gap-2">
                <Download size={16} /> Download
              </button>
            </div>

            <Editor
              height="400px"
              defaultLanguage="typescript"
              value={code}
              theme={theme === 'dark' ? 'vs-dark' : 'light'}
              onMount={(editor) => (editorRef.current = editor)}
            />

            <div className="p-4 border-t border-orange-200 bg-gray-100">
              <h3 className="text-lg font-bold">Output:</h3>
              <pre className="mt-2 p-2 bg-black text-white rounded-md overflow-auto h-32">{output}</pre>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Playground;
