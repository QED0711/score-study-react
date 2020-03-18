import $ from "jquery";
import config from "../config.json";


let API_PROTOCOL, API_HOST, API_PORT

console.log(process.env)
if (process.env.NODE_ENV === "development") {
  API_PROTOCOL = config.apiProtocolDev
  API_HOST = config.apiHostDev || window.location.hostname
  API_PORT = config.apiPortDev
}

if (process.env.NODE_ENV === "production") {
  API_PROTOCOL = config.apiProtocolProd
  API_HOST = config.apiHostProd
  API_PORT = config.apiPortProd
}

// const baseURL = `${API_PROTOCOL}://${API_HOST}:${API_PORT}`;

const baseURL = "https://p4lo5ngzn5.execute-api.us-east-2.amazonaws.com/score-study/"

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

  $.ajax(settings).done(function (response) {
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
    url: baseURL + "/getworksbycomposers",
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    data: JSON.stringify({ composers: composersArr })
  };

  $.ajax(settings).done(function (response) {
    setScores(response);
  });
};

// getComposerWorks(["Beethoven, Ludwig van"])

/* 
::::::::::::::::::::
:: GET WORK BY ID ::
::::::::::::::::::::
*/

export const getWorkByID = (workData, stateMethods) => {
  const settings = {
    async: true,
    crossDomain: true,
    url: baseURL + "getworkbyid",
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    data: JSON.stringify(workData)
  };

  $.ajax(settings).done(function (response) {
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
    url: baseURL + "getallcomposers",
    method: "GET",
  };

  $.ajax(settings).done(function (response) {
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
    url: baseURL + "createuser",
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    data: JSON.stringify({ data: userData })
  };

  $.ajax(settings).done(function (response) {
    if (response.error) {
      sm.setCreateUserError(response.error)
    } else {
      console.log(response)
      sm.setUser(response)
    }
  });
};

// createUser({username: "testing", email: "testing@email.com", password: "123"})



/* 
::::::::::::::::::
:: SIGN IN USER ::
::::::::::::::::::
*/

export const signInUser = (userData, sm) => {
  const settings = {
    async: true,
    crossDomain: true,
    url: baseURL + "signinuser",
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    data: JSON.stringify({ data: userData })
  };

  $.ajax(settings).done(function (response) {
    if (response.error) {
      sm.setSignInError(response.error);
    } else {
      sm.setUser(response);
    }
  });
};

// signInUser({username: "LAMBDA", password: "lambda"})

/* 
::::::::::::::::::
:: CHANGE EMAIL ::
::::::::::::::::::
*/

export const changeUserEmail = (userData, sm) => {
  const settings = {
    async: true,
    crossDomain: true,
    url: baseURL + "changeuseremail",
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    data: JSON.stringify({ data: userData })
  };

  $.ajax(settings).done(function (response) {
    console.log(response)
  });
};

// changeUserEmail({username: "Lambda", "userID": "5e6e7f867440360007d73085","email": "lambda@aws.com"})

/* 
:::::::::::::::::::::
:: CHANGE PASSWORD ::
:::::::::::::::::::::
*/

export const changeUserPassword = (userData, sm) => {
  const settings = {
    async: true,
    crossDomain: true,
    url: baseURL + "changeuserpassword",
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    data: JSON.stringify({ data: userData })
  };

  $.ajax(settings).done(function (response) {
    if (response.error) {
      sm.setPasswordChangeMessage({ message: response.error, error: 1 })
    } else {
      sm.setPasswordChangeMessage({ message: "Password successfully updated" })
    }
  });
};

// changeUserPassword({"username": "LAMBDA",
// "userID": "5e6e7f867440360007d73085",
// "currentPassword": "postman",
// "newPassword": "lambda"})


/* 
::::::::::::::::::::
:: CREATE COMMENT ::
::::::::::::::::::::
*/

export const createComment = (commentData, sm) => {
  const settings = {
    async: true,
    crossDomain: true,
    url: baseURL + "createcomment",
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    data: JSON.stringify({ data: commentData })
  };

  $.ajax(settings).done(function (response) {
    console.log(response)
  });
};

// createComment({
//   "userID": "5dc7f0dad2b8362382cbaa81",
//   "workID": "Smetana, Bedřich-3 Album Leaves, Op.3",
//   "scoreURL": "http://ks.imslp.net/files/imglnks/usimg/1/1f/IMSLP73153-PMLP146546-Smetana--To-Robert-Schumann-Op3-No1--V-Urbanek.pdf",
//   "content": "COMMENT FROM POSTMAN"
// })

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
    $.ajax(settings).done(function (response) {
      if (response.length) {
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
    url: baseURL + "editcomment",
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    data: JSON.stringify({ data })
  };

  $.ajax(settings).done(function (response) {
    console.log(response)
  });

};

// editComment({
//   "commentID": "5e71f7dcce2c9800089e8a94",
//   "userID": "5dc7f0dad2b8362382cbaa81",
//   "workID": "Smetana, Bedřich-3 Album Leaves, Op.3",
//   "content": "NEWER CONTENT FROM API TEST"
// })

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

  $.ajax(settings).done(function (response) {
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

  $.ajax(settings).done(function (response) {
    console.log(response)
    // add code here to remove deleted comment or refetch comments
  });

};


/* 
::::::::::::::::::::::::
:: GET OTHER COMMENTS ::
::::::::::::::::::::::::
*/

export const getWorkComments = (data, sm) => {
  const settings = {
    async: true,
    crossDomain: true,
    url: baseURL + "/comments/work-comments",
    method: "POST",
    headers: {
      "cache-control": "no-cache",
      "Access-Control-Allow-Origin": true
    },
    processData: true,
    data: data
  };

  $.ajax(settings).done(function (response) {
    sm.setSelectedScoreComments(response)
  });

};

