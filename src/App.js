import React, { useState, useEffect } from 'react';


function Header() {
  return (
    <section className="header">
      <div className="h-esquerdo">
        <img src="/cpt-logo.png" />
        <span className="h-texto">CIÊNCI<div className="h-a">A</div></span>
        <img className='barras' src='barras.png'/>
      </div>
      <div className="h-direito">
        <a>Notícias</a>
        <a>Startups</a>
        <a>Portfólio</a>
        <a>Contatos</a>
        <img src="/mundo.png" />
        <img src="/br.png" />
      </div>
    </section>
  );
}

function News() {
  return (
    <section className="news">
      <div className="news-main">
        <div className="seta1">
          <img src="/seta-n.png" />
        </div>
        <div className="news-colum">
          <div className="news-texto">
            <h1>TITULO</h1>
            <h2>Texto</h2>
            <h3>Saiba mais</h3>
          </div>
          <div className="contadores">
            <div className="contador"></div>
            <div className="contador"></div>
          </div>
        </div>
        <div className="seta2">
          <img src="/seta-n.png" />
        </div>
      </div>
    </section>
  )
}

function Startups() {
  return (
    <section className="startups">
      <div className="st1">
        <div className="st1-1">
          <h1 className="st1text">Startups</h1>
          <div className="st1red"><img src="/rectangle.png" /></div>
        </div>
        <div><h2>Conheça um pouco das nossas conquistas e ambições</h2></div>
      </div>
      <div className="st2">
        <div className="logo-s"><img src="logos.png" /></div>
        <div className="logo-s"><img src="logos.png" /></div>
        <div className="logo-s"><img src="logos.png" /></div>
      </div>
      <div className="st3">
        <div className="st3-esq">
          <h1>Nome</h1>
          <h2>Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Aenean molestie, dolor.</h2>
          <h3>Saiba Mais</h3>
          <div className="contadores">
            <div className="contador"></div>
            <div className="contador"></div>
          </div>
        </div>
        <div className="st3-dir">
          <img src="seta-n.png" />
        </div>
      </div>
    </section>
  )
}

function Portfolio() {
  return (
    <section className="portfolio">
      <div className="port-fundo">
        <div className="port-text">
          <h1>Portfólio</h1>
          <h2>Conheça nossos trabalhos</h2>
        </div>
      </div>
    </section>
  )
}

function Conheca() {
  return (
    <section className="conheca">
      <div className="conheca-esq">
        <div className="conheca-img1">
          <img src="/rectangle3.png" />
        </div>
        <div className="conheca-img2">
          <img src="/rectangle2.png" />
        </div>
      </div>
      <div className="conheca-dir">
        <h2>Venha conhecer o</h2>
        <h1>Ciência para Todos</h1>
        <h3>Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Aenean molestie, dolor.</h3>
        <button>Agende sua Visita</button>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <section className="footer">
      <div className="footer-esq">
        <div className="fone">
          <img src="mao.png" />
          <div className="fone-text">
            <h3>
              Estamos em:
            </h3>
            <h2>
              +55 (41) 9999-9999
            </h2>
          </div>
        </div>
        <div className="place">
          <img src="local.png" />
          <span>Nosso espaço físico</span>
        </div>
      </div>
      <div className="footer-dir">
        <div className="redes-text">
          <h1>Conheça as nossas <span className="redes">redes sociais</span></h1>
        </div>
        <div className="redes-img">
          <img src="fb.png" />
          <img src="ig.png" />
          <img src="in.png" />
        </div>
      </div>
    </section>
  )
}

function App() {
  return (
    <div>
      <Header />
      <News />
      <Startups />
      <Portfolio />
      <Conheca />
      <Footer />
    </div>
  );
}

export default App;
