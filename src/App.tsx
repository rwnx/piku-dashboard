import React from 'react';
import { Header } from "./dashboard/header";
import { Footer } from "./dashboard/footer";
import { Home } from "./dashboard/home";
import { Config } from "./dashboard/config";
import { Logs } from "./dashboard/logs";
import { Router } from "@reach/router";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Router>
          <Home default path="/"/>
          <Config path="/apps/:appId/config" />
          <Logs path="/apps/:appId/logs" />
        </Router>
      </main>
      <Footer />

    </div>
  );
}

export default App;
