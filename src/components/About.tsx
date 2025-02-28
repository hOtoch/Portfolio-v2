
import { User, Briefcase, Clock, Globe, Code, Cpu } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-padding relative">
      <div className="absolute top-1/3 right-0 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/3 left-0 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto">
        <div className="text-center mb-16 reveal">
          <span className="inline-block py-1 px-3 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Sobre Mim
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">
            Quem sou eu e o que faço
          </h2>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            Combinando criatividade e tecnologia para criar soluções de automação e inteligência artificial que transformam negócios.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative reveal">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] glow after:w-full after:h-1/2 after:bottom-0 after:left-0">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                alt="Desenvolvedor trabalhando"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 glass-morphism p-4 rounded-lg max-w-xs">
              <div className="flex items-center gap-3">
                <div className="bg-primary/20 p-2 rounded-full">
                  <Code className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Programador dedicado</h4>
                  <p className="text-sm text-foreground/70">Especialista em automação e IA</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6 reveal">
            <h3 className="text-2xl font-bold">Profissional apaixonado por automação e desenvolvimento de soluções inteligentes</h3>
            <p className="text-foreground/80">
              Com experiência em criar automações tanto em código quanto no-code, ajudo empresas a otimizar processos, economizar tempo e aumentar a produtividade. Especializo-me em desenvolver agentes de IA personalizados que se adaptam às necessidades específicas de cada cliente.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <div className="bg-primary/20 p-2 rounded-full">
                  <Briefcase className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-foreground/70">Experiência</p>
                  <p className="font-medium">+5 anos</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-primary/20 p-2 rounded-full">
                  <Globe className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-foreground/70">Clientes</p>
                  <p className="font-medium">Globais</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-primary/20 p-2 rounded-full">
                  <Cpu className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-foreground/70">Automações</p>
                  <p className="font-medium">Customizadas</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-primary/20 p-2 rounded-full">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-foreground/70">Suporte</p>
                  <p className="font-medium">24/7</p>
                </div>
              </div>
            </div>
            <a 
              href="#contact" 
              className="inline-block button-gradient px-6 py-3 rounded-lg text-white font-medium shadow-lg hover:shadow-xl transition-all shine"
            >
              Entre em Contato
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
