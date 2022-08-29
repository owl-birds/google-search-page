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
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const appLinksClicked = (event: MouseEvent) => {
    setIsAppsModalOpen((prevValue) => !prevValue);
    setIsProfileModalOpen(() => false);
    // console.log(event.target);
  };
  const profileClicked = (event: MouseEvent) => {
    setIsProfileModalOpen((prevValue) => !prevValue);
    setIsAppsModalOpen(() => false);
  };
  return (
    <>
      <nav className="top-bar">
        <AppsModal isModalOpen={isAppsModalOpen} />
        <ProfileModal isModalOpen={isProfileModalOpen} />
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
            <div
              style={{
                backgroundColor: isAppsModalOpen
                  ? "rgba(66, 66, 66, 0.87)"
                  : "#202124",
              }}
              className="app-links-wrapper"
              onClick={appLinksClicked}
            >
              <div>
                <svg
                  className="app-links"
                  focusable="false"
                  viewBox="0 0 24 24"
                >
                  <path
                    style={{
                      fill: isAppsModalOpen
                        ? "#fff"
                        : "rgba(255, 255, 255, 0.87)",
                    }}
                    d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"
                  ></path>
                </svg>
              </div>
            </div>
            <div>
              <div>
                <div className="profile-picture" onClick={profileClicked}>
                  <img
                    style={{
                      border: isProfileModalOpen
                        ? "3px solid rgba(66, 66, 66, 0.87)"
                        : "3px solid #202124",
                    }}
                    src={tempPP}
                    alt=""
                  />
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
{
  /* {isAppsModalOpen ? (
                  <svg
                    className="app-links"
                    version="1.1"
                    x="0px"
                    y="0px"
                    viewBox="0 0 460.775 460.775"
                  >
                    <path
                      d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55
	c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55
	c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505
	c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55
	l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719
	c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z"
                    />
                  </svg>
                ) : (
                  <svg
                    className="app-links"
                    focusable="false"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"></path>
                  </svg>
                )} */
}
