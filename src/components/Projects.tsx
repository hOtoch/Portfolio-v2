import { Eye, Github, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const projects = [
  {
    title: "Agente vendedor de livros (Book Keeper)",
    category: "Agentes de IA",
    description: "Agente de IA que simula um vendedor de livros, capaz de responder perguntas e fornecer informações sobre os livros disponíveis.",
    image: "img/book_keeper.png",
    link: "https://youtube.com/shorts/d0pBATeQuAE?feature=share",
    tech: ["n8n", "OpenAI"]
  },
  {
    title: "Dashboard Interativo Com Controle de Acesso",
    category: "Automação de Processos",
    description: "Projeto desenvolvido para a ROI Investimentos, com o objetivo de fornecer uma visão geral dos investimentos e controle de acesso para diferentes usuários",
    image: "img/dashboard.png",
    link: "https://github.com/hOtoch/Dashboard_Roi_Investimentos",
    tech: ["Streamlit", "Pandas", "Flask", "Angular","PostgreSQL"]
  },
  {
    title: "Varredor de Vagas",
    category: "Automação com Código",
    description: "Um scraper que busca vagas de emprego no site da Indeed de acordo com as palavras-chave fornecidas",
    image: "img/vagas.png",
    link: "https://github.com/hOtoch/varredor_de_vagas",
    tech: ["Scraper", "Scrapy", "PySimpleGUI"]
  },
  {
    title: "Bot Automatizador de Apostas",
    category: "Automação com Código",
    description: "Robô desenvolvido para automatizar apostas em um site de cassino de acordo com uma estratégia definida pelo cliente.",
    image: "img/bot_aposta.PNG",
    link: "https://github.com/hOtoch/Bot_Automatizador_de_apostas",
    tech: ["PyAutoGUI", "Tkinter", "CxFreeze"]
  },
  {
    title: "Automação do Notion",
    category: "Automação com Código",
    description: "Sistema inteligente para verificação, classificação e notificação de leads de acordo com a data do último contato feito com eles",
    image: "img/notion.jpg",
    link: "https://github.com/hOtoch/Automacao-Notion",
    tech: ["Notion API", "Slack API", "AWS", "Python"]
  },
];

const Projects = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const checkSize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      
      if (window.innerWidth < 640) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    checkSize();
    window.addEventListener('resize', checkSize);
    return () => window.removeEventListener('resize', checkSize);
  }, []);

  const nextSlide = () => {
    if (currentIndex < projects.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setCurrentIndex(0); // Loop back to start
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    } else {
      setCurrentIndex(projects.length - itemsPerView); // Loop to end
    }
  };

  const handleCardClick = (index: number) => {
    setActiveProject(activeProject === index ? null : index);
  };

  const slideStyle = {
    transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
    width: `${(projects.length * 100) / itemsPerView}%`,
    display: 'flex',
  };

  return (
    <section id="projects" className="section-padding relative">
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto">
        <div className="text-center mb-16 reveal">
          <span className="inline-block py-1 px-3 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Meus Projetos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">
            Projetos Recentes
          </h2>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            Confira alguns dos meus trabalhos de automação e inteligência artificial que entregaram resultados impressionantes para os clientes.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div 
              ref={slideRef}
              className="transition-transform duration-500 ease-in-out"
              style={slideStyle}
            >
              {projects.map((project, index) => (
                <div 
                  key={index} 
                  className="px-3"
                  style={{ flex: `0 0 ${100 / itemsPerView}%` }}
                >
                  <div 
                    className={`bg-background rounded-xl overflow-hidden shadow-lg transition-all duration-300 h-full ${
                      activeProject === index ? 'ring-2 ring-primary' : ''
                    }`}
                    onClick={() => handleCardClick(index)}
                  >
                    <div className="relative overflow-hidden group">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div className="p-4">
                          <span className="inline-block py-1 px-2 bg-primary/80 text-white rounded text-xs font-medium mb-2">
                            {project.category}
                          </span>
                          <h3 className="text-white text-lg font-bold">{project.title}</h3>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-5">
                      <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                      <p className="text-foreground/80 text-sm mb-4">{project.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech, i) => (
                          <span 
                            key={i} 
                            className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex justify-between">
                        <a 
                          href={project.link} 
                          className="inline-flex items-center text-primary hover:text-primary/80 text-sm font-medium"
                        >
                          <Eye className="mr-1 h-4 w-4" />
                          <span>Visualizar</span>
                        </a>
                        
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button 
            onClick={prevSlide}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2 z-10 bg-background rounded-full p-2 shadow-lg hover:bg-primary/10 transition-colors duration-300"
            aria-label="Previous project"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2 z-10 bg-background rounded-full p-2 shadow-lg hover:bg-primary/10 transition-colors duration-300"
            aria-label="Next project"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
        
        
        
        <div className="text-center mt-12">
          <a 
            href="#contact" 
            className="inline-block button-gradient px-6 py-3 rounded-lg text-white font-medium shadow-lg hover:shadow-xl transition-all shine"
          >
            Inicie um Projeto
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
