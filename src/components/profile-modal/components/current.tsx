import tempImg from "../../../temp-assets/temp-pp.png";

import "./current.scss";

interface Props {
  name: string;
  email: string;
  profileImgUrl: string;
}

const Current = (props: Props) => {
  const { name, email, profileImgUrl } = props;
  return (
    <div className="current-account">
      <div className="curr-acc-pp">
        <img src={tempImg} alt="" />
        <div></div>
      </div>
      <div className="curr-acc-desc">
        <h5 className="name">{name}</h5>
        <h5 className="email">{email}</h5>
      </div>
      <div className="curr-acc-button">
        <button>Manage your Google Account</button>
      </div>
    </div>
  );
};

export default Current;
