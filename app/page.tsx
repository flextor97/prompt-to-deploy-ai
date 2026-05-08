export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-8">
      <div className="max-w-2xl w-full bg-white rounded-3xl shadow-xl p-10">
        <h1 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          PromptToDeploy AI
        </h1>
        <p className="text-center text-gray-600 mb-8">One prompt. Full branded design → live website.</p>
        
        <div className="space-y-6">
          <textarea 
            className="w-full h-40 p-6 border border-gray-200 rounded-2xl focus:outline-none focus:border-blue-500 text-lg resize-none"
            placeholder="Describe your website or design... e.g. Modern SaaS landing page for AI design tool with blue and black colors"
          ></textarea>
          
          <button 
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-6 px-8 rounded-2xl text-xl transition-all active:scale-95"
          >
            🚀 Generate Design + Deploy Live
          </button>
          
          <div className="text-xs text-gray-500 text-center flex justify-center gap-8">
            <div>✅ Canva</div>
            <div>✅ Google Drive</div>
            <div>✅ GitHub</div>
            <div>✅ Vercel</div>
            <div>✅ Gmail</div>
          </div>
        </div>
      </div>
    </main>
  );
}