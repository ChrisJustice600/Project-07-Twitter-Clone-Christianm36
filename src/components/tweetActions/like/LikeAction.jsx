
import("./style.css")
import { useContext, useState } from "react";
import UserContext from '../../../context/UserContext';
import axios from 'axios';





export default function LikeAction({ item }) {
  const { setReverse, reverse } = useContext(UserContext);
  const [isLike, setIsLike] = useState(item.islike)
  

  async function handleButtonClick() {
    const API_URL = 'http://localhost:3000/tweets';
    const likeReverse = !item.islike
    if (!isLike) {
      setIsLike(!isLike)
      console.log()
    } else {
      setIsLike(isLike)
      console.log(isLike)
    }

    const requestConfig = {
      method: 'PUT',
      url: `${API_URL}/${item.id}`,
      data:
      {
        id: item.id,
        author: {
          id: item.author.id,
          avatar: item.author.avatar,
          username: item.author.username,
          name: item.author.name,
          tag: item.author.tag,
        },
        date: "maintenant",
        content: item.content,
        image: "",
        reply: item.reply,
        repost: item.repost,
        like: item.like,
        bio: item.bio,
        islike: isLike,
      }
    };

    try {
      const response = await axios(requestConfig)
      const responseJson = response.data
      console.log("modifier");
      console.log(responseJson);
      setReverse(!reverse)

    } catch (error) {
      console.error("Une erreur s'est produite lors de la requête", error);
    }
  }
  return (

    <div className={`like custom-fill`} onClick={handleButtonClick} >

      <span className='like-custom all'>
        <svg width="40" height="40" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 18.5317H9.98833C7.83583 18.4917 1.625 12.88 1.625 7.56499C1.625 5.01166 3.72917 2.76999 6.1275 2.76999C8.03583 2.76999 9.31917 4.08666 9.99917 5.04499C10.6775 4.08832 11.9608 2.76999 13.87 2.76999C16.27 2.76999 18.3733 5.01166 18.3733 7.56582C18.3733 12.8792 12.1617 18.4908 10.0092 18.53H10V18.5317ZM6.12833 4.02082C4.395 4.02082 2.87583 5.67749 2.87583 7.56666C2.87583 12.35 8.7375 17.23 10.0008 17.2817C11.2658 17.23 17.1258 12.3508 17.1258 7.56666C17.1258 5.67749 15.6067 4.02082 13.8733 4.02082C11.7667 4.02082 10.59 6.46749 10.58 6.49166C10.3883 6.95999 9.61667 6.95999 9.42417 6.49166C9.4125 6.46666 8.23667 4.02082 6.12917 4.02082H6.12833Z" fill="#6E767D" />
        </svg>
      </span>
      <span>{item.like}</span>
    </div>
  )
}
