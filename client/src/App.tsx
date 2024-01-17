import { Chat } from "components/Chat";

function App() {
  return (
    <div className="bg-slate-50 min-h-screen flex justify-center items-center">
      <div>
        <h1 className="text-3xl font-bold mb-4 mx-1">Chat App</h1>
        <Chat />
      </div>
    </div>
  );
}

export default App;
