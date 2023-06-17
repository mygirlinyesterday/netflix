import axios from "axios";
import { useEffect, useState } from "react";
import Movie from "./Movie";
import {MdChevronRight, MdChevronLeft} from "react-icons/md"

const Row = ({ title, fetchURL }) => {
  const [movies, setMovies] = useState([]);


  useEffect(() => {
    axios.get(fetchURL).then((Response) => {
      const data = Response.data.results;
      setMovies(data);
    });
  }, []);

  const slideLeft = () => {
	var slider = document.getElementById('slider')
	slider.scrollLeft = slider.scrollLeft + 500
  }

  const slideRight = () => {
	var slider = document.getElementById('slider')
	slider.scrollLeft = slider.scrollLeft - 500
  }

  return (
    <div>
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center group">
		<MdChevronLeft onClick={slideLeft} className="bg-white text-red-400 left-0 rounded-full absolute opacity-20 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block" size={40}/>
			<div id={"slider"} className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative">
				{movies.map((items, id) => (
					<Movie key={id} items={items}/>
				))}
			</div>
		<MdChevronRight onClick={slideRight} className="bg-white text-red-400 right-0 rounded-full absolute opacity-20 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block" size={40}/>
      </div>
    </div>
  );
};

export default Row;

