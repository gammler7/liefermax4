import Link from "next/link";
import Image from "next/image";
import { Badge } from "react-bootstrap";
import { useSelector } from "react-redux";

export default function Navigation() {
  const wAnzahl = useSelector((state) => state.warenkorb.wAnzahl);
  return (
    <div className="shadow sticky-top p-2 mb-2 bg-danger">
      <div className="d-flex justify-content-between align-items-center">
        <Link legacyBehavior href="/">
        <a>
        <Image src={'/bilder/logo.png'} alt='logo' width={180} height={75}/>
        </a>
        </Link>
        <Link legacyBehavior href="/warenkorb">
        <a>
        <Image src={'/bilder/warenkorb.png'} alt='warenkorb' width={30} height={30}/>
        <Badge pill bg="success">{wAnzahl}</Badge>
        </a>
        </Link>
      </div>
      </div>
  );
}
