import tempImg from "../../../temp-assets/temp-pp.png";

import "./other.scss";
interface Props {
  name: string;
  email: string;
  profileImgUrl: string;
}
const Other = (props: Props) => {
  const { name, email, profileImgUrl } = props;
  return (
    <div className="other-account">
      <div className="other-acc-img">
        <img src={tempImg} alt="" />
      </div>
      <div className="other-acc-desc">
        <h5 className="name">{name}</h5>
        <h5 className="email">{email}</h5>
      </div>
    </div>
  );
};

export default Other;
