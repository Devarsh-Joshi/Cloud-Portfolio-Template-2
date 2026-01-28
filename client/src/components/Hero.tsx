import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useState, useRef } from "react";
// @ts-ignore
import * as random from "maath/random/dist/maath-random.esm";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Cloud, Server, Globe, Terminal, Layers } from "lucide-react";

import heroCloud from "../assets/hero-cloud.png";

function StarField(props: any) {
  const ref = useRef<any>();
  const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.5 }));

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#06b6d4" // Cyan-500
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <StarField />
        </Canvas>
      </div>

      <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-mono tracking-wider">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            SYSTEM ONLINE
          </div>
          
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight">
            Architecting <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 via-blue-500 to-purple-600">
              The Digital Sky
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
            I design scalable, resilient, and secure cloud infrastructure. Turning complex distributed systems into seamless experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-cyan-400 text-lg h-12 px-8 cursor-pointer"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              data-testid="button-view-projects"
            >
              View Projects <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/10 hover:bg-white/5 text-lg h-12 px-8 cursor-pointer"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              data-testid="button-contact-me"
            >
              Contact Me
            </Button>
          </div>

          <div className="pt-8 flex items-center gap-8 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Cloud className="w-5 h-5 text-primary" />
              <span>AWS Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <Server className="w-5 h-5 text-purple-500" />
              <span>DevOps Pro</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-blue-500" />
              <span>Distributed Systems</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative w-full aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 bg-linear-to-tr from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" />
            <img 
              src={heroCloud} 
              alt="Cloud Architecture Abstract" 
              className="relative z-10 w-full h-full object-contain drop-shadow-[0_0_30px_rgba(6,182,212,0.3)]"
            />
            
            {/* Floating Cards */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute top-10 -right-10 glass-panel p-4 rounded-xl flex items-center gap-3 z-20"
            >
              <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center text-green-400">
                <Terminal size={20} />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Uptime</div>
                <div className="font-mono font-bold text-green-400">99.99%</div>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 20, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-10 -left-10 glass-panel p-4 rounded-xl flex items-center gap-3 z-20"
            >
              <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400">
                <Layers size={20} />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Deployments</div>
                <div className="font-mono font-bold text-foreground">Active</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
