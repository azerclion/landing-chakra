import { ChakraProvider } from "@chakra-ui/react";
import WithSpeechBubbles from "./pages/Testimonials";
import GridListWithHeading from "./pages/GridList";
import Footer from "./pages/Footer";
import Main from "./pages/Main";

function App() {
  return (
    <ChakraProvider>
      <Main></Main>
      <WithSpeechBubbles></WithSpeechBubbles>
      <GridListWithHeading></GridListWithHeading>
      <Footer></Footer>
    </ChakraProvider>
  );
}

export default App;
