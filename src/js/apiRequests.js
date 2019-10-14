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

const getComposerWorks = (composersArr, setScores) => {
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
  };

  $.ajax(settings).done(function(response) {
    setScores(response)
  });
};

const signInUser = (userData, setUser) => {
  const settings = {
    async: true,
    crossDomain: true,
    url: "http://localhost:5000/users/sign-in",
    method: "POST",
    headers: {
      
      "cache-control": "no-cache",
      "Access-Control-Allow-Origin": true,
    },
    processData: true,
    data: userData
  };

  $.ajax(settings).done(function(response) {
    setUser(response);
  });
}

const getComposers = (setComposers) => {
  const settings = {
    async: true,
    crossDomain: true,
    url: "http://localhost:5000/composers",
    method: "GET",
    headers: {
      "cache-control": "no-cache",
      "Access-Control-Allow-Origin": true,
    },
  };

  $.ajax(settings).done(function(response) {
    setComposers(response);
  });
}

export { 
  getComposerWorks, 
  getAllWorks,
  signInUser,
  getComposers 
};
