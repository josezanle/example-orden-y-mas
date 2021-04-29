const Prices = () => {
  return (
    <div className="prices" id="precios">
      <span className="texto">
        <h3>Ordenando y más</h3>
        <p>
          TARIFAS A continuación, te detallo las tarifas de mis servicios, la
          primera visita tendrá un coste de 50€ (que se reembolsarán si se
          contratan los servicios). • 40€/hora (IVA no incluido) * • 37€/hora
          (contratando 2 horas o más). (IVA no incluido) * • 35€/hora
          (contratando dos días o más). (IVA no incluido) * *Desplazamiento
          hasta 30 km. Regala orden: con las mismas condiciones que las tarifas
          anteriores.
        </p>
      </span>
      <span className="card-container">
        <div className="card1">
          <div className="icon" />
          <div className="text">
            <h4>Comfort</h4>
          </div>
        </div>
        <div className="card2">
          <div className="icon" />
          <div className="text">
            <h4>Deluxe</h4>
          </div>
        </div>
        <div className="card3">
          <div className="icon" />
          <div className="text">
            <h4>Service</h4>
          </div>
        </div>
      </span>
      <span className="li"></span>
      <span className="regala">
        <h5>
          la primera visita tendrá un coste de 50€ (que se reembolsarán si se
          contratan los servicios).
        </h5>
      </span>

      <style jsx>
        {`
          .prices {
            width: 100vw;
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-flow: column;
            background-image: linear-gradient(to top, #6a85b6 0%, #bac8e0 100%);
          }
          .regala,
          .texto {
            width: 40%;
            color: white;
          }
          h3 {
            font-size: 4em;
          }
          // ===============================
          .card-container {
            width: 100%;
            min-height: auto;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
          }
          .card1,
          .card2,
          .card3 {
            width: 18em;
            height: 18em;
            margin: 0.5em;
            padding: 1em;
            border-radius: 1em;
            display: flex;
            flex-flow: column;
            background: white;
          }
          .card1 .icon {
            -webkit-mask: url(/icons/certificate.svg) 50% 100% no-repeat;
            background-position: center;
            background-image: linear-gradient(
              to right,
              #ff758c 0%,
              #ff7eb3 100%
            );
          }
          .card2 .icon {
            -webkit-mask: url(/icons/child.svg) 50% 100% no-repeat;
            background-position: center;
            background-image: linear-gradient(
              to right,
              #ff758c 0%,
              #ff7eb3 100%
            );
          }
          .card3 .icon {
            -webkit-mask: url(/icons/cocktail.svg) 50% 100% no-repeat;
            background-position: center;
            background-image: linear-gradient(
              to right,
              #ff758c 0%,
              #ff7eb3 100%
            );
          }

          .icon,
          .text {
            flex: 1;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          // ==============================

          h3,
          p,
          .li {
            color: white;
          }

          .li {
            width: 40%;
            margin: 0 0.5em 1em 0;
          }
          h5 {
            font-size: 1.7em;
          }
          @media (max-width: 970px) {
            .prices {
              padding: 1em;
            }
            .regala,
            .texto {
              width: 100%;
            }

            .li {
              width: 100%;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Prices;
