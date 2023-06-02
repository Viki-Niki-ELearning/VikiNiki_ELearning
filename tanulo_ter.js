import Lecke from "./lecke.js";
import Aszinkron from "./Asszinkron.js";

class TanuloTer {
  #vegpont;
  constructor() {
    const aszinkron = new Aszinkron();
    this.#vegpont = "leckek.json";
    aszinkron.adatBeolvas(this.#vegpont, this.#termekMegjelenito.bind(this));
  }

  #termekMegjelenito(adat) {
    const LISTA = adat.leckek;
    const ARTICLE = $("article");

    for (let i = 0; i < LISTA.length; i++) {
      let le = new Lecke(LISTA[i], i, ARTICLE);
    }
  }
}

export default TanuloTer;
