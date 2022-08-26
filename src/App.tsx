import GoogleLogo from "./components/google-logo";
import Layout from "./components/layout";
import SearchBox from "./components/search-box";
import LanguageAvail from "./components/language-avail";

const App = () => {
  return (
    <Layout>
      <GoogleLogo />
      <SearchBox />
      <LanguageAvail />
    </Layout>
  );
};

export default App;
