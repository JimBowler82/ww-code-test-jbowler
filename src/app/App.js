/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { json } from "envalid";
import DataTable from "./components/DataTable";
import AddNewEntry from "./components/AddNewEntry";
import { ChakraProvider, Container, Divider, Heading } from "@chakra-ui/react";

const App = ({ store }) => {
  return (
    <ChakraProvider>
      <Provider store={store}>
        <main
          css={css`
            min-width: 510px;
            height: 100vh;
            background-color: #98b4d4;
            padding-top: 60px;
          `}
        >
          <Container
            width="80%"
            p="2"
            backgroundColor="#f0f0f0"
            css={css`
              box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.4);
              border-radius: 5px;
            `}
          >
            <Heading as="h1" mb="8">
              NI Contributions
            </Heading>
            <AddNewEntry />
            <Divider style={{ marginTop: "20px" }} />
            <DataTable />
          </Container>
        </main>
      </Provider>
    </ChakraProvider>
  );
};

App.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

export default App;
