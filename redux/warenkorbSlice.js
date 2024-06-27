import { createSlice } from "@reduxjs/toolkit";

const warenkorbSlice = createSlice({
  name: "warenkorb",
  initialState: {
      produkt: [],
      gesamtbetrag: 0,
      wAnzahl: 0
  },
  reducers: {
    addProdukte: (state, action) =>{
      state.produkt.push(action.payload);
      state.wAnzahl += 1;
      state.gesamtbetrag += action.payload.preis * action.payload.menge;
    },
    leeren: (state) =>{
      state = initialState;
    },
     loescheProdukt: (state, action) =>{
      const leftProdukte = state.produkt.filter((produkt) => produkt._id !== action.payload._id);
      state.produkt = leftProdukte
      state.wAnzahl -= 1;
      state.gesamtbetrag -= action.payload.preis * action.payload.menge;
    }
  },
})

export const {addProdukte, leeren, loescheProdukt} = warenkorbSlice.actions;
export default warenkorbSlice.reducer;
