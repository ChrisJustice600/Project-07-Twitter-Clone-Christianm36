// Cloner le tableau des tweets du contexte
const updatedData = [...data.tweets];
// créer une fonction d'ajout des tweets
function addTweets(text) {
  // récupérer les infos de currentUser
  const currentUserInfo = data.currentUser[0];

  // créer un nouveau tweet
  const newTweet = {
    id: (updatedData.length + 1).toString(),
    author: {
      id: currentUserInfo.author.id,
      avatar: currentUserInfo.author.avatar,
      username: currentUserInfo.author.username,
      name: currentUserInfo.author.name,
      tag: currentUserInfo.author.tag,
    },
    date: "maintenant", // Vous devrez définir la date réelle ici
    content: text,
    image: "",
    reply: "0",
    repost: "0",
    like: "0",
    bio: currentUserInfo.bio,
    islike: false,
  };

  //   // Ajouter le nouveau tweet à la liste de tweets
  updatedData.tweets.push(newTweet);

  //   // Afficher la base de données mise à jour
  console.log(updatedData);
}
