import "./styles.css";
import ArtistCard from "./components/ArtistCard";

// THIS IS A CHANGE

let artistData = {
  names: ["The Weeknd", "Lizzo", "Bad Bunny"],
  images: [
    "https://akns-images.eonline.com/eol_images/Entire_Site/2021330/rs_1200x1200-210430163406-1200-the-weeknd.jpg?fit=around%7C1200:1200&output-quality=90&crop=1200:1200;center,top",
    "https://media.allure.com/photos/630514200b069bdf8c93f72f/3:2/w_2571,h_1714,c_limit/lizzo%20side%20ponytail%20.png",
    "https://s1.ticketm.net/dam/a/010/aa178e43-b5e8-44aa-bc2b-8c5975412010_1419701_TABLET_LANDSCAPE_LARGE_16_9.jpg",
  ],
  famousSongs: [
    "Save Your Tears, I Can't Feel My Face, Blinding Lights",
    "About Damn Time, Truth Hurts, 2 Be Loved",
    "Me porto bonito, Neverita, Moscow Mule",
  ],
};

export default function App() {
  return (
    <div>
      <h1 className="title">MusicPedia</h1>
      <h2 className="subheading">Find out info about your favorite artists!</h2>
      <ArtistCard name={artistData.names[0]} />
    </div>
  );
}
