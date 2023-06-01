import Lecke from "./lecke.js";
import Aszinkron from "./Asszinkron.js";

class TanuloTer {
  #vegpont;
  constructor() {
    const aszinkron = new Aszinkron();
    this.#vegpont = "leckek.json";
    aszinkron.adatBeolvas(this.#vegpont, this.#termekMegjelenito.bind(this));
  }

  #termekMegjelenito(lista) {
    console.log(lista);
    
    const ARTICLE = $("article");
    
    for (let i = 0; i < lista.length; i++) {
      const le = new Lecke(lista[i], i, ARTICLE);  
    }
  }
}

export default TanuloTer;