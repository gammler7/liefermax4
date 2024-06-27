import mongodb from "../../../utils/mongodb";
import jsondb from "../../../jsondb/produkte";
import Produkt from "../../../models/Produkt";

export default async function handler(req, res) {
  try {
    // Verbindung herstellen
    await mongodb.dbConnect();

    // Datenbankoperationen
    await Produkt.deleteMany();
    await Produkt.insertMany(jsondb.produkte);
    const produkte = await Produkt.find({});

    // Antwort senden
    res.status(200).send(produkte);
  } catch (error) {
    console.error("Datenbankfehler:", error);
    res.status(500).send({ error: "Ein Fehler ist aufgetreten" });
  } finally {
    // Verbindung trennen, auch bei Fehlern
    await mongodb.dbDisconnect();
  }
}
