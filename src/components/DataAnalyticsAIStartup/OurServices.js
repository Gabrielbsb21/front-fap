import React from "react";
import { Link } from "gatsby";
import starIcon from "../../images/star-icon.png";
import icon1 from "../../images/services/service-icon1.png";
import icon2 from "../../images/services/service-icon2.png";
import icon3 from "../../images/services/service-icon3.png";
import icon4 from "../../images/services/service-icon4.png";
import icon5 from "../../images/services/service-icon5.png";
import icon6 from "../../images/services/service-icon6.png";
import shape1 from "../../images/services/service-shape1.png";
import shape2 from "../../images/services/service-shape2.png";

const OurServices = () => {
  return (
    <>
      <section className="services-area ptb-100 bg-e3fbff">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">
              <img src={starIcon} alt="Icon" />
              Nossos Serviços
            </span>
            <h2>Soluções Profissionais para a Gestão da Saúde</h2>
            <p>
              Promovemos o uso gerencial de informações em serviços de saúde, visando a melhoria da 
              qualidade da atenção à saúde no Distrito Federal por meio de soluções inovadoras e mediadoras.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-item">
                <div className="icon">
                  <img src={icon1} alt="Icon" />
                </div>
                <h3>
                  <Link to="/services/service-details">Integração de Dados</Link>
                </h3>
                <p>
                  Desenvolvemos serviços para integrar dados oriundos do Ministério da Saúde, permitindo
                  a utilização em sistemas locais e ambientes de computação em nuvem.
                </p>
                <Link to="/services/service-details" className="default-btn">
                  <i className="flaticon-right"></i>
                  Saiba Mais <span></span>
                </Link>
                <div className="shape1">
                  <img src={shape1} alt="Icon" />
                </div>
                <div className="shape2">
                  <img src={shape2} alt="Icon" />
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-item">
                <div className="icon">
                  <img src={icon2} alt="Icon" />
                </div>
                <h3>
                  <Link to="/services/service-details">Transformação de Dados</Link>
                </h3>
                <p>
                  Oferecemos soluções de transformação de dados para atender às necessidades
                  de inteligência de negócios (BI) e gerar saídas gerenciais consistentes.
                </p>
                <Link to="/services/service-details" className="default-btn">
                  <i className="flaticon-right"></i>
                  Saiba Mais <span></span>
                </Link>
                <div className="shape1">
                  <img src={shape1} alt="Icon" />
                </div>
                <div className="shape2">
                  <img src={shape2} alt="Icon" />
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-item">
                <div className="icon">
                  <img src={icon3} alt="Icon" />
                </div>
                <h3>
                  <Link to="/services/service-details">Inteligência de Negócios</Link>
                </h3>
                <p>
                  Implementamos modelos de BI colaborativo, associando dados às necessidades
                  de informação e suportando decisões estratégicas em saúde.
                </p>
                <Link to="/services/service-details" className="default-btn">
                  <i className="flaticon-right"></i>
                  Saiba Mais <span></span>
                </Link>
                <div className="shape1">
                  <img src={shape1} alt="Icon" />
                </div>
                <div className="shape2">
                  <img src={shape2} alt="Icon" />
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-item">
                <div className="icon">
                  <img src={icon4} alt="Icon" />
                </div>
                <h3>
                  <Link to="/services/service-details">BI Sensível ao Contexto</Link>
                </h3>
                <p>
                  Exploramos o conceito de BI Ubíquo para fornecer informações sensíveis ao
                  contexto, adaptadas às demandas específicas de cada serviço de saúde.
                </p>
                <Link to="/services/service-details" className="default-btn">
                  <i className="flaticon-right"></i>
                  Saiba Mais <span></span>
                </Link>
                <div className="shape1">
                  <img src={shape1} alt="Icon" />
                </div>
                <div className="shape2">
                  <img src={shape2} alt="Icon" />
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-item">
                <div className="icon">
                  <img src={icon5} alt="Icon" />
                </div>
                <h3>
                  <Link to="/services/service-details">Arquitetura Desacoplada</Link>
                </h3>
                <p>
                  Projetamos soluções com elementos fortemente desacoplados, facilitando a
                  integração de estruturas díspares em ambientes de computação em nuvem.
                </p>
                <Link to="/services/service-details" className="default-btn">
                  <i className="flaticon-right"></i>
                  Saiba Mais <span></span>
                </Link>
                <div className="shape1">
                  <img src={shape1} alt="Icon" />
                </div>
                <div className="shape2">
                  <img src={shape2} alt="Icon" />
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-item">
                <div className="icon">
                  <img src={icon6} alt="Icon" />
                </div>
                <h3>
                  <Link to="/services/service-details">Modelo Canônico de Dados</Link>
                </h3>
                <p>
                  Integramos diferentes modelos de dados, garantindo consistência entre
                  sistemas de saúde e operadoras governamentais e não-governamentais.
                </p>
                <Link to="/services/service-details" className="default-btn">
                  <i className="flaticon-right"></i>
                  Saiba Mais <span></span>
                </Link>
                <div className="shape1">
                  <img src={shape1} alt="Icon" />
                </div>
                <div className="shape2">
                  <img src={shape2} alt="Icon" />
                </div>
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <div className="load-more-btn text-center">
                <Link to="/services" className="default-btn">
                  <i className="flaticon-refresh"></i>
                  Ver Mais <span></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurServices;
