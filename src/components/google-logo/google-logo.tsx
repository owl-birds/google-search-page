import "./style.scss";
// png
import googleImg from "../../temp-assets/googlelogo_light_color.png";
const GoogleLogo = () => {
  return (
    <div className="google-logo-section">
      <section>
        <img src={googleImg} alt="" />
      </section>
    </div>
  );
};

export default GoogleLogo;
