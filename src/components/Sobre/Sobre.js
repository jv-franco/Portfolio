import React from "react";
import "./sobre.css";
const Sobre = () => {
  return (
    <div className="container-sobre">
      <div className="sobre">
        <div className="sobre-text">
          <h2>Olá, eu sou o João Vitor</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            imperdiet, lorem sed placerat rhoncus, neque nulla consequat massa,
            ut tristique magna nulla ac mauris. Integer vel convallis justo, sed
            vehicula odio. Vestibulum ac scelerisque eros, ut ornare lorem.
            Etiam eu risus non ante dapibus auctor vel id risus. Maecenas
            aliquam porttitor massa eu pretium. In hac habitasse platea
            dictumst. Praesent porta neque finibus, ultricies diam in, iaculis
            quam. Proin dapibus elit nec tellus vestibulum pharetra. Sed dictum
            nisi convallis
          </p>
        </div>
        <div className="sobre-img">
          <img src="https://apexensino.com.br/wp-content/uploads/2019/02/iStock-1017296544-1024x683-1024x640.jpg" />
        </div>
      </div>
      <button className="toContact">Entrar em Contato</button>
    </div>
  );
};

export default Sobre;
