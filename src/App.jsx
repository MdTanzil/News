import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NewsFeed from "./components/news/NewsFeed";
import DataContextProvider from "./provider/DataContextProvider";

function App() {
  return (
    <>
      <DataContextProvider>
        <Header />
        <main className="my-10 lg:my-14">
          <NewsFeed />
        </main>
      </DataContextProvider>
      <Footer />
    </>
  );
}

export default App;
