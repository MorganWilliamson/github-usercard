import axios from 'axios'

/*
STEP 1: using axios, send a GET request to the following URL
https://api.github.com/users/morganwilliamson
*/

axios.get('https://api.github.com/users/morganwilliamson')
  .then(res => {
    ghCardMaker(res.data);
  });

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

const followersArray = ['tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell'];

followersArray.forEach(item =>{
  axios.get(`https://api.github.com/users/${item}`)
    .then(res =>{
      ghCardMaker(res.data);
    });
});

axios.get(`https://api.gitup.com/users/${followersArray}`)
  .then(res => {
    axios.get(res.data['followers_url'])
      .then(res => {
        res.data.forEach(item => {
          axios.get(item['url'])
          .then(res => {
            ghCardMaker(res.data);
          })
        })
      })
      .catch(error => {
        console.log(error, 'error');
      })
  });


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


function ghCardMaker(object) {
  
  //Instantiating elements
  const userCard = document.createElement('div')
  const cardInfo = document.createElement('div')
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
  cardInfo.classList.add('card-info')
  heading.classList.add('name')
  user.classList.add('username')
  image.src = object.avatar_url;
  image.alt = `${object.name}'s Profile Picture`
  link.href = object.html_url;
  
  /* Text Content for the following: name(heading), username(user), location(geo), profile(link), follower(Followers), follows(Following), info(Bio) */
  heading.textContent = `${object.name}`;
  user.textContent = `${object.login}`;
  geo.textContent = `Location: ${object.location}`;
  link.textContent = `Profile: ${object.html_url}`;
  follower.textContent = `Followers: ${object.followers}`;
  follows.textContent = `Following: ${object.following}`;
  info.textContent = `Bio: ${object.bio}`;
  
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
  const entryPoint = document.querySelector('.cards')
  entryPoint.append(userCard);
  return userCard;
}




/*ignore this please*/
// axios.get('https://api.github.com/users/morganwilliamson')
//   .then(hubData => {
  //     const images = hubData.data.image;
  //     images.forEach(image => {
    //       const userCard = ghCardMaker({imageURL: 'https://avatars3.githubusercontent.com/u/69918485?v=4',  })
    //       entryPoint.appendChild(userCard);
//     })
//   })
//   .catch(hubErr => {
//     console.log(hubErr);
//   })

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/