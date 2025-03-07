
import { Mail, Phone, MapPin, Send, ArrowRight, Loader2 } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    
    try {
      const result = await emailjs.send(
        serviceID,  // EmailJS service ID
        templateID, // EmailJS template ID
        formData,
        publicKey   // EmailJS public key
      );
      
      if (result.text === 'OK') {
        toast({
          title: "Mensagem enviada!",
          description: "Obrigado pelo contato. Responderei em breve.",
          variant: "default",
        });
        
        // Reset form
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: ""
        });
      }
    } catch (error) {
      toast({
        title: "Erro!",
        description: "Não foi possível enviar sua mensagem. Tente novamente mais tarde.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding relative">
      <div className="absolute top-20 left-20 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 right-20 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto">
        <div className="text-center mb-16 reveal">
          <span className="inline-block py-1 px-3 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Contato
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">
            Vamos trabalhar juntos
          </h2>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            Entre em contato para discutirmos como posso ajudar a transformar seu negócio com automação e inteligência artificial.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="reveal">
            <div className="bg-background rounded-xl shadow-lg p-8 h-full">
              <h3 className="text-2xl font-bold mb-6">Entre em contato</h3>
              <p className="text-foreground/80 mb-8">
                Preencha o formulário e entrarei em contato o mais rápido possível. Estou ansioso para ouvir sobre seu projeto.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="bg-primary/10 p-3 rounded-full text-primary mr-4">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-sm text-foreground/70">Email</h4>
                    <p className="font-medium">otochdev@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-primary/10 p-3 rounded-full text-primary mr-4">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-sm text-foreground/70">Telefone</h4>
                    <p className="font-medium">+55 (27) 998046435</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-primary/10 p-3 rounded-full text-primary mr-4">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-sm text-foreground/70">Localização</h4>
                    <p className="font-medium">Vitória - ES, Brasil</p>
                  </div>
                </div>
              </div>
              
              
            </div>
          </div>
          
          <div className="reveal">
            <form onSubmit={handleSubmit} className="bg-background rounded-xl shadow-lg p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring transition-colors"
                    placeholder="Seu nome"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring transition-colors"
                    placeholder="Seu email"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Assunto
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring transition-colors"
                  required
                >
                  <option value="">Selecione um assunto</option>
                  <option value="Automação">Automação</option>
                  <option value="Agentes de IA">Agentes de IA</option>
                  <option value="Consultoria">Consultoria</option>
                  <option value="Orçamento">Orçamento</option>
                  <option value="Outro">Outro</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring transition-colors"
                  placeholder="Descreva seu projeto ou necessidade"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="button-gradient w-full py-3 px-6 rounded-lg text-white font-medium flex items-center justify-center space-x-2 shine"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    <span>Enviando...</span>
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    <span>Enviar Mensagem</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-20 text-center reveal">
          <h3 className="text-2xl font-bold mb-6">Pronto para transformar seu negócio?</h3>
          <a
            href="#services"
            className="inline-flex items-center gap-2 button-gradient px-8 py-4 rounded-lg text-white font-medium shadow-lg hover:shadow-xl transition-all shine"
          >
            <span>Explore Meus Serviços</span>
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
