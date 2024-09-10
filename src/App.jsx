import React, { useState } from "react";
import "./App.css"; // CSS dosyasını da güncelleyeceğiz
import Sidebar from "./components/navigation/sidebar/Sidebar";
import Navbar from "./components/navigation/navbar/Navbar";



function App() {
 

  return (
    <div className="App">
      <Navbar/>
      <div className="horizontal-wrapper">
        <Sidebar />
        <main className="content">
          <h2>Welcome to MyApp</h2>
          <p>This is a simple page with a navbar and a sidebar.</p>

          <h3>Section 1: Introduction</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
            quis sem at nibh elementum imperdiet.
          </p>
          <p>
            Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue
            semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos himenaeos.
          </p>

          <h3>Section 2: Features</h3>
          <p>
            Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.
            Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem
            at dolor. Maecenas mattis.
          </p>
          <p>
            Sed convallis tristique sem. Proin ut ligula vel nunc egestas
            porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus
            non, massa. Fusce ac turpis quis ligula lacinia aliquet.
          </p>

          <h3>Section 3: Details</h3>
          <p>
            Maecenas volutpat blandit aliquam. Nulla metus metus, ullamcorper
            vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum
            velit. Class aptent taciti sociosqu ad litora torquent per conubia
            nostra, per inceptos himenaeos.
          </p>
          <p>
            Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante.
            Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed
            fringilla mauris sit amet nibh.
          </p>

          <h3>Section 4: Conclusion</h3>
          <p>
            Vivamus in erat ut urna cursus vestibulum. Fusce vel dui. Sed in
            libero ut nibh placerat accumsan. Proin faucibus arcu quis ante. In
            consequat, felis at ultricies ultricies, ligula elit scelerisque
            mauris, vitae consequat ante nulla.
          </p>
          <p>
            Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum ante
            ipsum primis in faucibus orci luctus et ultrices posuere cubilia
            curae; Sed aliquam, nisi quis porttitor consequat, quam augue
            facilisis urna, in auctor eros odio id libero.
          </p>

          <h3>Section 5: Additional Information</h3>
          <p>
            Aenean ut eros et nisl sagittis vestibulum. Nullam nulla eros,
            ultricies sit amet, nonummy id, imperdiet feugiat, pede. Sed lectus.
            Donec mollis hendrerit risus. Phasellus nec sem in justo
            pellentesque facilisis. Etiam imperdiet imperdiet orci.
          </p>
          <p>
            Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras
            dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend
            tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend
            ac, enim.
          </p>

          <h3>Section 6: Final Thoughts</h3>
          <p>
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Donec velit neque, auctor sit amet aliquam
            vel, ullamcorper sit amet ligula. Nulla porttitor accumsan
            tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et
            ultrices posuere cubilia curae; Donec velit neque, auctor sit amet
            aliquam vel, ullamcorper sit amet ligula.
          </p>
        </main>
      </div>
    </div>
  );
}

export default App;
