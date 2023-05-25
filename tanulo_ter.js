import Lecke from "./lecke.js";
import Aszinkron from "./Asszinkron.js";

class TanuloTer {
  #vegpont;
  constructor() {
    console.log("termékek");
    /**itt történik meg az adatok beolvasása */
    const aszinkron = new Aszinkron();
    this.#vegpont = "leckek.json";
    aszinkron.adatBeolvas(this.#vegpont, this.#termekMegjelenito);
  }

  #termekMegjelenito(lista) {
    console.log(lista);
    let sajtalista = lista;
    //a lista -t a JSON fájlból kapjuk
    //megjeleníti a Termek-ből példányosított objketumokat
    const ARTICLE = $("article");
    for (let i = 0; i < sajtalista.length; i++) {
      const le = new Termek(ARTICLE, sajtalista[i], i);
    }
  }
}
export default TanuloTer;
