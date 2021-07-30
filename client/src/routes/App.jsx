import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "../styles/components/App.css";
import Home from "../containers/Home";
import Checkout from "../containers/Checkout";
import Information from "../containers/Information";
import Payment from "../containers/Payment";
import Success from "../containers/Success";
import SignIn from "../containers/SignIn";
import NotFound from "../containers/NotFound";
import Layout from "../components/Layout";
import AppContext from "../context/AppContext";
import useInitialState from "../hooks/useInitialState";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";

const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      root: {
        color: "inherit",
        // margin: "1rem .5rem",
      },
    },
    MuiIconButton: {
      root: {
        color: "inherit",
      },
    },
    MuiTypography: {
      root: {
        color: "inherit",
      },
    },
    MuiContainer: {
      root: {
        minHeight: "100%",
      },
    },
  },
  palette: {
    primary: {
      main: "#14396a",
    },
    secondary: {
      main: "#ff9100",
    },
  },
});

const App = () => {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/checkout" component={Checkout} />
              <Route
                exact
                path="/checkout/information"
                component={Information}
              />
              <Route exact path="/checkout/payment" component={Payment} />
              <Route exact path="/checkout/success" component={Success} />
              <Route exact path="/signin" component={SignIn} />
              <Route component={NotFound} />
            </Switch>
          </Layout>
        </ThemeProvider>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
