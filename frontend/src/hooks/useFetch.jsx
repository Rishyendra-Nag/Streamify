import { useEffect, useState } from "react";
import { fetchDataFromApi } from "../utils/api";

const useFetch = (url, token) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true); // Set initial loading to true
  const [error, setError] = useState(null);

  useEffect(() => {
    // Reset states when the url changes
    setLoading(true);
    setData(null);
    setError(null);

    const fetchData = async () => {
      try {
        const res = await fetchDataFromApi(url, {}, token);
        setData(res);
      } catch (err) {
        console.error("Fetch error:", err); // Log the error for debugging
        setError("Something went wrong!");
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    // Optional: return a cleanup function
    return () => {
      setLoading(false); // Ensure loading state is reset on unmount
    };
  }, [url, token]); // Add token to dependencies if it may change

  return { data, loading, error };
};

export default useFetch;

// import { useEffect, useState } from "react";
// import { fetchDataFromApi } from "../utils/api";

// const useFetch = (url) => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     setLoading("Loading...");
//     setData(null);
//     setError(null);

//     fetchDataFromApi(url)
//       .then((res) => {
//         setLoading(false);
//         setData(res);
//       })
//       .catch((err) => {
//         setLoading(false);
//         setError("Something went wrong!");
//       });
//   }, [url]);
//   return { data, loading, error };
// };

// export default useFetch;
