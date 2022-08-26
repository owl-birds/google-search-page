import "./style.scss";
const Footer = () => {
  return (
    <div className="footer">
      <section className="country">
        <div>Indonesia</div>
      </section>
      <section className="links-wrapper">
        <div className="links">
          <a href="#">About</a>
          <a href="#">Advertising</a>
          <a href="#">Business</a>
          <a href="#">How Search works</a>
        </div>
        <div className="links">
          <a href="">Privacy</a>
          <a href="">Terms</a>
          <a href="">Settings</a>
        </div>
      </section>
    </div>
  );
};

export default Footer;
