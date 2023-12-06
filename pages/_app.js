import "../styles/globals.css";
import Wrapper from "../components/wrapper/index";

function MyApp({ Component, pageProps }) {
  return (
    <Wrapper>
      <Component {...pageProps} />
    </Wrapper>
  );
}

export default MyApp;
