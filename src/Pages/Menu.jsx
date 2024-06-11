import React, { useCallback, useEffect, useState } from 'react';
import Image6 from '../assets/Images/image6.jpg';
import Image7 from '../assets/Images/image7.avif';
import Image8 from '../assets/Images/image8.jpg';
import Image9 from '../assets/Images/image9.avif';
import Image10 from '../assets/Images/image10.avif';
import Image11 from '../assets/Images/image11.webp';
import Image12 from '../assets/Images/image12.png';

const Menu = () => {

  const [movieList,setMovieList] = useState([])

  useEffect(useCallback(()=>{
    fetch("https://cinemeta-catalogs.strem.io/top/catalog/movie/top.json",{method:"GET"})
        .then(res=>res.json())
        .then(({metas})=> setMovieList(metas))
        .catch(err=>console.log(err))
  },[]),[])

  return (
    <>
    {
      (movieList.length>0 && movieList.map(({name="",description="",poster="",imdb_id="",cast=[]})=><div className="mb-8 p-6 bg-red-100 rounded-lg shadow-md flex items-center gap-4">
               <img src={poster} alt="Air Max 270" className="w-1/3 h-64 object-cover rounded-md" />
               <div>
                 <a href={`/shoe?imdb_id=${imdb_id}`}><h2 className="text-2xl font-bold mb-2">{name}</h2></a>
                 <p className="text-gray-700">{description}</p>
                 <ul className="mt-2 list-disc list-inside text-gray-600">
                  {cast.map((castName)=><li>{castName}</li>)}
                 </ul>
               </div>
             </div>)
      )
    }
    </>

  // return (
  //   <div className="p-4 bg-gray-100 flex justify-center">
  //     <div className="w-full max-w-3xl">
  //       <div className="mb-8 p-6 bg-red-100 rounded-lg shadow-md flex items-center gap-4">
  //         <img src={Image6} alt="Air Max 270" className="w-1/3 h-64 object-cover rounded-md" />
  //         <div>
  //           <a href='/shoe?name=airmax-270'><h2 className="text-2xl font-bold mb-2">Air Max 270</h2></a>
  //           <p className="text-gray-700">Experience the comfort and style of the Air Max 270, featuring a large air unit for a smooth ride and a modern design. Perfect for everyday wear, these sneakers combine aesthetics with performance.</p>
  //           <ul className="mt-2 list-disc list-inside text-gray-600">
  //             <li>Large Air Max unit for superior cushioning</li>
  //             <li>Durable rubber outsole for traction</li>
  //             <li>Breathable mesh upper</li>
  //             <li>Available in various colorways</li>
  //           </ul>
  //         </div>
  //       </div>
  //       <div className="mb-8 p-6 bg-blue-100 rounded-lg shadow-md flex items-center gap-4">
  //         <img src={Image7} alt="Adidas Ultraboost" className="w-1/3 h-64 object-cover rounded-md" />
  //         <div>
  //           <h2 className="text-2xl font-bold mb-2">Adidas Ultraboost</h2>
  //           <p className="text-gray-700">The Adidas Ultraboost provides unmatched energy return and comfort with its responsive Boost midsole and Primeknit upper. Designed for both performance and style, these sneakers are a top choice for runners and casual wearers alike.</p>
  //           <ul className="mt-2 list-disc list-inside text-gray-600">
  //             <li>Responsive Boost midsole</li>
  //             <li>Primeknit upper for adaptive support</li>
  //             <li>Continental™ Rubber outsole for extraordinary traction</li>
  //             <li>Sleek design with various style options</li>
  //           </ul>
  //         </div>
  //       </div>
  //       <div className="mb-8 p-6 bg-green-100 rounded-lg shadow-md flex items-center gap-4">
  //         <img src={Image8} alt="Nike Air Force 1" className="w-1/3 h-64 object-cover rounded-md" />
  //         <div>
  //           <h2 className="text-2xl font-bold mb-2">Nike Air Force 1</h2>
  //           <p className="text-gray-700">The Nike Air Force 1 remains a timeless classic, known for its versatile style and exceptional comfort. These sneakers are a staple for sneakerheads and casual wearers alike.</p>
  //           <ul className="mt-2 list-disc list-inside text-gray-600">
  //             <li>Premium leather upper</li>
  //             <li>Air-Sole unit for lightweight cushioning</li>
  //             <li>Perforations for ventilation</li>
  //             <li>Pivot points for smooth transitions</li>
  //           </ul>
  //         </div>
  //       </div>
  //       <div className="mb-8 p-6 bg-yellow-100 rounded-lg shadow-md flex items-center gap-4">
  //         <img src={Image9} alt="New Balance 990v5" className="w-1/3 h-64 object-cover rounded-md" />
  //         <div>
  //           <h2 className="text-2xl font-bold mb-2">New Balance 990v5</h2>
  //           <p className="text-gray-700">The New Balance 990v5 combines modern performance technology with a classic design. These sneakers offer comfort, durability, and a stylish look that's perfect for any occasion.</p>
  //           <ul className="mt-2 list-disc list-inside text-gray-600">
  //             <li>ENCAP midsole technology</li>
  //             <li>Dual-density foam collar</li>
  //             <li>Blown rubber outsole</li>
  //             <li>Made in the USA</li>
  //           </ul>
  //         </div>
  //       </div>
  //       <div className="mb-8 p-6 bg-purple-100 rounded-lg shadow-md flex items-center gap-4">
  //         <img src={Image10} alt="Puma RS-X" className="w-1/3 h-64 object-cover rounded-md" />
  //         <div>
  //           <h2 className="text-2xl font-bold mb-2">Puma RS-X</h2>
  //           <p className="text-gray-700">The Puma RS-X reinvents the retro running style with a bold, modern twist. These sneakers are built for those who want to stand out with a unique and trendy look.</p>
  //           <ul className="mt-2 list-disc list-inside text-gray-600">
  //             <li>RS (Running System) technology for cushioning</li>
  //             <li>Textile and mesh upper for breathability</li>
  //             <li>Bold color blocking</li>
  //             <li>Durable rubber outsole</li>
  //           </ul>
  //         </div>
  //       </div>
  //       <div className="mb-8 p-6 bg-pink-100 rounded-lg shadow-md flex items-center gap-4">
  //         <img src={Image11} alt="Reebok Classic Leather" className="w-1/3 h-64 object-cover rounded-md" />
  //         <div>
  //           <h2 className="text-2xl font-bold mb-2">Reebok Classic Leather</h2>
  //           <p className="text-gray-700">The Reebok Classic Leather is an iconic sneaker that has stood the test of time. With its sleek design and comfortable fit, it's a go-to choice for everyday wear.</p>
  //           <ul className="mt-2 list-disc list-inside text-gray-600">
  //             <li>Soft leather upper</li>
  //             <li>EVA midsole for lightweight cushioning</li>
  //             <li>High-abrasion rubber outsole for durability</li>
  //             <li>Timeless silhouette</li>
  //           </ul>
  //         </div>
  //       </div>
  //       <div className="mb-8 p-6 bg-teal-100 rounded-lg shadow-md flex items-center gap-4">
  //         <img src={Image12} alt="Asics Gel-Kayano 27" className="w-1/3 h-64 object-cover rounded-md" />
  //         <div>
  //           <h2 className="text-2xl font-bold mb-2">Asics Gel-Kayano 27</h2>
  //           <p className="text-gray-700">The Asics Gel-Kayano 27 is a top choice for runners seeking stability and comfort. These sneakers feature advanced technology to enhance your running experience.</p>
  //           <ul className="mt-2 list-disc list-inside text-gray-600">
  //             <li>GEL technology for shock absorption</li>
  //             <li>FlyteFoam Propel technology for enhanced bounce</li>
  //             <li>Dynamic DuoMax Support System</li>
  //             <li>Engineered mesh upper for breathability</li>
  //           </ul>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  );
}

export default Menu;
