import Logo from "../images/header__logo.svg"

function Header() {
  return (
    <header className="header">
      <img
        className="header__logo"
        src={Logo}
        alt="логотип сайта Mesto Russia"
      />
    </header>
  );
}

export default Header;
