import React from "react"
import { Link } from "gatsby"
import icon1 from "../../images/icons/icon1.png"
import icon2 from "../../images/icons/icon2.png"
import icon3 from "../../images/icons/icon3.png"
import shape2 from "../../images/services/service-shape2.png"

const FeaturedService = () => {
  return (
    <>
      <div className="boxes-area pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-boxes-item">
                <div className="icon">
                  <img src={icon1} alt="banner" />
                </div>
                <h3>
                  <Link to="/services/service-details">
                    Gestão de Dados em Saúde
                  </Link>
                </h3>
                <p>
                  Integração e transformação de dados para fornecer informações
                  gerenciais consistentes, atendendo às necessidades do
                  Ministério da Saúde e promovendo a interoperabilidade entre
                  sistemas.
                </p>

{/* 
                <Link to="/services/service-details" className="default-btn">
                  <i className="flaticon-right"></i>
                  Read More <span></span>
                </Link>
                */}

                <div className="shape1">
                  <img src={shape2} alt="banner" />
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-boxes-item">
                <div className="icon">
                  <img src={icon2} alt="banner" />
                </div>
                <h3>
                  <Link to="/services/service-details">
                    APIs para BI Ubíquo
                  </Link>
                </h3>
                <p>
                  Desenvolvimento de APIs padronizadas para sumarização e
                  agregação de dados anonimizados, permitindo a criação de
                  interfaces de BI Ubíquo e Sensível ao Contexto, acessíveis
                  como "BI as a Service".
                </p>

{/* 
                <Link to="/services/service-details" className="default-btn">
                  <i className="flaticon-right"></i>
                  Read More <span></span>
                </Link>
                */}
                <div className="shape1">
                  <img src={shape2} alt="banner" />
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-sm-3 offset-md-3">
              <div className="single-boxes-item">
                <div className="icon">
                  <img src={icon3} alt="banner" />
                </div>
                <h3>
                  <Link to="/services/service-details">
                    Infraestrutura Desacoplada e Segura
                  </Link>
                </h3>
                <p>
                  Uso de conectores e arquiteturas em nuvem para centralizar
                  dados heterogêneos, garantindo anonimização, segurança e
                  confiança computacional para a gestão eficiente da saúde
                  pública.
                </p>

{/* 
                <Link to="/services/service-details" className="default-btn">
                  <i className="flaticon-right"></i>
                  Read More <span></span>
                </Link>
                */}

                <div className="shape1">
                  <img src={shape2} alt="banner" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FeaturedService
