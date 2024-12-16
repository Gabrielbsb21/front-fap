import React from "react"
import { Link } from "gatsby"
import img10 from "../../images/about/about-img10.png"
import shape1 from "../../images/about/about-shape1.png"
import shape2 from "../../images/our-mission/our-mission-shape2.png"
import starIcon from "../../images/star-icon.png"

const AboutUs = () => {
  return (
    <>
      <div className="about-area pb-100">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="about-img">
                <img src={img10} alt="banner" />
                <div className="shape">
                  <img src={shape1} alt="banner" />
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="about-content">
                <div className="content">
                  <span className="sub-title">
                    <img src={starIcon} alt="banner" />
                    Sobre
                  </span>
                  <h2>BI como Serviço para Gestão da Saúde Pública no GDF.</h2>
                  <p>
                    O objetivo é fomentar o uso estratégico de informações em
                    serviços de saúde, visando aprimorar a qualidade da atenção
                    à saúde no Distrito Federal.
                  </p>
                  <ul className="about-list">
                    <li>
                      <i className="flaticon-tick"></i>
                      Análise de Dados
                      <img src={shape2} alt="banner" />
                    </li>
                    <li>
                      <i className="flaticon-tick"></i>
                       Interpretação de Dados
                      <img src={shape2} alt="banner" />
                    </li>
                    <li>
                      <i className="flaticon-tick"></i>
                      Soluções de BI
                      <img src={shape2} alt="banner" />
                    </li>
                    <li>
                      <i className="flaticon-tick"></i>
                      APIs de Integração
                      <img src={shape2} alt="banner" />
                    </li>
                  </ul>
                  <p>
                    A proposta é utilizar informações gerenciais de forma
                    eficiente nos serviços de saúde, contribuindo para a
                    elevação da qualidade da atenção à saúde no Distrito Federal
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutUs
