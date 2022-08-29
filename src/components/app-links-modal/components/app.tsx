import "./app.scss";
import tempImg from "../../../temp-assets/temp-pp.png";

interface Props {
  appName: string | null;
  imgSrc: string | null;
  appUrl: string | null;
}

const App = (props: Props) => {
  const { appName, imgSrc, appUrl } = props;
  return (
    <div className="app">
      <div className="app-icon">
        <img src={tempImg} alt="" />
      </div>
      <div className="app-name">
        <h5>{appName}</h5>
      </div>
    </div>
  );
};

export default App;
