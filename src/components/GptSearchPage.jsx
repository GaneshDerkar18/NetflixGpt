import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef} from "react";
import { API_OPTIONS } from "../utils/constants";
import geminiai from "../utils/gemini";
import { addGptMoviesResult } from "../utils/gptSlice";

const GptSearchPage = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch= useDispatch();

  const searchMovie = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",API_OPTIONS
    );
    const json= await data.json();
    return json.results;

    
  };

  const handleSearch = async (e) => {
    const query = searchText.current.value;

    const getQuery = await geminiai.models.generateContent({
      model: "gemini-2.0-flash",
      contents:
        "acts as movie recommendation system and suggest some movies for the query " +
        query +
        ". Only give me names of 5 movies, comma seperatede like the example result given ahead: Andaz Apna Apna, Don, War, Koi Mil gaya, Raid",
    });

      if (!getQuery) {
      // TODO: Write Error Handling
    }
    console.log(await getQuery.text);
    const getMovies =await getQuery.text.split(",");
    const promiseArray= getMovies.map(movie=>searchMovie(movie));
    console.log("searchResult",promiseArray)
    const tmdbResults= await Promise.all(promiseArray);

    console.log(tmdbResults);
    dispatch(addGptMoviesResult({movieNames:getMovies,movieResults:tmdbResults}))
  };

  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">

      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          ref={searchText}
          className=" p-4 m-4 col-span-9 bg-slate-50"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
          onClick={handleSearch}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchPage;
