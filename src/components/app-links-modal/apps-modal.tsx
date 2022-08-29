// appss list
const appsList = [
  { name: "Account", appUrl: "", imgUrl: "" },
  { name: "Search", appUrl: "", imgUrl: "" },
  { name: "Maps", appUrl: "", imgUrl: "" },
  { name: "Youtube", appUrl: "", imgUrl: "" },
  { name: "Play", appUrl: "", imgUrl: "" },
  { name: "News", appUrl: "", imgUrl: "" },
  { name: "Gmail", appUrl: "", imgUrl: "" },
  { name: "Meet", appUrl: "", imgUrl: "" },
  { name: "Chat", appUrl: "", imgUrl: "" },
  { name: "Contacts", appUrl: "", imgUrl: "" },
  { name: "Drive", appUrl: "", imgUrl: "" },
  { name: "Calendar", appUrl: "", imgUrl: "" },
  { name: "Translates", appUrl: "", imgUrl: "" },
  { name: "Photos", appUrl: "", imgUrl: "" },
  { name: "Duo", appUrl: "", imgUrl: "" },
  { name: "Shopping", appUrl: "", imgUrl: "" },
];
import { ForwardedRef } from "react";

// components
import App from "./components/app";
// id for interactive ui
import { appsModalId } from "../../interactive-ui";

import "./style.scss";

// custom types
interface Props {
  // ref: ForwardedRef<HTMLDivElement>;
  isModalOpen: boolean;
}

const AppsModal = (props: Props) => {
  const { isModalOpen } = props;
  if (!isModalOpen) {
    return null;
  }
  return (
    <div id={appsModalId} className="apps-modal modal">
      {appsList.map((row, idx) => (
        <App
          key={idx}
          appName={row.name}
          imgSrc={row.imgUrl}
          appUrl={row.appUrl}
        />
      ))}
    </div>
  );
};

export default AppsModal;
