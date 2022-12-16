
import { Navbar } from '../components/ui/Navbar'
import MarvelScreem from '../components/marvel/MarvelScreem';
import SearchSreem from '../components/search/SearchSreem';
import DcScreem from '../components/dc/DcScreem';
import { Routes, Route } from "react-router-dom";
import Hero from '../components/hero/Hero';

 export const DashoardRoute = () => {
  return (
      <>
   <Navbar/>
   <Routes>

   <Route path="marvel" element={<MarvelScreem />} />
   <Route path="dc" element={<DcScreem/>} />
   <Route path="search" element={<SearchSreem/>} />
   <Route path="hero/:heroid" element={<Hero/>}/>
   <Route path="/" element={<MarvelScreem />} />

 </Routes>
 </>
  )
}

