import Logo from "./logo";
import Menu from "./menu";
import MenuBurger from "../menu-burger";

const links = [
  { text: "inicio", href: "/" },
  { text: "nosotros", href: "#nosotros" },
  { text: "productos", href: "#servicios" },
  { text: "precios", href: "#precios" },
  { text: "contacto", href: "#contacto" },
];

const Navbar = () => (
  <div className="navbar">
    <Logo />
    <Menu />
    <MenuBurger links={links} />

    <style jsx>
      {`
        .navbar {
          width: 100vw;
          height: 10vh;
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
        }
      `}
    </style>
  </div>
);

export default Navbar;
