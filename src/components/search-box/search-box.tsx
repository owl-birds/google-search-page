import "./style.scss";
// types
import { ChangeEvent, KeyboardEvent, useRef, useState } from "react";
const SearchBox = () => {
  // const inputRef = useRef<null | HTMLInputElement>(null);
  // const [inputString, setInputString] = useState("");
  const searchHandleChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    console.log(encodeURIComponent(event.target.value));
    console.log(window.location.href);
    // console.log(inputRef.current?.value);
    // make a server to return the encoded url
    //    so we can use it as an url
    //   cause for ex we cant use spaces in utl
    //   use encodeURIComponent
    // return https://www.google.com/search?q=search-this-things
  };
  // to know when the user enter the search
  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {};
  return (
    <div className="search-box">
      <section>
        <form className="search-form">
          <div>
            <div className="svgs">
              <svg
                focusable="false"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
              </svg>
            </div>
            <input
              onChange={searchHandleChange}
              onKeyDown={handleKeyDown}
              type="text"
            />
            <div className="svgs">
              <svg
                focusable="false"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                id="mic-icon"
              >
                <path
                  fill="#4285f4"
                  d="m12 15c1.66 0 3-1.31 3-2.97v-7.02c0-1.66-1.34-3.01-3-3.01s-3 1.34-3 3.01v7.02c0 1.66 1.34 2.97 3 2.97z"
                ></path>
                <path fill="#34a853" d="m11 18.08h2v3.92h-2z"></path>
                <path
                  fill="#fbbc04"
                  d="m7.05 16.87c-1.27-1.33-2.05-2.83-2.05-4.87h2c0 1.45 0.56 2.42 1.47 3.38v0.32l-1.15 1.18z"
                ></path>
                <path
                  fill="#ea4335"
                  d="m12 16.93a4.97 5.25 0 0 1 -3.54 -1.55l-1.41 1.49c1.26 1.34 3.02 2.13 4.95 2.13 3.87 0 6.99-2.92 6.99-7h-1.99c0 2.92-2.24 4.93-5 4.93z"
                ></path>
              </svg>
            </div>
          </div>
        </form>
        <div className="buttons-wrapper">
          <button>Google Search</button>
          <button>I'm Feeling Lucky</button>
        </div>
      </section>
    </div>
  );
};

export default SearchBox;
