import React,{useEffect} from "react";
import "./main.css";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineClipboardCheck } from "react-icons/hi";

import img1 from "../../Assets/img1.jpg";
import img2 from "../../Assets/img2.jpg";
import img3 from "../../Assets/img3.jpg";
import img4 from "../../Assets/img4.jpg";
import img5 from "../../Assets/img5.jpg";
import img14 from "../../Assets/img14.jpg";
import img7 from "../../Assets/img7.jpg";
import img8 from "../../Assets/img8.jpg";
import img9 from "../../Assets/img9.jpg";
import img10 from "../../Assets/img10.jpg";
import img11 from "../../Assets/img11.jpg";
import img6 from "../../Assets/img6.jpg";

import Aos from 'aos'
import 'aos/dist/aos.css'

const Data = [
  {
    id: 1,
    imgSrc: img1,
    destTitle: "Cappadocia",
    location: "Turkey",
    grade: "CULTURAL RELAX",
    fees: "₹80000",
    description: `Cappadocia is a magical region in central Turkey known for 
    its surreal landscapes, fairy chimneys, and ancient cave dwellings. 
    Visitors can experience stunning hot air balloon rides at sunrise, 
    offering panoramic views of valleys and rock formations.`,
  },
  {
    id: 2,
    imgSrc: img2,
    destTitle: 'Bali',
    location: 'Indonesia',
    grade: 'TROPICAL PARADISE',
    fees: '₹60000',
    description: `Bali is a tropical paradise filled with natural beauty,
    spiritual energy, and vibrant culture. From picturesque rice terraces
    in Ubud to sun-soaked beaches in Seminyak, every corner of the island
    has something to offer.`,
  },
  {
    id: 3,
    imgSrc: img3,
    destTitle: 'Paris',
    location: 'France',
    grade: 'ROMANTIC ESCAPE',
    fees: '₹120000',
    description: `Paris, the City of Light, is a timeless symbol of romance,
    art, and elegance. The Eiffel Tower, Notre-Dame Cathedral, and Louvre
    Museum are must-visit icons of global heritage. Take a scenic stroll along
    the Seine River, enjoy pastries in a Parisian café, or explore charming neighborhoods
    like Montmartre. `,
  },
  {
    id: 4,
    imgSrc: img4,
    destTitle: 'Kyoto',
    location: 'Japan',
    grade: 'CULTURAL HERITAGE',
    fees: '₹95000',
    description: `Kyoto is the spiritual heart of Japan, known for its ancient temples,
    geisha traditions, and serene beauty. Wander through the Arashiyama Bamboo Grove,
    explore Fushimi Inari’s iconic torii gates, and relax in traditional teahouses.
    The city offers a peaceful contrast to Tokyo’s modern buzz.`,
  },
  {
    id: 5,
    imgSrc: img5,
    destTitle: 'New York City',
    location: 'USA',
    grade: 'URBAN ADVENTURE',
    fees: '₹130000',
    description: `New York City is a thrilling blend of cultures, skyscrapers, and stories.
    Visit landmarks like Times Square, the Statue of Liberty, and Central Park. The city is a
    dream for food lovers, artists, and shoppers with something exciting on every block.
    Explore world-famous museums, Broadway shows, and lively boroughs like Brooklyn and Queens.
    `,
  },
  {
    id: 6,
    imgSrc: img14,
    destTitle: 'Santorini',
    location: 'Greece',
    grade: 'ISLAND ROMANCE',
    fees: '₹85000',
    description: `Santorini is one of the most romantic islands in the world, famous for its
    whitewashed villages and blue-domed churches. Perched on volcanic cliffs, the towns offer
    breathtaking views of the Aegean Sea. Watch the sunset in Oia, relax on black-sand beaches,
    and taste local wines in cliffside wineries.`,
  },
  {
    id: 7,
    imgSrc: img7,
    destTitle: 'Cape Town',
    location: 'South Africa',
    grade: 'NATURE & WILDLIFE',
    fees: '₹70000',
    description: `Cape Town is a city like no other, surrounded by mountains, beaches, and
    rich wildlife. Hike or take a cable car up Table Mountain for panoramic views of the city
    and sea. Visit Robben Island, go wine tasting in Stellenbosch, or relax at the V&A Waterfront.
    Cape Town is also the gateway to safaris and nature reserves.`,
  },
  {
    id: 8,
    imgSrc: img8,
    destTitle: 'Rome',
    location: 'Italy',
    grade: 'HISTORICAL EXPLORATION',
    fees: '₹98000',
    description: `Rome is a living museum where ancient history meets vibrant modern life.
    Visit the Colosseum, Roman Forum, and Vatican City all in one day. Savor authentic
    Italian pasta and gelato while walking down cobblestone streets. Each corner of the
    city tells a story, whether through art, ruins, or charming cafés.`,
  },
  {
    id: 9,
    imgSrc: img9,
    destTitle: 'Dubai',
    location: 'UAE',
    grade: 'LUXURY VACATION',
    fees: '₹110000',
    description: `Dubai dazzles with its futuristic skyline, desert adventures, and
    luxury lifestyle. Visit the Burj Khalifa, enjoy desert safaris, or relax on pristine beaches.
    The city offers world-class shopping, theme parks, and cultural experiences. From old
    souks to modern malls, tradition meets innovation at every turn.`,
  },
  {
    id: 10,
    imgSrc: img10,
    destTitle: 'Machu Picchu',
    location: 'Peru',
    grade: 'ADVENTURE TRIP',
    fees: '₹105000',
    description: `Machu Picchu is an ancient Incan citadel set high in the Andes Mountains.
    Reach it via a scenic train ride or a multi-day trek along the Inca Trail. The ruins
    offer a mystical experience with breathtaking views and rich history. It’s one of the
    most iconic and spiritual travel destinations in the world. `,
  },
  {
    id: 11,
    imgSrc: img11,
    destTitle: 'Banff',
    location: 'Canada',
    grade: 'MOUNTAIN RETREAT',
    fees: '₹90000',
    description: `Banff is a paradise for nature lovers, surrounded by snow-capped peaks,
    turquoise lakes, and pine forests. Located in Alberta’s Rockies, it’s perfect for hiking,
    skiing, and wildlife spotting. Lake Louise and Moraine Lake are postcard-perfect stops nearby.
    The air is crisp, the views are endless, and the peace is unmatched.`,
  },
  {
    id: 12,
    imgSrc: img6,
    destTitle: 'Maldives',
    location: 'Indian Ocean',
    grade: 'LUXURY ISLAND',
    fees: '₹150000',
    description: `The Maldives is the ultimate island escape with overwater villas,
    white-sand beaches, and crystal-clear waters. Dive into vibrant coral reefs or
    simply relax under the sun. Each resort feels like a private slice of paradise
    with world-class service.`,
  },
];

const Main = () => {

  useEffect(()=>{
      Aos.init({duration:2000})
    },[])

  return (
    <section className="main container section">

      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">
          Most Visited destinations
        </h3>
      </div>

      <div className="secContent grid">
        {
          Data.map(({id, imgSrc, destTitle, location, grade, fees, 
            description})=>{
              return(
                <div key={id} data-aos="fade-up" className="singleDestination">
                  <div className="imageDiv">
                    <img src={imgSrc} alt={destTitle} />
                  </div>

                  <div className="cardInfo">
                    <h4 className="destTitle">{destTitle}</h4>
                    <span className="continent flex"><HiOutlineLocationMarker className="icon"/>
                      <span className="name">{location}</span>
                    </span>

                    <div className="fees flex">
                      <div className="grade">
                        <span>{grade}<small>+1</small></span>
                      </div>
                      <div className="price">
                        <h5>{fees}</h5>
                      </div>
                    </div>
                    <div className="desc">
                      <p>{description}</p>
                    </div>

                    <button className="btn flex">
                      DETAILS <HiOutlineClipboardCheck/>
                    </button>
                  </div>
                
                </div>
              )
          })
        }
      </div>
      
    </section>
  )
}

export default Main;
