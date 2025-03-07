
import { ArrowDown, Bot, Cpu, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[100vh] flex items-center section-padding overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] rounded-full bg-purple-500/10 dark:bg-purple-500/5 blur-3xl -z-10 animate-spin-slow"></div>
      
      <div className="container mx-auto">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left animate-fade-in">
            <span className="inline-block py-1 px-3 bg-primary/10 text-primary rounded-full text-sm font-medium">
              Especialista em Automação e IA
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Transforme sua empresa com <span className="text-gradient">Automação</span> e <span className="text-gradient">Inteligência Artificial</span>
            </h1>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto lg:mx-0">
              Desenvolvo soluções personalizadas que automatizam processos e implementam agentes inteligentes para otimizar operações e impulsionar resultados.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start pt-4">
              <a 
                href="#services" 
                className="button-gradient px-6 py-3 rounded-lg text-white font-medium shadow-lg hover:shadow-xl transition-all shine"
              >
                Meus Serviços
              </a>
              <a 
                href="#contact" 
                className="px-6 py-3 rounded-lg border border-primary/30 hover:border-primary/60 text-foreground font-medium transition-all shine"
              >
                Entre em Contato
              </a>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 relative">
            <div className="relative aspect-square max-w-[500px] mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-purple-700/20 dark:from-purple-500/10 dark:to-purple-700/10 rounded-full animate-pulse"></div>
              
              <div className="absolute top-10 left-10 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg animate-float">
                <Bot className="h-8 w-8 text-purple-600" />
                <span className="block mt-1 text-sm font-medium">Agentes IA</span>
              </div>
              
              <div className="absolute bottom-20 left-0 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg animate-float" style={{ animationDelay: '0.5s' }}>
                <Cpu className="h-8 w-8 text-purple-600" />
                <span className="block mt-1 text-sm font-medium">Automação</span>
              </div>
              
              <div className="absolute top-1/4 right-0 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg animate-float" style={{ animationDelay: '1s' }}>
                <Zap className="h-8 w-8 text-purple-600" />
                <span className="block mt-1 text-sm font-medium">Eficiência</span>
              </div>
              
              <div className="h-full w-full flex items-center justify-center">
                <div className="relative w-[70%] aspect-square bg-gradient-to-br from-purple-400 to-purple-700 dark:from-purple-500 dark:to-purple-800 rounded-full shadow-xl glow after:h-full after:w-full after:top-0 after:left-0 after:rounded-full animate-pulse" style={{ animationDuration: '4s' }}>
                  <div className="absolute inset-4 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center">
                    <img 
                      src="../../public/img/robo.jpeg" 
                      alt="AI and Automation" 
                      className="rounded-full object-cover h-full w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" aria-label="Rolar para baixo">
            <ArrowDown className="w-6 h-6 text-foreground/70" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
