import { useRef, useState } from "react";

import tempPP from "../../temp-assets/temp-pp.png";
import "./style.scss";
// types
import { MouseEvent } from "react";
// modals
import AppsModal from "../app-links-modal";
import ProfileModal from "../profile-modal";
const TopBar = () => {
  // const appsModalRef = useRef<HTMLDivElement | null>(null);
  const [isAppsModalOpen, setIsAppsModalOpen] = useState(false);
  const appLinksClicked = (event: MouseEvent) => {
    setIsAppsModalOpen((prevValue) => !prevValue);
    console.log(event.target);
  };
  const closingModal = (event: MouseEvent) => {
    console.log(event.target);
  };
  return (
    <>
      <nav className="top-bar">
        <AppsModal isModalOpen={isAppsModalOpen} />
        <section className="right-side-links">
          <div className="part-1">
            <div>
              <a href="#">Gmail</a>
            </div>
            <div>
              <a href="#">Images</a>
            </div>
          </div>
          <div className="part-2">
            <div className="app-links-wrapper" onClick={appLinksClicked}>
              <div>
                <svg
                  className="app-links"
                  focusable="false"
                  viewBox="0 0 24 24"
                >
                  <path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"></path>
                </svg>
              </div>
            </div>
            <div>
              <div>
                <div className="profile-picture">
                  <img src={tempPP} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </nav>
    </>
  );
};

export default TopBar;
