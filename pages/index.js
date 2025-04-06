// Full Landing Page: AI TRADE SETUPS
import Head from "next/head";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-zinc-800 text-white px-6">
      <Head>
        <title>AI TRADE SETUPS</title>
        <meta name="description" content="AI-generated crypto trading setups updated daily. High-probability trades, precision charts, and clean reward-to-risk logic." />
      </Head>

      {/* Hero Section */}
      <header className="text-center py-16 flex flex-col items-center justify-center">
        <motion.h1 
          className="text-6xl font-extrabold tracking-tight bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          AI TRADE SETUPS
        </motion.h1>
        <p className="text-lg mt-4 text-gray-400 max-w-xl">
          AI-generated crypto trade ideas with sniper precision. Backtested strategies. Real setups. Updated daily.
        </p>

        <motion.h2 
          className="mt-10 text-2xl text-cyan-300 italic text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          "How much money could you make if you were allowed to trade?"<br />
          <span className="text-emerald-400 font-bold text-3xl block mt-2">All the money in the world.</span>
        </motion.h2>

        <motion.div className="flex flex-col sm:flex-row gap-4 mt-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
          <button className="px-6 py-3 text-lg bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-cyan-500 hover:to-emerald-500 transition-all duration-300 rounded-xl text-black font-bold shadow-xl">
            Get Started
          </button>
          <button className="px-6 py-3 text-lg border border-cyan-500 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-800/30 transition">
            See a Free Setup
          </button>
        </motion.div>

        <motion.div className="mt-6 animate-bounce text-cyan-500 text-sm">👇 Scroll to see how it works</motion.div>
      </header>

      {/* Feature Grid */}
      <section className="max-w-5xl mx-auto py-12">
        <h2 className="text-center text-3xl font-bold text-emerald-400 mb-8">What You Get</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="bg-zinc-900 p-4 rounded-xl border border-zinc-700">
            <h3 className="text-lg font-semibold text-white mb-1">📈 Daily Trade Setups</h3>
            <p className="text-sm text-gray-400">Fresh long/short ideas posted every day.</p>
          </div>
          <div className="bg-zinc-900 p-4 rounded-xl border border-zinc-700">
            <h3 className="text-lg font-semibold text-white mb-1">🧠 AI-Powered Risk Logic</h3>
            <p className="text-sm text-gray-400">Precision-calculated entry, stop, and target zones.</p>
          </div>
          <div className="bg-zinc-900 p-4 rounded-xl border border-zinc-700">
            <h3 className="text-lg font-semibold text-white mb-1">🛡️ Smart R:R Filters</h3>
            <p className="text-sm text-gray-400">Only trades with clean reward-to-risk ratios.</p>
          </div>
          <div className="bg-zinc-900 p-4 rounded-xl border border-zinc-700">
            <h3 className="text-lg font-semibold text-white mb-1">🔓 Cancel Anytime</h3>
            <p className="text-sm text-gray-400">No lock-ins. No nonsense. Just setups.</p>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="max-w-3xl mx-auto py-10 text-center">
        <div className="bg-zinc-800 p-6 rounded-xl border border-zinc-600">
          <p className="text-xl italic text-gray-300 mb-2">“This is the first time I’ve actually <span className='text-white font-bold'>understood</span> a trade setup.”</p>
          <p className="text-sm text-gray-500">— DeFi Newbie</p>
        </div>
      </section>

      <motion.div 
        className="text-center text-sm text-gray-500 italic mb-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        ✨ This website is <span className="text-white font-semibold">100% AI generated</span>.
      </motion.div>

      <footer className="text-center py-6 text-gray-500 text-sm">
        &copy; 2025 AI TRADE SETUPS. All rights reserved.
      </footer>
    </div>
  );
}
