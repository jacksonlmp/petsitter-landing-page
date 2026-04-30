import aboutAnaLauraImage from "../assets/images/about-ana-laura.jpg";
import cliente1Image from "../assets/images/Cliente 1.jpg";
import cliente2Image from "../assets/images/Cliente 2.jpg";
import cliente3Image from "../assets/images/Cliente 3.jpg";
import cliente4Image from "../assets/images/Cliente 4.jpg";
import cliente5Image from "../assets/images/Cliente 5.jpg";
import cliente6Image from "../assets/images/Cliente 6.jpg";
import cliente7Image from "../assets/images/Cliente 7.jpg";
import cliente8Image from "../assets/images/Cliente 8.jpg";
import cliente9Image from "../assets/images/Cliente 9.jpg";
import cliente10Image from "../assets/images/Cliente 10.jpg";
import review1Image from "../assets/images/reviews/Review-1.jpg";
import review2Image from "../assets/images/reviews/Review-2.jpg";
import fofuchoTesteImage from "../assets/images/Fofucho-teste.jpg";
import allAnimals from "../assets/images/all-animals.jpg";
import anaLaura1 from "../assets/images/analaura-1.jpg";

export const brand = {
  initials: "AL",
  name: "Ana Laura Petsitter",
};

export const navItems = [
  { label: "Inicio", href: "#home", icon: "home" },
  { label: "Sobre", href: "#about", icon: "about" },
  { label: "Serviços", href: "#services", icon: "services" },
  { label: "Clientes", href: "#gallery", icon: "clients" },
  { label: "Contato", href: "#contact", icon: "contact" },
];

export const heroContent = {
  title: ["Ana Laura", "Pet Sitter"],
  description:
    "Cuido do seu pet no conforto da sua casa, respeitando a rotina e enviando atualizações em tempo real para sua tranquilidade.",
  image: {
    src: allAnimals,
    alt: "Fofucho na imagem principal da landing page.",
  },
  actions: [
    { label: "Agendar pelo WhatsApp", href: "#contact", variant: "primary" },
    { label: "Como funciona o serviço", href: "#services", variant: "secondary" },
  ],
  metrics: [
    { value: "+3", label: "anos cuidando de pets com rotina, medicação e atenção individual" },
    { value: "📸", label: "fotos e vídeos durante toda a visita" },
    { value: "100%", label: "atendimento em casa, mantendo a rotina e o conforto" },
  ],
};

export const aboutContent = {
  title: "Quem sou eu?",
  description: [
    "Me chamo Ana Laura, sou estudante de Medicina Veterinária na UFAPE e apaixonada por animais. Tenho 5 gatos e 1 cachorro, e ao longo da convivência com eles e dos aprendizados na universidade, aprendi que cada animal é único e tem sua própria rotina, comportamento, tempo e espaço, que devem ser respeitados.",
    "Aqui, meus cuidados vão além do básico:",
  ],
  bulletPoints: [
    "Cada pet tem sua rotina, seu tempo e suas necessidades, e tudo isso é respeitado em cada visita.",
    "O atendimento é feito na casa do próprio pet, evitando estresse e mantendo o ambiente em que ele já se sente seguro.",
    "Durante o período, você recebe fotos e vídeos em tempo real, acompanhando de perto cada momento.",
    "Mais do que cuidar, a proposta é garantir tranquilidade para você e bem-estar para o seu pet.",
  ],
  image: {
    src: anaLaura1,
    alt: "Ana Laura na seção Sobre.",
  },
  tags: [
    { label: "Cachorro", icon: "dog" },
    { label: "Gato", icon: "cat" },
    { label: "Roedores", icon: "rabbit" },
    { label: "Pássaro", icon: "bird" },
    { label: "Galinha", icon: "chicken" },
  ],
  pillars: [
    {
      icon: "security",
      title: "Seguranca e confiança",
      text: "Cada visita segue uma rotina organizada, com atenção ao comportamento e às necessidades do seu pet.",
    },
    {
      icon: "care",
      title: "Carinho com responsabilidade",
      text: "Cuidado com carinho, respeitando o tempo, o comportamento e a individualidade de cada pet.",
    },
  ],
};

export const servicesContent = {
  title: "Escolha o cuidado ideal para o seu pet",
  items: [
    {
      icon: "walk",
      title: "Passeios para Pets",
      description:
        "Passeios seguros e personalizados para gastar energia, reduzir ansiedade e manter a rotina saudável.",
      accent: "light",
    },
    {
      icon: "home",
      title: "Visita Domiciliar",
      description:
        "Cuidado completo na casa do seu pet, com alimentação, higiene, companhia e atenção durante toda a visita.",
      accent: "primary",
    },

    {
      icon: "medical",
      title: "Medicamentos",
      description:
        "Aplicação de medicamentos conforme orientação, respeitando horários e necessidades do seu pet.",
      accent: "light",
    },
  ],
};

export const galleryContent = {
  title: "Nossos clientes",
  items: [
    {
      src: cliente1Image,
      alt: "Cliente 1 da Ana Laura Petsitter.",
    },
    {
      src: cliente2Image,
      alt: "Cliente 2 da Ana Laura Petsitter.",
    },
    {
      src: cliente3Image,
      alt: "Cliente 3 da Ana Laura Petsitter.",
    },
    {
      src: cliente4Image,
      alt: "Cliente 4 da Ana Laura Petsitter.",
    },
    {
      src: cliente5Image,
      alt: "Cliente 5 da Ana Laura Petsitter.",
    },
    {
      src: cliente6Image,
      alt: "Cliente 6 da Ana Laura Petsitter.",
    },
    {
      src: cliente7Image,
      alt: "Cliente 7 da Ana Laura Petsitter.",
    },
    {
      src: cliente8Image,
      alt: "Cliente 8 da Ana Laura Petsitter.",
    },
    {
      src: cliente9Image,
      alt: "Cliente 9 da Ana Laura Petsitter.",
    },
    {
      src: cliente10Image,
      alt: "Cliente 10 da Ana Laura Petsitter.",
    },

  ],
};

export const testimonialsContent = {
  title: "Feedbacks",
  items: [
    {
      src: review1Image,
      alt: "Depoimento 1 de cliente da Ana Laura Petsitter.",
      layout: "left",
    },
    {
      src: review2Image,
      alt: "Depoimento 2 de cliente da Ana Laura Petsitter.",
      layout: "right",
    },
  ],
};

export const timelineContent = {
  eyebrow: "Care timeline",
  title: "Processo claro, sem friccao e sem improviso.",
  description:
    "A jornada foi desenhada para transmitir confianca. Em vez de blocos pesados, a pagina usa respiracao, contraste tonal e uma trilha visual quente para guiar o olhar do tutor.",
  items: [
    "Briefing inicial para entender rotina, alimentacao, medicacao e sinais de estresse.",
    "Plano de cuidado com combinados claros, frequencia, acessos e atualizacoes.",
    "Acompanhamento com fotos, videos e observacoes para o tutor sentir seguranca real.",
  ],
};

export const contactContent = {
  eyebrow: "Vamos conversar",
  title: "Pronto para oferecer o melhor cuidado ao seu pet?",
  description:
    "Entre em contato para alinhar os detalhes do atendimento e garantir um cuidado tranquilo e bem organizado para o seu pet.",
  items: [
    { label: "WhatsApp", value: "(81) 99764-4628", icon: "whatsapp" },
    { label: "Instagram", value: "@anapetsitter.gus", icon: "instagram" },
  ],
  cta: {
    label: "Enviar mensagem no WhatsApp",
    href: "https://wa.me/558197644628",
  },
};

export const footerContent = {
  brandLine: "Ana Laura Petsitter",
  contact: [
    {
      label: "WhatsApp",
      value: "(81) 9764-4628",
      href: "https://wa.me/558197644628",
      icon: "whatsapp",
    },
    {
      label: "Email",
      value: "analaurasf2504@gmail.com",
      href: "mailto:analaurasf2504@gmail.com",
      icon: "email",
    },
    {
      label: "Instagram",
      value: "@anapetsitter.gus",
      href: "https://instagram.com/anapetsitter.gus",
      icon: "instagram",
    },
  ],
  links: navItems,
  legal: {
    copyright: "© 2026 Ana Laura Petsitter",
    developerLabel: "Desenvolvido por Jackson Lima",
    developerHref: "https://www.linkedin.com/in/jacksonlmp",
  },
};
