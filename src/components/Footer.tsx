
import { Heart, Github, Linkedin, Twitter, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="pt-16 pb-8 bg-soft-purple relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          <div className="md:col-span-5 space-y-5">
            <Link to="/" className="inline-block">
              <h3 className="text-2xl font-bold text-gradient mb-2">Otoch</h3>
            </Link>
            <p className="text-foreground/80 max-w-md">
              Transformando negócios através de automação inteligente e agentes de IA. 
              Soluções personalizadas para impulsionar a eficiência do seu negócio.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/hOtoch"
                className="bg-background p-2 rounded-full text-foreground/70 hover:text-primary transition-colors"
                aria-label="Github"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/hugootoch/"
                className="bg-background p-2 rounded-full text-foreground/70 hover:text-primary transition-colors"
                aria-label="Linkedin"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            
              <a
                href="https://www.instagram.com/hugootoch/"
                className="bg-background p-2 rounded-full text-foreground/70 hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="md:col-span-3 md:col-start-7">
            <h4 className="font-bold text-lg mb-4">Links Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#home"
                  className="text-foreground/80 hover:text-primary transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#about"
                  className="text-foreground/80 hover:text-primary transition-colors"
                >
                  Sobre Mim
                </a>
              </li>
              <li>
                <a 
                  href="#services"
                  className="text-foreground/80 hover:text-primary transition-colors"
                >
                  Serviços
                </a>
              </li>
              <li>
                <a 
                  href="#projects"
                  className="text-foreground/80 hover:text-primary transition-colors"
                >
                  Projetos
                </a>
              </li>
              <li>
                <a 
                  href="#contact"
                  className="text-foreground/80 hover:text-primary transition-colors"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-4">
            <h4 className="font-bold text-lg mb-4">Receba Novidades</h4>
            <p className="text-foreground/80 mb-4">
              Inscreva-se para receber atualizações sobre os últimos projetos e dicas de automação.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Seu email"
                className="flex-1 px-4 py-2 rounded-l-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring transition-colors"
                required
              />
              <button
                type="submit"
                className="button-gradient px-4 py-2 rounded-r-lg text-white font-medium"
              >
                Inscrever
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-foreground/70 text-sm">
              © {currentYear} Todos os direitos reservados.
            </p>
            <div className="flex items-center mt-4 md:mt-0">
              <span className="text-foreground/70 text-sm flex items-center">
                Feito com <Heart className="h-4 w-4 mx-1 text-red-500" /> por Hugo Otoch
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
