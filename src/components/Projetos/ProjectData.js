import barbeariaImg from "../../images/barbearia.png";
import agcar from "../../images/AgCar.png";
import barbeariaVideo from "../../videos/barbearia.mp4";
import portfolio from "../../images/portfolio.png";
import portfoliooVideo from "../../videos/portfolio.mp4";
import pokenext from "../../images/pokenext.png";
import pokenextvideo from "../../videos/pokenext.mp4";
import footbr from "../../images/footbr.png";
import footbrvideo from "../../videos/footbrvideo.mp4";

const Data = [
  {
    name: "FootBR",
    img: footbr,
    id: 5,
    desc: "Para desenvolver o site, escolhi utilizar as tecnologias NextJS e Tailwind CSS, que me permitiram criar um site com visual elegante e moderno. Para realizar as requisições à API-futebol, utilizei a biblioteca Axios, que facilitou muito o processo de obtenção e exibição dos dados. O projeto permite que o usuário visualize os resultados e classificações dos dois campeonatos mais importantes do país, o Campeonato Brasileiro e a Copa do Brasil. Além disso, a aplicação exibe apenas a rodada atual do Campeonato Brasileiro, o que torna a experiência do usuário mais dinâmica e atualizada.",
    demo: "https://foot-br.vercel.app",
    code: "https://github.com/jv-franco/FootBR",
    video: footbrvideo,
    detailsData: "19/04/2023",
  },
  {
    name: "PokeNext",
    img: pokenext,
    id: 4,
    desc: "Criei uma Pokedex com o framework NextJs, que permite aos usuários buscar e visualizar informações sobre diferentes pokemons. Adicionei uma barra de pesquisa na interface do usuário, permitindo que o usuário busque um pokemon digitando seu nome. Para exibir imagens dos pokemons, usei uma API que retorna URLs de imagens de alta qualidade. Em vez de usar CSS Modules, optei por usar o framework Tailwind para estilizar o aplicativo, tornando o processo mais rápido e fácil. No geral, a Pokedex é uma ferramenta útil para os fãs de Pokemon, com uma interface fácil de usar e estilo agradável.",
    demo: "https://jv-franco.github.io/pokenext/",
    code: "https://github.com/jv-franco/pokenext",
    video: pokenextvideo,
    detailsData: "01/04/2023",
  },
  {
    name: "Portfólio",
    img: portfolio,
    id: 3,
    desc: "Olá, meu portfólio foi desenvolvido com ReactJS, HTML e CSS. Eu me sinto muito orgulhoso do trabalho que fiz e acho que o resultado final ficou muito elegante e atraente. Com o ReactJS, eu pude criar uma interface de usuário interativa e responsiva que ajuda a destacar meus projetos. Além disso, o HTML e o CSS foram essenciais para estruturar e estilizar meu portfólio de maneira profissional. Porém, eu estou sempre buscando melhorar como desenvolvedor e isso significa que meu portfólio pode sofrer mudanças no futuro. À medida que eu aprimoro minhas habilidades em ReactJS, HTML e CSS, pretendo adicionar novos recursos e aprimorar a aparência e a funcionalidade do meu portfólio. Por isso, eu estou sempre aberto a feedback e sugestões de como posso melhorar meu portfólio e me tornar um desenvolvedor ainda mais habilidoso.",
    demo: "",
    code: "https://github.com/jv-franco/portfolio",
    video: portfoliooVideo,
    detailsData: "22/03/2023",
  },
  {
    name: "Barbearia Allianz",
    img: barbeariaImg,
    id: 1,
    desc: "O meu primeiro projeto foi essa landing page, utilizando apenas HTML, CSS e JavaScript e nela apresenta informações importantes sobre a Allianz Barbearia, como os serviços oferecidos, localização e horário de atendimento. O uso adequado de imagens, ícones e cores complementares cria uma identidade visual forte e coesa para a marca. A navegação na landing page é fácil e intuitiva, com menus bem definidos e botões que levam o usuário para as informações que deseja.",
    demo: "https://jv-franco.github.io/AllianzBarbearia/",
    code: "https://github.com/jv-franco/AllianzBarbearia",
    video: barbeariaVideo,
    detailsData: "17/10/2022",
  },
  {
    name: "Funilaria AGCAR",
    img: agcar,
    id: 2,
    desc: "A landing page da Funilaria AG Car é uma página simples e elegante, construída usando React e CSS. A página começa com uma seção Sobre nós, que apresenta um breve resumo da empresa e sua missão .No geral, a página de aterrissagem da Funilaria AG Car é simples e direta ao ponto, oferecendo aos clientes todas as informações importantes de forma organizada e fácil de ler. O design limpo e profissional e a navegação intuitiva tornam a página atraente e agradável aos olhos dos clientes.",
    demo: "",
    code: "https://github.com/jv-franco/agcar",
    video: "",
    detailsData: "02/02/2023",
  },
];

export default Data;
