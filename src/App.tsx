/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, useSpring } from 'motion/react';
import { 
  ArrowRight, 
  ChevronDown, 
  Lock, 
  Cpu, 
  Archive, 
  Users, 
  Activity, 
  ShieldCheck,
  Clock,
  Zap,
  Heart,
  MessageSquare,
  Eye
} from 'lucide-react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts';
import { cn } from '@/src/lib/utils';

// --- Components ---

const Navbar = () => (
  <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 py-6 mix-blend-difference">
    <div className="text-2xl font-serif tracking-[0.2em] text-white">ECHO</div>
    <div className="hidden md:flex gap-12 text-[10px] uppercase tracking-[0.3em] text-white/70">
      <a href="#philosophy" className="hover:text-white transition-colors">Philosophy</a>
      <a href="#ritual" className="hover:text-white transition-colors">The Ritual</a>
      <a href="#engineering" className="hover:text-white transition-colors">Engineering</a>
      <a href="#invitation" className="hover:text-white transition-colors">Invitation</a>
    </div>
    <button className="text-[10px] uppercase tracking-[0.3em] border border-white/20 px-6 py-2 hover:bg-white hover:text-black transition-all duration-500">
      Private Access
    </button>
  </nav>
);

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-black">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover opacity-60 grayscale"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-ink-swirling-in-water-444-large.mp4" type="video/mp4" />
        </video>
      </div>
      
      <motion.div 
        style={{ y, opacity }}
        className="relative z-20 text-center px-4"
      >
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="text-[10px] uppercase tracking-[0.5em] text-gold mb-8 block"
        >
          The Silent Revolution
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.8 }}
          className="text-6xl md:text-8xl font-serif mb-12 leading-tight"
        >
          Write what you have <br />
          <span className="italic">never said.</span>
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1.5 }}
          className="absolute bottom-[-150px] left-1/2 -translate-x-1/2"
        >
          <ChevronDown className="w-6 h-6 text-white/30 animate-bounce" />
        </motion.div>
      </motion.div>
    </section>
  );
};

const LonelinessIndex = () => {
  const data = [
    { year: '2012', value: 100 },
    { year: '2014', value: 140 },
    { year: '2016', value: 210 },
    { year: '2018', value: 320 },
    { year: '2020', value: 480 },
    { year: '2022', value: 540 },
    { year: '2024', value: 600 },
  ];

  return (
    <section className="py-32 px-8 bg-dark border-y border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div>
          <span className="text-[10px] uppercase tracking-[0.3em] text-gold/60 mb-4 block">The Crisis</span>
          <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
            A public health crisis of <br /> historic proportions.
          </h2>
          <p className="text-paper/60 leading-relaxed max-w-md mb-12 font-light">
            1 in 3 adults globally now report chronic feelings of isolation. Since 2012, digital searches for "loneliness" have increased by 500%. We are more connected than ever, yet more alone than human history has ever recorded.
          </p>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <div className="text-3xl font-serif text-gold mb-1">380M</div>
              <div className="text-[10px] uppercase tracking-widest text-white/40">Serviceable Market</div>
            </div>
            <div>
              <div className="text-3xl font-serif text-gold mb-1">500%</div>
              <div className="text-[10px] uppercase tracking-widest text-white/40">Search Increase</div>
            </div>
          </div>
        </div>
        
        <div className="h-[400px] glass p-8 rounded-sm relative overflow-hidden">
          <div className="absolute top-4 left-4 text-[10px] uppercase tracking-widest text-white/20">Loneliness Search Index (2012-2024)</div>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#C5A059" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#C5A059" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <Area 
                type="monotone" 
                dataKey="value" 
                stroke="#C5A059" 
                fillOpacity={1} 
                fill="url(#colorValue)" 
                strokeWidth={1}
              />
              <Tooltip 
                contentStyle={{ backgroundColor: '#0A0A0A', border: '1px solid rgba(255,255,255,0.1)', color: '#F5F2ED' }}
                itemStyle={{ color: '#C5A059' }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
};

const Philosophy = () => (
  <section id="philosophy" className="py-32 px-8 bg-dark">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row gap-24">
        <div className="flex-1">
          <span className="text-[10px] uppercase tracking-[0.3em] text-gold/60 mb-4 block">The Synthesis</span>
          <h2 className="text-4xl md:text-6xl font-serif mb-12 leading-tight">
            Where "Unsent" <br /> meets "Soul".
          </h2>
        </div>
        <div className="flex-1 pt-12">
          <p className="text-xl text-paper/80 font-light leading-relaxed mb-8 italic">
            "The things you have never said are where your real self lives."
          </p>
          <p className="text-paper/50 leading-relaxed mb-12">
            Traditional journaling is a tomb; traditional matching is a market. ECHO merges the two. By capturing the raw, unedited thoughts you would never post on social media, we create a matching engine based on existential truth rather than curated performance.
          </p>
          <div className="h-px w-full bg-white/10 mb-12" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h4 className="text-gold text-sm uppercase tracking-widest mb-4">The Flaw</h4>
              <p className="text-xs text-paper/40 leading-relaxed">Private journals lack resonance. Shallow matching lacks depth. Both fail the human need for recognition.</p>
            </div>
            <div>
              <h4 className="text-gold text-sm uppercase tracking-widest mb-4">The Solution</h4>
              <p className="text-xs text-paper/40 leading-relaxed">A semantic bridge that connects two souls based on the frequency of their unspoken truths.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ResonanceSimulator = () => {
  const [thought, setThought] = useState('');
  const [result, setResult] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!thought.trim()) return;
    
    setLoading(true);
    // Simulated resonance calculation
    setTimeout(() => {
      const base = 2000;
      const random = Math.floor(Math.random() * 5000);
      setResult(base + random);
      setLoading(false);
    }, 2000);
  };

  return (
    <section className="py-32 px-8 bg-black relative">
      <div className="max-w-3xl mx-auto text-center">
        <span className="text-[10px] uppercase tracking-[0.3em] text-gold/60 mb-8 block">Interactive Resonance</span>
        <h2 className="text-3xl md:text-4xl font-serif mb-12">Test the frequency of your silence.</h2>
        
        <div className="glass p-12 rounded-sm relative overflow-hidden">
          <AnimatePresence mode="wait">
            {!result ? (
              <motion.form 
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-8"
              >
                <textarea
                  value={thought}
                  onChange={(e) => setThought(e.target.value)}
                  placeholder="Type a thought you've never shared..."
                  className="w-full bg-transparent border-b border-white/10 py-4 text-xl font-light focus:outline-none focus:border-gold transition-colors resize-none h-32 placeholder:text-white/10"
                />
                <button 
                  disabled={loading || !thought.trim()}
                  className="group flex items-center gap-4 mx-auto text-[10px] uppercase tracking-[0.4em] text-gold disabled:opacity-30"
                >
                  {loading ? 'Calculating Resonance...' : 'Enter the Archive'}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </button>
              </motion.form>
            ) : (
              <motion.div 
                key="result"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-8"
              >
                <div className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-4">Resonance Number</div>
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 2 }}
                  className="text-7xl md:text-8xl font-serif text-gold mb-6"
                >
                  {result.toLocaleString()}
                </motion.div>
                <p className="text-paper/60 text-sm max-w-md mx-auto">
                  Others felt this today. You are not singular in your silence. <br />
                  <span className="text-gold/40 mt-4 block italic">Text has been discarded. Frequency remains.</span>
                </p>
                <button 
                  onClick={() => {setResult(null); setThought('');}}
                  className="mt-12 text-[10px] uppercase tracking-[0.3em] text-white/20 hover:text-white transition-colors"
                >
                  Try another thought
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

const Ritual = () => {
  const stages = [
    { title: 'Write', desc: 'The daily ritual of unedited expression.', icon: MessageSquare },
    { title: 'Resonate', desc: 'Our engine identifies the semantic frequency of your entry.', icon: Activity },
    { title: 'Reflect', desc: 'A 48-hour cooling period for emotional clarity.', icon: Clock },
    { title: 'Connect', desc: 'A curated bridge to a singular matching soul.', icon: Users },
    { title: 'Reveal', desc: 'The gradual unveiling of identity through shared history.', icon: Eye },
  ];

  return (
    <section id="ritual" className="py-32 bg-dark">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-24">
          <span className="text-[10px] uppercase tracking-[0.3em] text-gold/60 mb-4 block">The Sequence</span>
          <h2 className="text-4xl md:text-5xl font-serif">The Ritual of Connection</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {stages.map((stage, i) => (
            <motion.div 
              key={stage.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="mb-8 flex items-center gap-4">
                <span className="text-xs font-mono text-gold/40">0{i + 1}</span>
                <div className="h-px flex-1 bg-white/5 group-hover:bg-gold/30 transition-colors" />
              </div>
              <stage.icon className="w-6 h-6 text-gold mb-6 opacity-40 group-hover:opacity-100 transition-opacity" />
              <h3 className="text-xl font-serif mb-4">{stage.title}</h3>
              <p className="text-xs text-paper/40 leading-relaxed">{stage.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Engineering = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: { x: number; y: number; vx: number; vy: number; size: number }[] = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < 50; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 2,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = 'rgba(197, 160, 89, 0.1)';
      ctx.fillStyle = 'rgba(197, 160, 89, 0.4)';

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener('resize', resize);
    resize();
    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <section id="engineering" className="py-32 px-8 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div className="relative h-[500px] glass rounded-sm overflow-hidden order-2 lg:order-1">
          <canvas ref={canvasRef} className="w-full h-full" />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="text-center">
              <div className="text-[10px] uppercase tracking-[0.5em] text-gold/40 mb-4">Semantic Vector</div>
              <div className="text-4xl font-serif text-gold">The Movement</div>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <span className="text-[10px] uppercase tracking-[0.3em] text-gold/60 mb-4 block">The Invisible Craft</span>
          <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
            The AI Mirror: <br /> Precision Engineering.
          </h2>
          <p className="text-paper/60 leading-relaxed mb-12 font-light">
            ECHO is not a chatbot. It is a precision instrument. We use high-dimensional semantic embeddings to strip identifying data while preserving the core emotional fingerprint. Like a Swiss watch movement, the complexity is hidden to ensure the outcome is perfect.
          </p>
          
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="w-10 h-10 rounded-full border border-gold/20 flex items-center justify-center shrink-0">
                <Lock className="w-4 h-4 text-gold" />
              </div>
              <div>
                <h4 className="text-sm uppercase tracking-widest text-gold mb-2">Zero-Knowledge Encryption</h4>
                <p className="text-xs text-paper/40">Your entries are encrypted client-side. We match frequencies, not content.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-10 h-10 rounded-full border border-gold/20 flex items-center justify-center shrink-0">
                <Cpu className="w-4 h-4 text-gold" />
              </div>
              <div>
                <h4 className="text-sm uppercase tracking-widest text-gold mb-2">Semantic Vectorization</h4>
                <p className="text-xs text-paper/40">40% Similarity, 35% Tone, 25% Need. A full emotional fingerprint.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-10 h-10 rounded-full border border-gold/20 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-4 h-4 text-gold" />
              </div>
              <div>
                <h4 className="text-sm uppercase tracking-widest text-gold mb-2">Safety Infrastructure</h4>
                <p className="text-xs text-paper/40">Budgeted $500,000 for safety protocols before the first user is onboarded. It is not optional.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ExpectedValue = () => {
  const data = [
    { day: 7, accuracy: 15 },
    { day: 30, accuracy: 45 },
    { day: 60, accuracy: 72 },
    { day: 90, accuracy: 88 },
    { day: 120, accuracy: 94 },
    { day: 180, accuracy: 98 },
  ];

  return (
    <section className="py-32 px-8 bg-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <span className="text-[10px] uppercase tracking-[0.3em] text-gold/60 mb-4 block">Compound Value</span>
          <h2 className="text-4xl md:text-5xl font-serif">The Archive Moat</h2>
          <p className="text-paper/40 mt-6 max-w-2xl mx-auto font-light">
            You cannot copy 180 days of a user's emotional history. The longer the archive, the more precise the resonance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 glass p-12 rounded-sm h-[400px]">
            <div className="text-[10px] uppercase tracking-widest text-white/20 mb-8">Match Accuracy vs. Archive Maturity (%)</div>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                <XAxis 
                  dataKey="day" 
                  stroke="rgba(255,255,255,0.3)" 
                  fontSize={10} 
                  tickFormatter={(val) => `Day ${val}`}
                />
                <YAxis stroke="rgba(255,255,255,0.3)" fontSize={10} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0A0A0A', border: '1px solid rgba(255,255,255,0.1)', color: '#F5F2ED' }}
                />
                <Line 
                  type="monotone" 
                  dataKey="accuracy" 
                  stroke="#C5A059" 
                  strokeWidth={2} 
                  dot={{ fill: '#C5A059', strokeWidth: 0 }} 
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          
          <div className="space-y-6">
            <div className="glass p-8 rounded-sm">
              <h4 className="text-gold text-xs uppercase tracking-widest mb-4">The 90-Day Threshold</h4>
              <p className="text-sm text-paper/60 leading-relaxed">At 90 days, the archive becomes an irreplaceable emotional autobiography. Matching accuracy exceeds 85%.</p>
            </div>
            <div className="glass p-8 rounded-sm">
              <h4 className="text-gold text-xs uppercase tracking-widest mb-4">The Existential Archive</h4>
              <p className="text-sm text-paper/60 leading-relaxed">A visual preview of your "Emotional Year"—the Spotify Wrapped for your soul.</p>
            </div>
            <div className="glass p-8 rounded-sm flex items-center justify-between group cursor-pointer">
              <span className="text-[10px] uppercase tracking-widest text-white/60">View Annual Teaser</span>
              <ArrowRight className="w-4 h-4 text-gold group-hover:translate-x-2 transition-transform" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer id="invitation" className="py-32 px-8 bg-black border-t border-white/5">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-24">
      <div className="max-w-md">
        <div className="text-3xl font-serif tracking-[0.2em] mb-8">ECHO</div>
        <p className="text-paper/40 text-sm leading-relaxed mb-12">
          ECHO is a private connection platform. We do not advertise. We do not sell data. We facilitate the recognition of the human soul through the medium of silence.
        </p>
        <div className="flex gap-8 text-[10px] uppercase tracking-widest text-white/30">
          <a href="#" className="hover:text-gold transition-colors">Privacy Protocol</a>
          <a href="#" className="hover:text-gold transition-colors">Terms of Silence</a>
          <a href="#" className="hover:text-gold transition-colors">Safety Report</a>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
        <div>
          <h4 className="text-gold text-[10px] uppercase tracking-[0.3em] mb-8">Partner Review</h4>
          <ul className="space-y-4 text-sm text-paper/60">
            <li className="hover:text-white cursor-pointer transition-colors">Institutional Access</li>
            <li className="hover:text-white cursor-pointer transition-colors">Founding Partner Inquiry</li>
            <li className="hover:text-white cursor-pointer transition-colors">Press Archive</li>
          </ul>
        </div>
        <div>
          <h4 className="text-gold text-[10px] uppercase tracking-[0.3em] mb-8">Office</h4>
          <p className="text-sm text-paper/60 leading-relaxed">
            Geneva, Switzerland <br />
            Private Client Suite 402
          </p>
        </div>
      </div>
    </div>
    <div className="max-w-7xl mx-auto mt-32 pt-8 border-t border-white/5 flex justify-between items-center text-[10px] uppercase tracking-[0.3em] text-white/20">
      <span>© 2026 ECHO Platform</span>
      <span>Designed in Geneva</span>
    </div>
  </footer>
);

// --- Main App ---

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!isLoaded) return null;

  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <LonelinessIndex />
      <Philosophy />
      <ResonanceSimulator />
      <Ritual />
      <Engineering />
      <ExpectedValue />
      <Footer />
      
      {/* Global Grain Overlay for texture */}
      <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
}
