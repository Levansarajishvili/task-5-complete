console.log("start");

const userDB = {
  "levan@gmail.com": [{ title: "video" }, { title: "video1" }],
  "irakli@gmail.com": [{ genre: "genre1" }, { genre: "genre2" }],
  "nino@gmail.com": [],
}

function displayError(errorMessage) {
  console.error(new Error(errorMessage));
}

function logInUser(email, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userDB[email]) {
        console.log("User already logged in: ", email);
        resolve({ userEmail: email });
      } else {
        reject("user not found");
      }
    }, 3000)
  })
}

function userVideos(email) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userDB[email].length) {
        resolve(userDB[email]);
      } else {
        reject("videos not found");
      }
    }, 2000)
  })
}

function videosDetails(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(video.title){
        resolve(video.title);
      }else{
        reject("title not found");
      }
    }, 2000)
  })
}

function result(user) {
  logInUser(user, 12345)
      .then((result) => {
          console.log("user:", user);
          return userVideos(result.userEmail);
      })
      .then((videos) => {
        console.log("videos:", videos);
        return videosDetails(videos[0]);
      })
      .then((title) => {
        console.log("title:", title);
      })
      .catch((error) => {
        displayError(error);
      })
}

result("nino@gmail.com");

console.log("Finish");