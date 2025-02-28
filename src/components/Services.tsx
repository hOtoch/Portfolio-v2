
import { Bot, Workflow, Database, Cpu, BrainCircuit, Cog, Lightbulb, PlugZap } from "lucide-react";
import { useState } from "react";

const services = [
  {
    icon: <Workflow className="h-10 w-10" />,
    title: "Automação de Processos",
    description:
      "Automatize fluxos de trabalho repetitivos, integrando aplicativos e sistemas para economizar tempo e reduzir erros.",
    details: [
      "Integração entre múltiplos sistemas",
      "Workflows automatizados personalizados",
      "Automação de entrada de dados",
      "Processamento de documentos inteligente",
      "Automação de relatórios e análises"
    ]
  },
  {
    icon: <Bot className="h-10 w-10" />,
    title: "Agentes de IA",
    description:
      "Desenvolvo assistentes inteligentes que realizam tarefas, respondem perguntas e aprendem com interações.",
    details: [
      "Chatbots personalizados",
      "Assistentes virtuais inteligentes",
      "Agentes com aprendizado contínuo",
      "Integração com plataformas existentes",
      "Assistentes de atendimento ao cliente"
    ]
  },
  {
    icon: <Database className="h-10 w-10" />,
    title: "Automação No-Code",
    description:
      "Crio soluções com plataformas No-Code como Zapier, Make, Bubble e Webflow para rápida implementação.",
    details: [
      "Desenvolvimento rápido de aplicações",
      "Automação via Zapier, Make (Integromat)",
      "Desenvolvimento com Bubble e Webflow",
      "Painéis de controle personalizados",
      "Sistemas CRM automatizados"
    ]
  },
  {
    icon: <Cpu className="h-10 w-10" />,
    title: "Automação com Código",
    description:
      "Desenvolvo automações avançadas usando Python, JavaScript e outras linguagens para necessidades específicas.",
    details: [
      "Scripts personalizados em Python",
      "Automação com JavaScript/Node.js",
      "Integração via APIs",
      "Web scraping e automação de navegadores",
      "Automação com RPA (Robotic Process Automation)"
    ]
  },
  {
    icon: <BrainCircuit className="h-10 w-10" />,
    title: "Sistemas Inteligentes",
    description:
      "Crio sistemas que utilizam machine learning para prever comportamentos e otimizar decisões.",
    details: [
      "Modelos de previsão e análise",
      "Sistemas de recomendação",
      "Detecção de anomalias",
      "Automação inteligente adaptativa",
      "Processamento de linguagem natural"
    ]
  },
  {
    icon: <Cog className="h-10 w-10" />,
    title: "Consultoria Técnica",
    description:
      "Ofereço consultoria especializada para identificar oportunidades de automação e implementação de IA.",
    details: [
      "Análise de processos existentes",
      "Identificação de oportunidades de automação",
      "Estratégia de transformação digital",
      "Consultoria em implementação de IA",
      "Otimização de processos de negócio"
    ]
  },
];

const Services = () => {
  const [activeService, setActiveService] = useState<number | null>(null);

  return (
    <section id="services" className="section-padding bg-soft-purple">
      <div className="container mx-auto">
        <div className="text-center mb-16 reveal">
          <span className="inline-block py-1 px-3 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Meus Serviços
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">
            Como posso ajudar seu negócio
          </h2>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            Ofereço soluções completas de automação e inteligência artificial para aumentar a eficiência e produtividade da sua empresa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`bg-background rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 card-hover reveal ${
                activeService === index ? 'ring-2 ring-primary' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setActiveService(index === activeService ? null : index)}
            >
              <div className="bg-primary/10 text-primary p-4 rounded-xl inline-block mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-foreground/80 mb-4">{service.description}</p>
              
              <div className={`grid gap-2 overflow-hidden transition-all duration-300 ${
                activeService === index ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0'
              }`}>
                <h4 className="font-semibold text-primary">Recursos inclusos:</h4>
                <ul className="space-y-2">
                  {service.details.map((detail, i) => (
                    <li key={i} className="flex items-start">
                      <Lightbulb className="h-5 w-5 text-primary shrink-0 mr-2" />
                      <span className="text-sm">{detail}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="mt-4 inline-flex items-center text-primary hover:text-primary/80 font-medium"
                >
                  <span>Saber mais</span>
                  <PlugZap className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
