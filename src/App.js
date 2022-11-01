import { ChakraProvider } from "@chakra-ui/react";
import WithSpeechBubbles from "./pages/Testimonials";
import GridListWithHeading from "./pages/GridList";
import Main from "./pages/Main";

function App() {
  return (
    <ChakraProvider>
      <Main></Main>
      <WithSpeechBubbles></WithSpeechBubbles>
      <GridListWithHeading></GridListWithHeading>
    </ChakraProvider>
  );
}

export default App;
