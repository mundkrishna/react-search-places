import { useEffect, useState } from "react";
import SearchBox from "./components/SearchBox";
import Table from "./components/Table";
import { getPlaces } from "./utilities/api";
import { DEFAULT_ITEMS_PER_PAGE } from "./utilities/constanst";
import Spinner from "./components/Spinner";
import Pagination from "./components/Pagination";
import './App.css';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(null);
  // const [limit, setLimit] = useState(DEFAULT_ITEMS_PER_PAGE);

  const handleSearch = (query) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  /**
   * TODOD: Revisit this, there appears to be an issue which is updating the page
   * as soon as the number is entered!
   */
  // const handleLimitChange = (newLimit) => {
  //   setLimit(newLimit);
  // };

  useEffect(() => {
    const fetchData = async () => {
      if (searchQuery) {
        setLoading(true);
        try {
          const response = await getPlaces({
            countryIds: 'IN',
            namePrefix: searchQuery,
            limit: DEFAULT_ITEMS_PER_PAGE,
            offset: (currentPage - 1) * DEFAULT_ITEMS_PER_PAGE
          });
          setTableData(response.data);
          setTotalCount(response.metadata.totalCount);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching places:', error);
          setLoading(false);
        } finally {
          setLoading(false);
        }
      }
    };
    fetchData();
  }, [searchQuery, currentPage]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="App">
      <SearchBox onSearch={handleSearch} />
      {loading ? (
        <Spinner />
      ) : searchQuery === null || searchQuery === undefined || searchQuery === '' ? (
        <div>Start searching</div>
      ) : tableData.length === 0 ? (
        <div>No results found</div>
      ) : (
        <>
          <Table data={tableData} currentPage={currentPage} />
          <div className="pagination-input-container">
            <Pagination
              currentPage={currentPage}
              totalPages={Math.ceil(totalCount / DEFAULT_ITEMS_PER_PAGE)}
              onPageChange={handlePageChange}
            />
            {/* <InputBox onLimitChange={handleLimitChange} /> */}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
