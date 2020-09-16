import React from "react";

import "./../paalpagestyles.css";

const PaalPage = () => {
  var mysteryHeaders = [
    "T20gUG9rZW1vbjRDYXNo",
    "Vmlzam9u",
    "TGVkZWxzZW4=",
    "QmVkcmlmdGVucyBwcmlzZXIgb2cgdXRtZXJrZWxzZXI=",
    "SW5ubGVpZGUga29uc3VsZW50ZXI="
  ];

  // Create this function to decode the headers
  var correctHeaders = mysteryHeaders.map((mysteryHeader) =>
    atob(mysteryHeader)
  );

  // Add each team member into the consultants variable.
  var consultants = [
    {
      name: "Konsulent 1",
      position: "Utvikler",
      imgUrl:
        "https://www.pngkit.com/png/detail/62-623222_pokemon-png-pack-ash-ketchum.png"
    },
    {
      name: "Konsulent 2",
      position: "Tester",
      imgUrl: "https://www.clipartkey.com/mpngs/m/8-88479_pokemon-misty-png.png"
    },
    {
      name: "Konsulent 3",
      position: "Prosjektleder",
      imgUrl:
        "https://www.kindpng.com/picc/m/253-2533471_brock-pokemon-png-transparent-png.png"
    }
  ];

  // Create function that returns a consultant card for each object in the consultants variable
  var consultantCards = consultants.map((item) => {
    return (
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={item.imgUrl} alt="new" className="flip-card-image" />
          </div>
          <div className="flip-card-back">
            <h1>{item.name}</h1>
            <h2>{item.position}</h2>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div
      style={{ fontFamily: "sans-serif", maxWidth: "900px", margin: "auto" }}
    >
      <h1>{correctHeaders[0]}</h1>
      <h2>{correctHeaders[1]}</h2>
      <p style={{ fontStyle: "italic", fontSize: "20px" }}>
        Pokémon4Cash streber etter å tilby søte, kamplare og dødelige kjæledyr
        til alle og enhver!
      </p>
      <h2>{correctHeaders[2]}</h2>
      <div className="flip-card-container">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img
                src="https://www.pngkit.com/png/detail/62-623222_pokemon-png-pack-ash-ketchum.png"
                alt="new"
                className="flip-card-image"
              />
            </div>
            <div className="flip-card-back">
              <h1>Ash</h1>
              <h2>Daglig Leder</h2>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img
                src="https://www.clipartkey.com/mpngs/m/8-88479_pokemon-misty-png.png"
                alt="new"
                className="flip-card-image"
              />
            </div>
            <div className="flip-card-back">
              <h1>Misty</h1>
              <h2>IT-direktør</h2>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img
                src="https://www.kindpng.com/picc/m/253-2533471_brock-pokemon-png-transparent-png.png"
                alt="new"
                className="flip-card-image"
              />
            </div>
            <div className="flip-card-back">
              <h1>Brock</h1>
              <h2>Trener</h2>
            </div>
          </div>
        </div>
      </div>
      <h2>{correctHeaders[3]}</h2>
      <div>
        <img
          src="https://vignette.wikia.nocookie.net/pokemon/images/2/24/Boulderbadge.png/revision/latest/scale-to-width-down/50?cb=20100418182312"
          alt="new"
          className="badge-image"
        ></img>
        <img
          src="https://vignette.wikia.nocookie.net/pokemon/images/4/4d/Cascadebadge.png/revision/latest?cb=20140907085215"
          alt="new"
          className="badge-image"
        ></img>
        <img
          src="https://vignette.wikia.nocookie.net/pokemon/images/a/a8/Thunderbadge.png/revision/latest?cb=20100418182457"
          alt="new"
          className="badge-image"
        ></img>
        <img
          src="https://vignette.wikia.nocookie.net/pokemon/images/b/b5/Rainbow_Badge.png/revision/latest?cb=20141009005938"
          alt="new"
          className="badge-image"
        ></img>
        <img
          src="https://vignette.wikia.nocookie.net/pokemon/images/6/64/Soulbadge.png/revision/latest?cb=20100418182548"
          alt="new"
          className="badge-image"
        ></img>
        <img
          src="https://vignette.wikia.nocookie.net/pokemon/images/1/1c/Marshbadge.png/revision/latest/scale-to-width-down/49?cb=20100418182532"
          alt="new"
          className="badge-image"
        ></img>
        <img
          src="https://vignette.wikia.nocookie.net/pokemon/images/d/d9/Volcanobadge.png/revision/latest?cb=20081229171449"
          alt="new"
          className="badge-image"
        ></img>
        <img
          src="https://vignette.wikia.nocookie.net/pokemon/images/c/cc/Earthbadge.png/revision/latest/scale-to-width-down/50?cb=20101029071826"
          alt="new"
          className="badge-image"
        ></img>
      </div>
      <h2>{correctHeaders[4]}</h2>
      <div className="flip-card-container">{consultantCards}</div>
    </div>
  );
};

export default PaalPage;
