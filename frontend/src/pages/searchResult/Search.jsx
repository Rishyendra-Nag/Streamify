import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";

import "./style.scss";

import { fetchDataFromApi } from "../../utils/api";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import MovieCard from "../../components/movieCard/MovieCard";
import Spinner from "../../components/spinner/Spinner";
import noResults from "../../assets/no-results.png";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

const SearchResult = () => {
  const [data, setData] = useState(null);
  const [pageNum, setPageNum] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { query } = useParams();

  const fetchInitialData = async () => {
    setLoading(true);
    setError(null);
    if (!query) {
      console.error("Query is empty or undefined. Aborting API call.");
      setLoading(false);
      return;
    }
    try { 
      const params = { query, page: pageNum }; // Parameters to pass
      const res = await fetchDataFromApi(`/search/multi?`, params);
      setData(res);
      setPageNum((prev) => prev + 1);
    } catch (err) {
      console.error("Error fetching initial data:", err);
      setError("Failed to fetch data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const fetchNextPageData = async () => {
    setLoading(true);
    try {
      const params = { query, page: pageNum }; // Parameters to pass
      const res = await fetchDataFromApi(`/search/multi`, params);
      if (data?.results) {
        setData((prevData) => ({
          ...prevData,
          results: [...prevData.results, ...res.results],
        }));
      } else {
        setData(res);
      }
      setPageNum((prev) => prev + 1);
    } catch (err) {
      console.error("Error fetching next page data:", err);
      setError("Failed to fetch more data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setPageNum(1);
    fetchInitialData();
  }, [query]);

  return (
    <>
      <Header />
      <div className="searchResultsPage">
        {loading && <Spinner initial={true} />}
        {!loading && (
          <ContentWrapper>
            {data?.results?.length > 0 ? (
              <>
                <div className="pageTitle">
                  {`Search ${data?.total_results > 1 ? "results" : "result"} of '${query}'`}
                </div>
                <InfiniteScroll
                  className="content"
                  dataLength={data?.results?.length || 0}
                  next={fetchNextPageData}
                  hasMore={pageNum <= data?.total_pages}
                  loader={<Spinner />}
                >
                  {data?.results.map((item) => {
                    if (item.media_type !== "person") {
                      return (
                        <MovieCard key={item.id} data={item} fromSearch={true} />
                      );
                    }
                    return null;
                  })}
                </InfiniteScroll>
              </>
            ) : (
              <div className="noFoundContainer">
                <img src={noResults} alt="No Results Found" className="notFound" />
                <span className="resultNotFound">
                  Sorry, Results not found!
                </span>
              </div>
            )}
            {error && <div className="error">{error}</div>}
          </ContentWrapper>
        )}
      </div>
      <Footer />
    </>
  );
};

export default SearchResult;

// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import InfiniteScroll from "react-infinite-scroll-component";

// import "./style.scss";

// import { fetchDataFromApi } from "../../utils/api";
// import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
// import MovieCard from "../../components/movieCard/MovieCard";
// import Spinner from "../../components/spinner/Spinner";
// import noResults from "../../assets/no-results.png";
// import Footer from "../../components/footer/Footer";
// import Header from "../../components/header/Header";

// const SearchResult = () => {
//   const [data, setData] = useState(null);
//   const [pageNum, setPageNum] = useState(1);
//   const [loading, setLoading] = useState(false);
//   const { query } = useParams();

//   const fetchInitialData = () => {
//     setLoading(true);
//     fetchDataFromApi(`/search/multi?query=${query}&page=${pageNum}`).then(
//       (res) => {
//         setData(res);
//         setPageNum((prev) => prev + 1);
//         setLoading(false);
//       }
//     );
//   };

//   const fetchNextPageData = () => {
//     fetchDataFromApi(`/search/multi?query=${query}&page=${pageNum}`).then(
//       (res) => {
//         if (data?.results) {
//           setData({
//             ...data,
//             results: [...data?.results, ...res.results],
//           });
//         } else {
//           setData(res);
//         }
//         setPageNum((prev) => prev + 1);
//       }
//     );
//   };

//   useEffect(() => {
//     setPageNum(1);
//     fetchInitialData();
//   }, [query]);

//   return (
//     <>
//       <Header />
//       <div className="searchResultsPage">
//         {loading && <Spinner initial={true} />}
//         {!loading && (
//           <ContentWrapper>
//             {data?.results?.length > 0 ? (
//               <>
//                 <div className="pageTitle">
//                   {`Search ${
//                     data?.total_results > 1 ? "results" : "result"
//                   } of '${query}'`}
//                 </div>
//                 <InfiniteScroll
//                   className="content"
//                   dataLength={data?.results?.length || []}
//                   next={fetchNextPageData}
//                   hasMore={pageNum <= data?.total_pages}
//                   loader={<Spinner />}
//                 >
//                   {data?.results.map((item, index) => {
//                     if (item.media_type === "person") return;
//                     return (
//                       <MovieCard key={index} data={item} fromSearch={true} />
//                     );
//                   })}
//                 </InfiniteScroll>
//               </>
//             ) : (
//               <div className="noFoundContainer">
//                 <img src={noResults} className="notFound" />
//                 <span className="resultNotFound">
//                   Sorry, Results not found!
//                 </span>
//               </div>
//             )}
//           </ContentWrapper>
//         )}
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default SearchResult;
