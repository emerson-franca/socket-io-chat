import { Chat, Header, Sidebar } from "components";
import { Home } from "pages/Home";

function App() {
  return (
    <Home>
      <Sidebar />
      <Header />
      <Chat />
    </Home>
  );
}

export default App;
