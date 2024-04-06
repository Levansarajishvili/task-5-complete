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

async function result(user) {
  try{
    const users = await logInUser (user, 12345);
    console.log("user", users);

    const videos = await userVideos(users.userEmail);
    console.log("videos", videos);

    const title = await videosDetails(videos[0]);
    console.log("title", title);
  }

  catch(err) {
    displayError(err);
  }
}

result("levan@gmail.com");

console.log("Finish");