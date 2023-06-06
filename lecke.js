class Lecke {
  #adat;
  #id;

  constructor(adat, id, SZULOELEM) {
    this.#adat = adat;
    this.#id = id;

    let txt = "";
    txt += `<div class="rendez card col-lg-3 col-md-4 col-sm-6 p-0" style="width:300px">
      <div class="card-img-body">
        <h4 class="card-title">${this.#adat.cim}<br></h4>
      </div>
      <iframe src="${this.#adat.video}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <p class="card-text">Description: ${this.#adat.leiras} <br> </p>
      <button id="${this.#id}" type="button" class="btn btn-primary kattintott fekete" data-bs-toggle="modal" data-bs-target="#myModal">Mutat</button>
    </div>`;
    txt += "</div>";
    txt += "</div>";

    SZULOELEM.append(txt);

    this.GOMB = $(SZULOELEM).find(".kattintott:last-child");

    this.GOMB.on("click", () => {
      const MODALHEAD = $(".modal-title");
      MODALHEAD.html(`<h1>${this.#adat.cim}</h1>`);
      const MODALBODY = $(".modal-body");
      MODALBODY.html(`
        <iframe src="${this.#adat.video}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <br>
        <br>
        <p>
          <h2>Video text:</h2>
          ${this.#adat.szoveg}
        </p>
        <br>
        <br>
        <h2>Memorie game: Coming Soon</h2><br>
        <h2>Quiz: Coming Soon<br></h2>
      `);
    });
  }
}

export default Lecke;
