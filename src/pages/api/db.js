import mongodb from "../../../utils/mongodb";
import jsondb from "../../../jsondb/produkte";
import Produkt from "../../../models/Produkt";

export default async function handler(req, res) {
  await mongodb.dbConnect();
  await Produkt.deleteMany();
  await Produkt.insertMany(jsondb.produkte);
  //const produkte = await Produkt.find({});
  //await mongodb.dbDisconnect(); //Wenn ich diese Zeile auskommentiere kann ich die Daten öfters abfragen. Ansonsten bekomme ich einen Fehler da die Datenbank getrennt wird.
  //res.send({ text: 'Daten gespeichert' })
  res.send({ text: 'Daten gespeichert'})
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

}