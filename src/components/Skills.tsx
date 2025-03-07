
import { useState, useEffect } from "react";
import { Code, Server, Database, Bot, Braces, Cpu, GitBranch, Workflow } from "lucide-react";

const skillCategories = [
  {
    name: "Linguagens",
    icon: <Code className="h-5 w-5" />,
    skills: [
      { name: "Python", level: 90 },
      { name: "JavaScript", level: 75 },
      { name: "TypeScript", level: 70 },
      { name: "C", level: 65 },
      { name: "Java", level: 50 }
    ]
  },
  {
    name: "Automação",
    icon: <Workflow className="h-5 w-5" />,
    skills: [
      { name: "Selenium", level: 90 },
      { name: "PyAutoGUI", level: 87 },
      { name: "Scrapy", level: 80 },
    ]
  },
  {
    name: "No-Code",
    icon: <Cpu className="h-5 w-5" />,
    skills: [
      { name: "n8n", level: 80 },
      { name: "Make/Integromat", level: 80 },
      { name: "Notion", level: 65 },
    ]
  },
  {
    name: "IA & ML",
    icon: <Bot className="h-5 w-5" />,
    skills: [
      { name: "OpenAI API", level: 90 },
      { name: "DeepSeek API", level: 80 },
      { name: "TensorFlow", level: 60 },
      { name: "PyTorch", level: 55 },
    ]
  },
  {
    name: "Backend",
    icon: <Server className="h-5 w-5" />,
    skills: [
      { name: "FastAPI", level: 85 },
      { name: "Flask", level: 90 },
      { name: "Django", level: 75 },
      { name: "NodeJS", level: 80 },
      { name: "Spring", level: 60 }
    ]
  },
  {
    name: "Dados",
    icon: <Database className="h-5 w-5" />,
    skills: [
      { name: "SQL", level: 90 },
      { name: "MongoDB", level: 72 },
      { name: "Pandas", level: 85 },
      { name: "PostgreSQL", level: 80 },
    ]
  }
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [animated, setAnimated] = useState<boolean[]>([]);

  useEffect(() => {
    // Reset animation state when changing category
    const newAnimated = skillCategories[activeCategory].skills.map(() => false);
    setAnimated(newAnimated);

    // Trigger animation sequentially
    skillCategories[activeCategory].skills.forEach((_, index) => {
      setTimeout(() => {
        setAnimated(prev => {
          const newState = [...prev];
          newState[index] = true;
          return newState;
        });
      }, 100 * index);
    });
  }, [activeCategory]);

  return (
    <section id="skills" className="section-padding bg-soft-purple">
      <div className="container mx-auto">
        <div className="text-center mb-16 reveal">
          <span className="inline-block py-1 px-3 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Minhas Habilidades
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">
            Conhecimentos Técnicos
          </h2>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            Domino diversas tecnologias e ferramentas para criar soluções de automação e IA personalizadas e eficientes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1 reveal">
            <div className="bg-background rounded-xl p-6 shadow-lg h-full">
              <h3 className="text-xl font-bold mb-4">Categorias</h3>
              <div className="space-y-2">
                {skillCategories.map((category, index) => (
                  <button
                    key={index}
                    className={`w-full text-left p-3 rounded-lg transition-all duration-300 flex items-center ${
                      activeCategory === index
                        ? "bg-primary text-white"
                        : "bg-secondary hover:bg-primary/10"
                    }`}
                    onClick={() => setActiveCategory(index)}
                  >
                    <span className={`mr-3 ${activeCategory === index ? "text-white" : "text-primary"}`}>
                      {category.icon}
                    </span>
                    <span>{category.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="md:col-span-2 reveal">
            <div className="bg-background rounded-xl p-6 shadow-lg h-full">
              <div className="flex items-center mb-6">
                <span className="bg-primary/10 p-2 rounded-full text-primary mr-3">
                  {skillCategories[activeCategory].icon}
                </span>
                <h3 className="text-xl font-bold">
                  {skillCategories[activeCategory].name}
                </h3>
              </div>

              <div className="space-y-6">
                {skillCategories[activeCategory].skills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-foreground/70">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-purple-500 to-purple-700 rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: animated[index] ? `${skill.level}%` : "0%",
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 reveal">
          <div className="bg-background rounded-xl p-6 shadow-lg text-center">
            <div className="bg-primary/10 text-primary p-4 rounded-full inline-block mb-4">
              <Code className="h-8 w-8" />
            </div>
            <h3 className="text-lg font-bold mb-2">Desenvolvimento</h3>
            <p className="text-foreground/80 text-sm">
              Desenvolvimento de soluções personalizadas com diversas linguagens de programação.
            </p>
          </div>
          
          <div className="bg-background rounded-xl p-6 shadow-lg text-center">
            <div className="bg-primary/10 text-primary p-4 rounded-full inline-block mb-4">
              <Bot className="h-8 w-8" />
            </div>
            <h3 className="text-lg font-bold mb-2">Inteligência Artificial</h3>
            <p className="text-foreground/80 text-sm">
              Criação de sistemas inteligentes e agentes de IA para automatizar tarefas complexas.
            </p>
          </div>
          
          <div className="bg-background rounded-xl p-6 shadow-lg text-center">
            <div className="bg-primary/10 text-primary p-4 rounded-full inline-block mb-4">
              <Workflow className="h-8 w-8" />
            </div>
            <h3 className="text-lg font-bold mb-2">Automação</h3>
            <p className="text-foreground/80 text-sm">
              Automação de processos e integração entre diferentes sistemas e aplicativos.
            </p>
          </div>
          
          <div className="bg-background rounded-xl p-6 shadow-lg text-center">
            <div className="bg-primary/10 text-primary p-4 rounded-full inline-block mb-4">
              <Database className="h-8 w-8" />
            </div>
            <h3 className="text-lg font-bold mb-2">Gestão de Dados</h3>
            <p className="text-foreground/80 text-sm">
              Análise, processamento e visualização de dados para insights valiosos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
