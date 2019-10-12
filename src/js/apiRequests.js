import $ from "jquery";

const getAllWorks = () => {
  const settings = {
    async: true,
    crossDomain: true,
    url: "http://localhost:5000/works",
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "cache-control": "no-cache",
    }
  };

  $.ajax(settings).done(function(response) {
    console.log(response);
  });
};

const getComposerWorks = composersArr => {
  const settings = {
    async: true,
    crossDomain: true,
    url: "http://localhost:5000/composer-works",
    method: "POST",
    headers: {
      "cache-control": "no-cache",
      "Access-Control-Allow-Origin": true,
    },
    processData: true,
    data: { composers: composersArr }
    // data: encodeURIComponent(JSON.stringify({composers: composersArr}))
    // data: "{\"composers\": [\"Beethoven, Ludwig van\", \"Mozart, Wolfgang Amadeus\"] }"
  };

  $.ajax(settings).done(function(response) {
    console.log(response);
  });
};

export { getComposerWorks, getAllWorks };
