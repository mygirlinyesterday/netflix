import axios from "axios";
import { useEffect, useState } from "react";
import requests from "../Requests";

const Main = () => {
//  console.log('in Main: ')
//   const [movies, setMovies] = useState([]);
//   const [movieURL, setMovieURL] = useState('');
//   const [movieTitle, setMovieTitle] = useState('')
//   const [movieReleased, setMovieReleased] = useState('')
  const [movie, setMovie] = useState({movieURL:'', movieTitle:'', movieReleased:'', movieOverview:''})
    
  useEffect(() => {
    //console.log('in Effect')
    axios.get(requests.requestsPoppular).then((Response) => {

        const data = Response.data.results // การ assign ค่าให้ data เเบบนี้ทำให้เราได้ค่าจาก Response ที่เเน่นอน โดยหลักเลี่ยงการนำเป็น set state เเล้วเรียกค่าใน state มาใช้อีกที (ค่าใน --> movies) เพราะการเรียกใช้ค่าใน state เราต้องรอให้การ set state ทำเสร็จก่อน
        // การ set state มีคิวการทำงาน ดังนั้นจึงไม่สามารถคาดหวังว่าการ set state จะได้ค่าใน state ทันที ( ต้องรอ )

        // setMovie(data)  // ขั้นตอนนี้ การ setMovies จะไม่สามารถคาดหวังได้ว่าจะทำการ set state เสร็จเมื่อไหร่ (movies จะต้องรอให้มีค่า)

        // console.log('data: ', data)
        const {known_for = []} = {} = data[Math.floor(Math.random() * data.length)]

        if( known_for.length ) {
            const pointer = Math.floor(Math.random() * data.length)
            const temp = {
                movieURL:  data[pointer].known_for[0].backdrop_path,
                movieTitle: data[pointer].known_for[0].title,
                movieReleased: data[pointer].known_for[0].release_date,
                movieOverview: data[pointer].known_for[0].overview,
            }
            setMovie(temp)

        } else {
            setMovie({movieURL:'', movieTitle:'', movieReleased:'', movieOverview:''})
        }
        
        
    }).catch((e)=>{
        console.log(e)
    })
  },[])
  
  const truncate = (str, num) => {
    if ( str?.length > num ){
        return str.slice(0, num) + '...'
    } else {
        return str
    }
  }

  return (
    <div className="w-full h-[550px] text-white">
        <div className="w-full h-full">
            <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
            { movie.movieURL && <img className="w-full h-full object-cover" src={`https://image.tmdb.org/t/p/original/${movie.movieURL}` } alt={movie.movieTitle} /> }
            <div className="absolute w-full top-[20%] p4 md:p8">
                { movie.movieTitle && <h1 className="text-3xl md:text-5xl font-bold">{movie.movieTitle}</h1>}
                <div className="my-4">
                    <button className="border bg-gray-300 text-black border-gray-300 py-2 px-5"> Play</button>
                    <button className="border text-white border-gray-300 py-2 px-5 ml-4"> Watch Later</button>
                </div>
                { movie.movieReleased && <p className="text-gray-400 text-sm">Released: { movie.movieReleased }</p> }
                { movie.movieOverview && <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">Overview: { truncate( movie.movieOverview, 150 )}</p> }
            </div>
        </div>
    </div>
  )
};

export default Main;
