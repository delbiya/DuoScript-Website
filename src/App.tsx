import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import CodeExample from './components/CodeExample';
import SetupGuide from './components/SetupGuide';
import Playground from './components/Playground';
import { ArrowRight, Terminal, Shield, Zap, Users,  Code } from 'lucide-react';

function App() {
  const location = useLocation();
  
  // If we're on the playground route, only show the playground component
  if (location.pathname === '/playground') {
    return <Playground />;
  }
  
  // Otherwise show the main landing page
  return (
    <div className="min-h-screen bg-orange-50">
      <Navbar />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Other routes can be added here */}
      </Routes>
    </div>
  );
}

// HomePage component containing all the sections from the original App
function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section id="hero" className="pt-20 pb-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
            ⚡DuoScript
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl">
            DuoScript is a scripted,general-purpose programming language, statically typed and mod superset of JavaScript, blending type safety with flexibility.🚀        
                <p> Catch errors early, write cleaner code, and transpile seamlessly to JavaScript.</p>

            Start coding with confidence today! 🔥💻            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#setup-guide" className="bg-orange-500 text-white px-6 py-3 rounded-lg flex items-center space-x-2 hover:bg-orange-600">
                <span>Get Started</span>
                <ArrowRight className="h-5 w-5" />
              </a>
              <a
  href="https://www.npmjs.com/package/duoscript"
  target="_blank"
  rel="noopener noreferrer"
  className="border border-orange-200 text-gray-700 px-6 py-3 rounded-lg hover:bg-orange-100"
>
  View Docs
</a>

              {/* <Link to="/playground" className="bg-orange-500 text-white px-6 py-3 rounded-lg flex items-center space-x-2 hover:bg-orange-600">
                <span>Playground</span>
                <Code className="h-5 w-5" />
              </Link>
              <a href="/path/to/duoscript.zip" download className="bg-orange-500 text-white px-6 py-3 rounded-lg flex items-center space-x-2 hover:bg-orange-600">
                <span>Download</span>
                <Download className="h-5 w-5" />
              </a> */}
            </div>
          </div>
        </div>
      </section>

      {/* Setup Guide Section */}
      <section id="setup-guide" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SetupGuide />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose DuoScript?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Terminal className="h-8 w-8 text-orange-500" />}
              title="Type Safety"
              description="Catch errors at compile time with static type checking"
            />
            <FeatureCard
              icon={<Zap className="h-8 w-8 text-orange-500" />}
              title="Performance"
              description="Optimized runtime performance with type-based optimizations"
            />
            <FeatureCard
              icon={<Shield className="h-8 w-8 text-orange-500" />}
              title="Reliability"
              description="Write more reliable code with enhanced type system"
            />
          </div>
        </div>
      </section>

      {/* Code Example Section */}
      <section id="docs" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Write Better Code</h2>
              <p className="text-gray-600 mb-8">
                DuoScript's syntax is familiar to JavaScript developers while adding
                powerful type system features that help you write more maintainable code.
              </p>
              <Link to="/playground" className="bg-orange-500 text-white px-6 py-3 rounded-lg flex items-center space-x-2 hover:bg-orange-600 inline-flex">
                <span>Try in Playground</span>
                <Code className="h-5 w-5" />
              </Link>
            </div>
            <CodeExample />
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="py-20 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <Users className="h-12 w-12 text-orange-500" />
          </div>
          <h2 className="text-3xl font-bold mb-6">Join Our Community</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Connect with developers worldwide, share your experience, and contribute
            to making DuoScript even better.
          </p>
          <a href="https://www.npmjs.com/package/duoscript" className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600">
            Join Npm
          </a>
        </div>
      </section>

      {/* GitHub Section */}
      <section id="github" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Contribute on GitHub</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Help us improve DuoScript by contributing to our GitHub repository.
          </p>
          <a href="https://github.com/delbiya/DuoScript" className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600">
            View on GitHub
          </a>
        </div>
      </section>
    </>
  );
}

function FeatureCard({ icon, title, description }: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg border border-orange-100 hover:border-orange-200 transition-colors">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default App;