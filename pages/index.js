// ALTERNATE LAYOUT VERSION 2 – AI TRADE SETUPS
import Head from "next/head";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-indigo-950 via-black to-purple-950 text-white px-4">
      <Head>
        <title>AI TRADE SETUPS</title>
        <meta name="description" content="AI-powered crypto trade setups with real risk logic. High probability entries. Free beta access." />
      </Head>

      {/* Hero Section */}
      <section className="flex flex-col justify-center items-center text-center gap-6 py-20 max-w-4xl mx-auto">
        <motion.h1 className="text-5xl font-extrabold leading-tight text-emerald-300" initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
          AI TRADE<br />SETUPS
        </motion.h1>
        <p className="text-3xl font-bold text-purple-300">Trade Like an AI</p>
        <p className="text-lg text-gray-400">Precision setups. No emotions. Just logic.</p>
        <p className="text-yellow-300 font-medium animate-pulse">🚀 This is a community-powered platform for AI trading. Join early and help shape what's next.</p>
        <div className="mt-4">
          <button className="px-6 py-3 text-lg font-bold bg-emerald-400 text-black rounded-xl shadow-md hover:bg-emerald-500">
            Get Started
          </button>
        </div>
      </section>

      {/* ZRO Intro */}
      <section className="text-center max-w-3xl mx-auto pb-12">
        <p className="text-sm text-gray-400 italic mb-4">Welcome to ground ZERO. This is the beginning of a movement, so we thought it'd be appropriate to feature ZRO as our first trade setup.</p>
      </section>

      {/* ZRO Preview */}
      <section className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-2xl font-bold text-emerald-300 mb-4">📌 Free ZRO Setup Preview</h2>
        <img src="/rr.PNG" alt="ZRO Setup" className="w-full max-w-3xl mx-auto rounded-xl border border-emerald-600 shadow-lg" />
        <button className="mt-4 px-6 py-3 text-lg font-semibold bg-cyan-500 text-black rounded-xl hover:bg-cyan-600 transition">
          View Full Details
        </button>
      </section>

      {/* Features */}
      <section className="py-16 bg-black bg-opacity-30 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-pink-400 mb-2">Why We Exist</h2>
          <p className="text-sm text-gray-400 mb-10">Precision setups. No emotions. Just logic.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-zinc-900 p-6 rounded-lg border border-purple-700">
              <h3 className="text-lg font-semibold mb-2">🧬 Open Collaboration</h3>
              <p className="text-sm text-gray-400">We are building this together. Feedback, ideas, and contributions from the community shape every move.</p>
            </div>
            <div className="bg-zinc-900 p-6 rounded-lg border border-purple-700">
              <h3 className="text-lg font-semibold mb-2">📈 Daily Trade Setups</h3>
              <p className="text-sm text-gray-400">Fresh long/short ideas posted every day with clear entry, stop, and target zones.</p>
            </div>
            <div className="bg-zinc-900 p-6 rounded-lg border border-purple-700">
              <h3 className="text-lg font-semibold mb-2">🧠 AI-Powered Risk Logic</h3>
              <p className="text-sm text-gray-400">Smart calculations determine setups with the highest probability and cleanest R:R ratios.</p>
            </div>
            <div className="bg-zinc-900 p-6 rounded-lg border border-purple-700">
              <h3 className="text-lg font-semibold mb-2">🪙 Token Vision</h3>
              <p className="text-sm text-gray-400">Our future utility token will unlock access, voting power, staking rewards, and deeper AI trading tools.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 bg-gradient-to-b from-black to-zinc-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-cyan-300 mb-2">What Traders Are Saying</h2>
          <p className="text-sm text-gray-400 mb-6">Precision setups. No emotions. Just logic.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-zinc-800 p-6 rounded-xl border border-zinc-600">
              <p className="text-lg italic text-gray-300 mb-2">“This is the first time I’ve actually <span className='text-white font-bold'>understood</span> a trade setup.”</p>
              <p className="text-sm text-gray-500">— DeFi Newbie</p>
            </div>
            <div className="bg-zinc-800 p-6 rounded-xl border border-zinc-600">
              <p className="text-lg italic text-gray-300 mb-2">“I’ve followed dozens of signal groups. This one finally feels like it was built for real traders.”</p>
              <p className="text-sm text-gray-500">— Market Skeptic</p>
            </div>
          </div>
        </div>
      </section>

      {/* Staking Teaser */}
      <section className="py-16 bg-zinc-900 border-t border-purple-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-emerald-300 mb-2">🚀 Staking Coming Soon</h2>
          <p className="text-sm text-gray-400 mb-4">Precision setups. No emotions. Just logic.</p>
          <p className="text-gray-400 max-w-2xl mx-auto mb-6">Members will soon be able to stake tokens to unlock access, earn rewards, gain access to early tools, and contribute to the growth of AI-powered trading.</p>
          <button className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-xl hover:bg-purple-700 transition">Get Notified First</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-500 text-sm">
        <p className="italic text-gray-400">✨ This site is 100% AI generated</p>
        <div className="flex justify-center gap-6 mt-2">
          <a href="#" className="hover:underline">Free Setup</a>
          <a href="#" className="hover:underline">Contact</a>
        </div>
        <p className="mt-4">&copy; 2025 AI TRADE SETUPS. All rights reserved.</p>
      </footer>
    </div>
  );
}
