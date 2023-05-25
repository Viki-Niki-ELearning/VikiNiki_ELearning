class Aszinkron {
  constructor() {
    console.log("Aszinkron");
  }

  adatBeolvas(vegpont, callbackFv) {
    //promisse
    fetch(vegpont, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        callbackFv(data);
      })
      .catch((error) => console.log(error));
  }
}

export default Aszinkron;
