import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 container mx-auto px-6">
      <div className="max-w-4xl mx-auto glass-panel p-8 md:p-12 rounded-3xl relative overflow-hidden">
        {/* Decorative Gradients */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-primary/20 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-purple-500/20 blur-[100px] rounded-full pointer-events-none" />

        <div className="grid md:grid-cols-2 gap-12 relative z-10">
          <div>
            <span className="text-primary font-mono text-sm tracking-wider uppercase mb-2 block">Get in Touch</span>
            <h2 className="text-4xl font-display font-bold mb-6">Let's Build the Future</h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Have a complex infrastructure challenge? Or just want to discuss the latest in cloud tech? My inbox is always open.
            </p>

            <div className="space-y-6">
              <a href="mailto:hello@cloudarch.dev" className="flex items-center gap-4 text-foreground hover:text-primary transition-colors group">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-primary/50 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold">Email Me</div>
                  <div className="text-muted-foreground">hello@cloudarch.dev</div>
                </div>
              </a>
              
              <div className="flex items-center gap-4 text-foreground group">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold">Socials</div>
                  <div className="flex gap-4 mt-1">
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">LinkedIn</a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">Twitter</a>
                    <a href="https://bsky.app" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">Bluesky</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <form className="space-y-4 bg-black/20 p-6 rounded-2xl border border-white/5" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label className="text-sm font-medium ml-1">Name</label>
              <Input placeholder="John Doe" className="bg-background/50 border-white/10 focus:border-primary/50 h-12" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium ml-1">Email</label>
              <Input placeholder="john@example.com" className="bg-background/50 border-white/10 focus:border-primary/50 h-12" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium ml-1">Message</label>
              <Textarea placeholder="Tell me about your project..." className="bg-background/50 border-white/10 focus:border-primary/50 min-h-[150px]" />
            </div>
            <Button className="w-full bg-primary text-primary-foreground hover:bg-cyan-400 h-12 text-lg font-medium">
              Send Message <Send className="ml-2 w-4 h-4" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
