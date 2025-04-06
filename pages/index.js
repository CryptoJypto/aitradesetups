
import Head from "next/head";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-zinc-800 text-white px-6">
      <Head>
        <title>AI TRADE SETUPS</title>
        <meta name="description" content="AI-generated crypto trading setups updated daily. High-probability trades, precision charts, and clean reward-to-risk logic." />
      </Head>
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
    </div>
  );
}
