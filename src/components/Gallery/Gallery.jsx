import data from '../../data/data.json';
import './Gallery.css';
import Card from "../Card/Card";


// const cardsPage = 6;
// const totalCards = data.length;

export default function Gallery() {

    // const [cardsPage, setCardsPage] = useState(6)

    // useEffect(() => {
    //   const handleResize = () => {
    //     if (window.innerWidth < 963) {
    //       setCardsPage(3);
    //     } else {
    //       setCardsPage(6);
    //     }
    //   };

    //   handleResize();

    //   window.addEventListener("resize", handleResize);

    //   return () => {
    //     window.removeEventListener("resize", handleResize);
    //   };
    // }, []);
    
    // const visibleCards = data.slice(0, cardsPage)

    return (

        <div className="container_gallery">
          {data.map((item) => (
            <Card key={item.id} id={item.id} title={item.title} cover={item.cover} />
          ))}
        </div>
    );
  }