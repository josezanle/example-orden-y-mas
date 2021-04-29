import Link from "next/link";

const Footer = () => {
  return (
    <div className="footer" id="contacto">
      <div className="bottom">
        <h3>
          <Link href="#">
            <a className="pointer">section.title</a>
          </Link>
        </h3>
        <h3>section.title</h3>

        <span className="column">
          title
          <p>section.description</p>
        </span>

        <span className="column">
          <h3>project.configuration.footer.contact_info_title</h3>

          <span className="row">
            <img src="/icons/house.png" alt="house icon" />
            <p>project.configuration.footer.location</p>
            <br />
          </span>

          <span className="row">
            <img src="/icons/phone.png" alt="phone icon" />
            <p>
              <a href="#" target="blank">
                project.configuration.footer.phone
              </a>
            </p>
          </span>

          <span className="row">
            <img src="/icons/contact.png" alt="contact icon" />
            <p>
              <a href="/" target="blank">
                project.configuration.footer.email
              </a>
            </p>
          </span>
        </span>
      </div>

      <style jsx>
        {`
          .footer {
            width: 100vw;
            display: flex;
            justify-content: center;
            align-items: center;
            background: #0f0f0f;
          }

          .bottom {
            display: flex;
            justify-content: center;
            align-items: center;
            flex: 1;
            width: 100%;
            height: 100%;
          }

          .column {
            width: 400px;
            height: 100%;
            padding: 1em;
            border-radius: 1em;
          }
          .row {
            width: 100%;
            display: flex;
            padding: 0.5em 0 0 0.5em;
          }
          h3 {
            margin-top: 1em;
            color: white;
          }
          img {
            width: 25px;
            height: 25px;
          }
          p {
            color: grey;
            margin: 0;
            padding: 0 0 0 0.5em;
          }
          .pointer {
            cursor: pointer;
            color: white;
          }

          a {
            color: grey;
          }

          @media (max-width: 840px) {
            .bottom {
              flex-flow: column;
            }
            .column {
              width: 100%;
              padding: 1em;
              border-radius: 0;
              display: flex;
              justify-content: center;
              flex-flow: column;
            }
            .row {
              padding: 0 0 1em 1em;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Footer;
