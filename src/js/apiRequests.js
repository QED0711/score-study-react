import $ from "jquery";
import config from '../config.json';

const baseURL = `${config.apiProtocol}://${config.apiHost}:${config.apiPort}`

// ---------------------------- COMPOSERS API ----------------------------

const getAllWorks = () => {
  const settings = {
    async: true,
    crossDomain: true,
    url: baseURL + "/works",
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
    url: baseURL + "/composer-works",
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

const getComposers = (setComposers) => {
  const settings = {
    async: true,
    crossDomain: true,
    url: baseURL + "/composers",
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


// ---------------------------- USER API ----------------------------

const signInUser = (userData, sm) => {
  const settings = {
    async: true,
    crossDomain: true,
    url: baseURL + "/users/sign-in",
    method: "POST",
    headers: {
      
      "cache-control": "no-cache",
      "Access-Control-Allow-Origin": true,
    },
    processData: true,
    data: userData
  };

  $.ajax(settings).done(function(response) {
    console.log(response)
    if(response.error){
      sm.setSignInError(response.error)
    } else {
      sm.setUser(response);
    }
  });
}

export { 
  getComposerWorks, 
  getAllWorks,
  getComposers,

  signInUser,
};
