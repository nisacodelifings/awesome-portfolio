import React from "react";

import Header from "./Header";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <h1>my awesome portfolio</h1>
        <div class="grid">
          <div class="item">
            <h1>project a</h1>
            <button>learn more</button>
          </div>
          <div class="item">
            <h1>project b</h1>
            <button>learn more</button>
          </div>
          <div class="item">
            <h1>project c</h1>
            <button>learn more</button>
          </div>
          <div class="item">
            <h1>project d</h1>
            <button>learn more</button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
