import SearchBox from "./components/SearchBox";
import Table from "./components/Table";

function App() {
  const handleSearch = (query) => {
    console.log("Search query: ", query);

  }
  return (
    <div className="App">
      <SearchBox onSearch={handleSearch} />
      <Table />
    </div>
  );
}

export default App;
