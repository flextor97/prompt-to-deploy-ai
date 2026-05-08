export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white flex items-center justify-center p-8">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-6">PromptToDeploy AI</h1>
        <p className="text-xl text-zinc-400 mb-10">Natural language → Branded design → Live website</p>
        
        <div className="bg-zinc-900 rounded-3xl p-8">
          <textarea 
            className="w-full h-32 bg-black border border-zinc-700 rounded-2xl p-4 text-white placeholder:text-zinc-500 focus:outline-none focus:border-blue-500"
            placeholder="Describe your website... e.g. Modern SaaS landing page for AI design tool, blue and black colors"
          ></textarea>
          <button 
            className="mt-6 bg-blue-600 hover:bg-blue-500 px-10 py-4 rounded-2xl text-lg font-semibold transition-colors w-full"
          >
            Generate & Deploy →
          </button>
        </div>
        
        <p className="text-xs text-zinc-500 mt-8">Connected to your Canva • Drive • Vercel</p>
      </div>
    </main>
  );
}