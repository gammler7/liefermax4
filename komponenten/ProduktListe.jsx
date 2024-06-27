import { Card, Button } from "react-bootstrap";
import Link from "next/link";

export default function ProduktListe({produkte}) {
  return (
    <div className="container">
<div className="row row-cols-3">
{produkte?.map((produkt) =>(
  <div key={produkt.name} className="mt-3 col">
    <Card>
<Link legacyBehavior href={`/produkte/${produkt.url}`} passHref>
<a>
  <Card.Img variant="top" src={produkt.bild}/>
</a>
</Link>
<Card.Body>
  <Card.Title>
    {produkt.name} {produkt.preis.toFixed(2)} €
  </Card.Title>
  <Card.Text>
    {produkt.beschreibung}

  </Card.Text>
  <Link legacyBehavior href={`/produkte/${produkt.url}`} passHref>
<a>
  <Button variant="danger">Bestellen</Button>
</a>
</Link>
</Card.Body>
    </Card>
    </div>
))}
</div>
<br></br>
  </div>
  );
}