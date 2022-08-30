const currentAcc = {
  name: "current account 1",
  email: "currentaccount1@gmail.com",
  profileImgUrl: "",
};
const accountData = [
  {
    name: "current account 2",
    email: "currentaccount2@gmail.com",
    profileImgUrl: "",
  },
  {
    name: "current account 3",
    email: "currentaccount3@gmail.com",
    profileImgUrl: "",
  },
  {
    name: "current account 4",
    email: "currentaccount4@gmail.com",
    profileImgUrl: "",
  },
  {
    name: "current account 5",
    email: "currentaccount5@gmail.com",
    profileImgUrl: "",
  },
  {
    name: "current account 6",
    email: "currentaccount6@gmail.com",
    profileImgUrl: "",
  },
];

import "./style.scss";

// components
import Current from "./components/current";
import Other from "./components/other";

interface Props {
  isModalOpen: boolean;
}

const ProfileModal = (props: Props) => {
  const { isModalOpen } = props;
  if (!isModalOpen) return null;
  return (
    <div className="profile-modal modal">
      <section>
        <Current
          name={currentAcc.name}
          email={currentAcc.email}
          profileImgUrl={currentAcc.profileImgUrl}
        />
      </section>
      <section className="other-accounts">
        {accountData.map((data, idx) => (
          <Other
            key={idx}
            name={data.name}
            email={data.email}
            profileImgUrl={data.profileImgUrl}
          />
        ))}
      </section>
      <section className="button-signout">
        <button>Sign out of all accounts</button>
      </section>
      <section className="profile-modal-footer">
        <div>
          <button>Privacy Policy</button>
        </div>
        <div>
          <span>.</span>
        </div>
        <div>
          <button>Terms of Service</button>
        </div>
      </section>
    </div>
  );
};

export default ProfileModal;
