import axios from 'axios'

/*
  STEP 1: using axios, send a GET request to the following URL
    https://api.github.com/users/morganwilliamson
*/

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/morganwilliamson/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

const entryPoint = document.querySelector('.cards')

function ghCardMaker({ imageURL, name, username, location, userURL, followers, following, bio }) {
  
  //Instantiating elements
  const userCard = document.createElement('div')
  const image = document.createElement('img')
  const heading = document.createElement('h3')
  const user = document.createElement('p')
  const geo = document.createElement('p')
  const link = document.createElement('a')
  const follower = document.createElement('p')
  const follows = document.createElement('p')
  const info = document.createElement('p')

  //Setting class names, attributes, and text content
  userCard.classList.add('card')
  heading.classList.add('name')
  user.classList.add('username')
  image.src = imageURL;
  /* Text Content for the following: name(heading), username(user), location(geo), profile(link), follower(Followers), follows(Following), info(Bio) */
  heading.textContent = `${name}`;
  user.textContent = `${username}`;
  geo.textContent = `Location: ${location}`;
  link.textContent = `Profile: ${userURL}`;
  follower.textContent = `Followers: ${followers}`;
  follows.textContent = `Following: ${following}`;
  info.textContent = `Bio: ${bio}`;

  //Creating the hierarchy
  userCard.append(image)
  userCard.append(heading)
  userCard.append(user)
  userCard.append(geo)
  userCard.append(link)
  userCard.append(follower)
  userCard.append(follows)
  userCard.append(info)

  //Interactivity(?)
  
  return userCard;
}


axios.get('https://api.github.com/users/morganwilliamson')
  .then(hubData => {
    const images = hubData.data.message;
    images.forEach(image => {
      const userCard = ghCardMaker({imageURL: image })
      entryPoint.appendChild(userCard);
    })
  })
  .catch(hubErr => {
    console.log(hubErr);
  })

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/