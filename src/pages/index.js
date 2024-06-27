import ProduktListe from "../../komponenten/ProduktListe";
import Slider from "../../komponenten/Slider";
import '../styles/Home.module.css'
import mongodb from "../../utils/mongodb";
import Produkt from "../../models/Produkt";


export default function Home({produkte}) {
  return (
    <div className="container">
   <Slider></Slider>
  <ProduktListe produkte={produkte}/>
  </div>
  );
}

export async function getServerSideProps() {
  await mongodb.dbConnect();
  const produkte = await Produkt.find({}).lean();
  return {
    props: {
      produkte: JSON.parse(JSON.stringify(produkte))
    }
  }
}
