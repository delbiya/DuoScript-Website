import { Copy, Check } from 'lucide-react';
import { useState } from 'react';

// CodeBlock Component
function CodeBlock({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative">
      <pre className="block bg-gray-800 text-white p-2 rounded">
        <code>{code}</code>
      </pre>
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 p-1 rounded-md hover:bg-gray-700 transition-colors"
      >
        {copied ? (
          <Check className="h-4 w-4 text-green-500" />
        ) : (
          <Copy className="h-4 w-4 text-gray-400" />
        )}
      </button>
    </div>
  );
}

// SetupGuide Component
export default function SetupGuide() {
  return (
    <div className="space-y-6 max-w-xl">
      <div className="p-4 bg-orange-50 rounded-lg border border-orange-100">
        <h3 className="font-semibold mb-2">Step 1: Install Node.js</h3>
        <p className="text-gray-600 mb-2">
          Download and install Node.js from the{' '}
          <a
            href="https://nodejs.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            official Node.js website
          </a>.
        </p>
      </div>

      <div className="p-4 bg-orange-50 rounded-lg border border-orange-100">
        <h3 className="font-semibold mb-2">Step 2: Install DuoScript CLI</h3>
        <CodeBlock code="npm install duoscript" />
      </div>

      <div className="p-4 bg-orange-50 rounded-lg border border-orange-100">
        <h3 className="font-semibold mb-2">Step 3: Create Project</h3>
        <CodeBlock code={`mkdir my-duoscript-project\ncd my-duoscript-project\nnpm init`} />
      </div>

      <div className="p-4 bg-orange-50 rounded-lg border border-orange-100">
        <h3 className="font-semibold mb-2">Step 4: Create Main File</h3>
        <p className="text-gray-600 mb-2">Create <code>main.ds</code> and start coding!</p>
      </div>

      <div className="p-4 bg-orange-50 rounded-lg border border-orange-100">
        <h3 className="font-semibold mb-2">Step 5: Transpile and Run</h3>
        <CodeBlock code={`npx dsc main.ds\nnode main.js`} />
      </div>
    </div>
  );
}
