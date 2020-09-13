import { useState, useEffect } from "react";

import API_KEY from "../api_keys";

// tell google which search engine to use
const CONTEXT_KEY = "64b667e2a8618b610";

const useGoogleSearch = (term) => {
  const [data, setData] = useState(null);

  // when used the custom hook, the terms were inserted
  // the useEffect hook will be fire off
  // when the term changed, the hook will be fire off again
  // the fetchData will call the api from the Google server
  // when the useEffect were fire off //
  useEffect(() => {
    // GET Resquest
    const fetchData = async () => {
      await fetch(
        `https://customsearch.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
      )
        .then((res) => res.json())
        .then((result) => {
          setData(result);
        });
    };
    fetchData();
  }, [term]);

  // return the result as an object called data
  return { data };
};

export default useGoogleSearch;
