import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;

const headers = {
  Authorization: "Bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
  
  try {
    const { data } = await axios.get(BASE_URL + url, {
      headers,
      params,
    });
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};



// import axios from "axios";

// const BASE_URL = "https://api.themoviedb.org/3";

// const headers = {
//   Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZjNiMDk2ZWI3OGEyMzQ3YmJhOWQ0ZTQxOTc0OWFmMiIsIm5iZiI6MTcyOTM2MTE0OC4wNTQxMiwic3ViIjoiNjcxMmIyYmM4ZTg0NDY1N2I3ZmI0NDI1Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.lqSz5sd7f84V1C-BkOp3k1dxAAJ9r0I459vqGqXlLms",
// };

// export const fetchDataFromApi = async (url, params = {}) => {
//   console.log("Fetching data from API...");
//   console.log(`Full URL: ${BASE_URL + url}`);

//   if (Object.keys(params).length > 0) {
//     console.log("Parameters:", params);
//   } else {
//     console.log("No parameters provided.");
//   }

//   try {
//     console.log("Started Getting Response");

//     const response = await axios.get(BASE_URL + url, {
//       headers,
//       params,
//     }
  
  
//   );

//     console.log(response, "adfadsf");
    
//     if (response.status === 200) {
//       return response.data;
//     } else {
//       console.error(`Error: Received status code ${response.status}`);
//       return null;
//     }
//   } catch (error) {
//     if (error.response) {
//       console.error("API Error:", error.response.data);
//     } else if (error.request) {
//       console.error("Network Error: No response received.");
//     } else {
//       console.error("Error:", error.message);
//     }
//     return null;
//   }
  
  
//   // catch (error) {
//   //   console.error(`Error occurred while fetching data: ${error.message}`);
//   //   return null;
//   // }
// };

// // import axios from "axios";

// // const BASE_URL = "https://api.themoviedb.org/3";

// // const headers = {
// //   Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZjNiMDk2ZWI3OGEyMzQ3YmJhOWQ0ZTQxOTc0OWFmMiIsIm5iZiI6MTcyOTM2MTE0OC4wNTQxMiwic3ViIjoiNjcxMmIyYmM4ZTg0NDY1N2I3ZmI0NDI1Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.lqSz5sd7f84V1C-BkOp3k1dxAAJ9r0I459vqGqXlLms",
// // };

// // // export const fetchDataFromApi = async (url, params = {}) => {
// // //   console.log("Fetching data from API..");
// // //   console.log(`Full URL: ${BASE_URL + url}`);

// // //   // Log the parameters being sent
// // //   if (Object.keys(params).length > 0) {
// // //     console.log("Parameters:", params);
// // //   } else {
// // //     console.log("No parameters provided.");
// // //   }

// // //   try {
// // //     const response = await axios.get(BASE_URL + url, {
// // //       headers,
// // //       params,
// // //     });

// // //     // Check if response is valid
// // //     if (response.status === 200) {
// // //       const data = response.data;
// // //       console.log("API Response:", data); // Log the response data
// // //       return data;
// // //     } else {
// // //       console.error(`Error: Received status code ${response.status}`);
// // //       return null;
// // //     }
// // //   } catch (error) {
// // //     console.error(`Error occurred while fetching data:,${response.status},  ${error.message}`); // Log the error message
// // //     console.error("Error details:", error); // Log full error details for debugging
// // //     return null; // Return null or handle error as needed
// // //   }
// // // };
// // export const fetchDataFromApi = async (url, params = {}) => {
// //   console.log("Fetching data from API..");
// //   console.log(`Full URL: ${BASE_URL + url}`);

// //   // Log the parameters being sent
// //   if (Object.keys(params).length > 0) {
// //     console.log("Parameters:", params);
// //   } else {
// //     console.log("No parameters provided.");
// //   }

// //   console.log();

// //   try {
// //     const response = await axios.get(BASE_URL + url, {
// //       headers,
// //       params,
// //     });

// //     console.log(response);

// //     // Check if response is valid
// //     if (response.status === 200) {
// //       const data = response.data;
// //       console.log("API Response:", data); // Log the response data
// //       return data;
// //     } else {
// //       console.error(`Error: Received status code ${response.status}`);
// //       return null;
// //     }
// //   } catch (error) {
// //     // Access the status from error.response if it exists
// //     const status = error.response ? error.response.status : "No response";

// //     console.error(`Error occurred while fetching data: ${status}, ${error.message}`); // Log the error message
// //     console.error("Error details:", error); // Log full error details for debugging
// //     return null; // Return null or handle error as needed
// //   }
// // };


// // // import axios from "axios";

// // // const BASE_URL = "https://api.themoviedb.org/3";

// // // const headers = {
// // //   Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZjNiMDk2ZWI3OGEyMzQ3YmJhOWQ0ZTQxOTc0OWFmMiIsIm5iZiI6MTcyOTM2MTE0OC4wNTQxMiwic3ViIjoiNjcxMmIyYmM4ZTg0NDY1N2I3ZmI0NDI1Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.lqSz5sd7f84V1C-BkOp3k1dxAAJ9r0I459vqGqXlLms",
// // // };

// // // export const fetchDataFromApi = async (url, params) => {
// // //   console.log("Fetching data from API...");
// // //   console.log(`Full URL: ${BASE_URL + url}`);
  
// // //   // Log the parameters being sent
// // //   if (params) {
// // //     console.log("Parameters:", params);
// // //   } else {
// // //     console.log("No parameters provided.");
// // //   }

// // //   try {
// // //     const { data } = await axios.get(BASE_URL + url, {
// // //       headers,
// // //       params,
// // //     });

// // //     console.log("API Response:", data); // Log the response data
// // //     return data;
// // //   } catch (error) {
// // //     console.error("Error occurred while fetching data:", error.message); // Log the error message
// // //     console.error("Error details:", error); // Log full error details for debugging
// // //     return null; // Return null or handle error as needed
// // //   }
// // // };

// // // // // Example usage of fetchDataFromApi
// // // // const getMovieDetails = async (movieId) => {
// // // //   console.log(`Requesting details for movie ID: ${movieId}`);
// // // //   const movieData = await fetchDataFromApi(`/movie/${movieId}`);
// // // //   if (movieData) {
// // // //     console.log("Fetched movie data successfully:", movieData);
// // // //   } else {
// // // //     console.log("Failed to fetch movie data.");
// // // //   }
// // // // };

// // // // // Call the function to test
// // // // getMovieDetails(550); // Replace with any movie ID you want to test

// // // // import axios from "axios";

// // // // const BASE_URL = "https://api.themoviedb.org/3";
// // // // // const BASE_URL = "https://api.themoviedb.org/3/movie/550";
// // // // // const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;

// // // // // const BASE_URL = 'https://moviesdatabase.p.rapidapi.com/titles/series/%7BseriesId%7D';
// // // // // const TMDB_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZjNiMDk2ZWI3OGEyMzQ3YmJhOWQ0ZTQxOTc0OWFmMiIsIm5iZiI6MTcyOTM2MTE0OC4wNTQxMiwic3ViIjoiNjcxMmIyYmM4ZTg0NDY1N2I3ZmI0NDI1Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.lqSz5sd7f84V1C-BkOp3k1dxAAJ9r0I459vqGqXlLms';

// // // // const headers = {
// // // //   Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZjNiMDk2ZWI3OGEyMzQ3YmJhOWQ0ZTQxOTc0OWFmMiIsIm5iZiI6MTcyOTM2MTE0OC4wNTQxMiwic3ViIjoiNjcxMmIyYmM4ZTg0NDY1N2I3ZmI0NDI1Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.lqSz5sd7f84V1C-BkOp3k1dxAAJ9r0I459vqGqXlLms",
// // // // };

// // // // export const fetchDataFromApi = async (url, params) => {
// // // //   try {
// // // //     const { data } = await axios.get(BASE_URL + url, {
// // // //       headers,
// // // //       params,
// // // //     });
// // // //     return data;
// // // //   } catch (error) {
// // // //     console.log(error);
// // // //     return error;
// // // //   }
// // // // };
