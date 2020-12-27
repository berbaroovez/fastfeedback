import { Global, css } from "@emotion/react";
import { ChakraProvider, CSSReset, extendTheme } from "@chakra-ui/react";
import theme from "@/styles/theme";
import { AuthProvider } from "@/lib/auth";
const customTheme = extendTheme(theme);

const GlobalStyle = ({ children }) => {
  return (
    <>
      <CSSReset />
      <Global
        styles={css`
          html {
            min-width: 360px;
            scroll-behavior: smooth;
          }
          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
          }
        `}
      />
      {children}
    </>
  );
};

const App = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={customTheme}>
      <AuthProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </AuthProvider>
    </ChakraProvider>
  );
};
export default App;
