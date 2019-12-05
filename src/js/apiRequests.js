import $ from "jquery";
import config from "../config.json";

const baseURL = `${config.apiProtocol}://${config.apiHost}:${config.apiPort}`;

// ---------------------------- COMPOSERS API ----------------------------

/* 
:::::::::::::::::::
:: GET ALL WORKS ::
:::::::::::::::::::
*/
export const getAllWorks = () => {
  const settings = {
    async: true,
    crossDomain: true,
    url: baseURL + "/works",
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "cache-control": "no-cache"
    }
  };

  $.ajax(settings).done(function(response) {
    console.log(response);
  });
};

/* 
::::::::::::::::::::::::
:: GET COMPOSER WORKS ::
::::::::::::::::::::::::
*/

export const getComposerWorks = (composersArr, setScores) => {
  const settings = {
    async: true,
    crossDomain: true,
    url: baseURL + "/composer-works",
    method: "POST",
    headers: {
      "cache-control": "no-cache",
      "Access-Control-Allow-Origin": true
    },
    processData: true,
    data: { composers: composersArr }
  };

  $.ajax(settings).done(function(response) {
    setScores(response);
  });
};

/* 
::::::::::::::::::::
:: GET WORK BY ID ::
::::::::::::::::::::
*/

export const getWorkByID = (workData, stateMethods) => {
  const settings = {
    async: true,
    crossDomain: true,
    url: baseURL + "/work",
    method: "POST",
    headers: {
      "cache-control": "no-cache",
      "Access-Control-Allow-Origin": true
    },
    processData: true,
    data: workData
  };

  $.ajax(settings).done(function(response) {
    stateMethods.setSelectedScore(response);
  });
};

/* 
:::::::::::::::::::
:: GET COMPOSERS ::
:::::::::::::::::::
*/

export const getComposers = setComposers => {
  const settings = {
    async: true,
    crossDomain: true,
    url: baseURL + "/composers",
    method: "GET",
    headers: {
      "cache-control": "no-cache",
      "Access-Control-Allow-Origin": true
    }
  };

  $.ajax(settings).done(function(response) {
    setComposers(response);
  });
};

// ---------------------------- USER API ----------------------------

/* 
:::::::::::::::::
:: CREATE USER ::
:::::::::::::::::
*/

export const createUser = (userData, sm) => {
  const settings = {
    async: true,
    crossDomain: true,
    url: baseURL + "/users/create",
    method: "POST",
    headers: {
      "cache-control": "no-cache",
      "Access-Control-Allow-Origin": true
    },
    processData: true,
    data: userData
  };

  $.ajax(settings).done(function(response) {
    if (response.error) {
      
    } else {
      console.log(response)
      sm.setUser(response)
    }
  });
};

/* 
::::::::::::::::::
:: SIGN IN USER ::
::::::::::::::::::
*/

export const signInUser = (userData, sm) => {
  const settings = {
    async: true,
    crossDomain: true,
    url: baseURL + "/users/sign-in",
    method: "POST",
    headers: {
      "cache-control": "no-cache",
      "Access-Control-Allow-Origin": true
    },
    processData: true,
    data: userData
  };

  $.ajax(settings).done(function(response) {
    if (response.error) {
      sm.setSignInError(response.error);
    } else {
      sm.setUser(response);
    }
  });
};

/* 
::::::::::::::::::
:: CHANGE EMAIL ::
::::::::::::::::::
*/

export const changeUserEmail = (userData, sm) => {
  const settings = {
    async: true,
    crossDomain: true,
    url: baseURL + "/users/change-email",
    method: "POST",
    headers: {
      "cache-control": "no-cache",
      "Access-Control-Allow-Origin": true
    },
    processData: true,
    data: userData
  };

  $.ajax(settings).done(function(response) {
    console.log(response)
  });
};

/* 
:::::::::::::::::::::
:: CHANGE PASSWORD ::
:::::::::::::::::::::
*/

export const changeUserPassword = (userData, sm) => {
  const settings = {
    async: true,
    crossDomain: true,
    url: baseURL + "/users/change-password",
    method: "POST",
    headers: {
      "cache-control": "no-cache",
      "Access-Control-Allow-Origin": true
    },
    processData: true,
    data: userData
  };

  $.ajax(settings).done(function(response) {
    if(response.error){
      sm.setPasswordChangeMessage({message: response.error})
    } else {
      sm.setPasswordChangeMessage({message: "Password successfully updated"})
    }
  });
};


/* 
::::::::::::::::::::
:: CREATE COMMENT ::
::::::::::::::::::::
*/

export const createComment = (commentData, sm) => {
  const settings = {
    async: true,
    crossDomain: true,
    url: baseURL + "/comments/create",
    method: "POST",
    headers: {
      "cache-control": "no-cache",
      "Access-Control-Allow-Origin": true
    },
    processData: true,
    data: commentData
  };

  $.ajax(settings).done(function(response) {
    console.log(response)
  });
};

/* 
:::::::::::::::::::::::::::
:: GET USER-WORK COMMENT ::
:::::::::::::::::::::::::::
*/

// Gets a users comment on a specific work
export const getUserWorkComment = (userWorkData, sm) => {
  const settings = {
    async: true,
    crossDomain: true,
    url: baseURL + "/comments/user-work-comments",
    method: "POST",
    headers: {
      "cache-control": "no-cache",
      "Access-Control-Allow-Origin": true
    },
    processData: true,
    data: userWorkData
  };

  return new Promise(resolve => {
    $.ajax(settings).done(function(response) {
      if (response.length){
        resolve(response[0])
      } else {
        resolve(null)
      }
    });
  })

};

/* 
::::::::::::::::::
:: EDIT COMMENT ::
::::::::::::::::::
*/

export const editComment = (data, sm) => {
  const settings = {
    async: true,
    crossDomain: true,
    url: baseURL + "/comments/edit-comment",
    method: "POST",
    headers: {
      "cache-control": "no-cache",
      "Access-Control-Allow-Origin": true
    },
    processData: true,
    data: data
  };

  $.ajax(settings).done(function(response) {
    console.log(response)
  });

};

/* 
:::::::::::::::::::::::
:: GET USER COMMENTS ::
:::::::::::::::::::::::
*/

export const getUserComments = (data, sm) => {
  const settings = {
    async: true,
    crossDomain: true,
    url: baseURL + "/comments/user-comments",
    method: "POST",
    headers: {
      "cache-control": "no-cache",
      "Access-Control-Allow-Origin": true
    },
    processData: true,
    data: data
  };

  $.ajax(settings).done(function(response) {
    sm.setUserComments(response)
  });

};

/* 
::::::::::::::::::::
:: DELETE COMMENT ::
::::::::::::::::::::
*/

export const deleteComment = (data, sm) => {
  const settings = {
    async: true,
    crossDomain: true,
    url: baseURL + "/comments/delete-comment",
    method: "POST",
    headers: {
      "cache-control": "no-cache",
      "Access-Control-Allow-Origin": true
    },
    processData: true,
    data: data
  };

  $.ajax(settings).done(function(response) {
    console.log(response)
    // add code here to remove deleted comment or refetch comments
  });

};

