import Html from "../../images/html.svg";
import CSS from "../../images/css.svg";
import ReactLogo from "../../images/React-icon.svg";
import JS from "../../images/javascript.svg";
import GitIcon from "../../images/Git_icon.svg";
import Next from "../../images/Nextjs.svg";
import Tailwind from "../../images/Tailwind.svg";

const HabilityData = [
  {
    name: "HTML5",
    img: Html,
    desc: "HTML (Linguagem de Marcação de HiperTexto) é o bloco de construção mais básico da web. Define o significado e a estrutura do conteúdo da web.",
    id: 1,
  },
  {
    name: "CSS3",
    img: CSS,
    desc: "CSS é chamado de linguagem Cascading Style Sheet e é usado para estilizar elementos escritos em uma linguagem de marcação como HTML. ",
    id: 2,
  },
  {
    name: "JavaScript",
    img: JS,
    desc: "JavaScript é uma linguagem de programação versátil para desenvolvimento web, adicionando interatividade e dinamicidade em sites e aplicativos, executando em ambos lados - cliente e servidor.",
    id: 3,
  },
  {
    name: "REACT",
    img: ReactLogo,
    desc: "O React é uma popular biblioteca JavaScript usada para construir interfaces de usuário (IU), com excelente resposta ao usuário através de um novo método de renderização de sites.",
    id: 4,
  },
  {
    name: "GIT",
    img: GitIcon,
    desc: "Git é um sistema de controle de versão de código fonte, usado para gerenciar o código de projetos e facilitar a colaboração de múltiplos desenvolvedores.",
    id: 5,
  },
  {
    name: "TAILWIND",
    img: Tailwind,
    desc: "Tailwind é um framework CSS popular que simplifica a estilização da interface do usuário com classes pré-definidas, economizando tempo e recursos no desenvolvimento de aplicativos web.",
    id: 6,
  },
  {
    name: "NEXTJS",
    img: Next,
    desc: "Next.js é um framework JavaScript popular para aplicativos web React, que permite aplicativos escaláveis e de alto desempenho, sendo uma opção popular para projetos complexos.",
    id: 7,
  },
];

export default HabilityData;
