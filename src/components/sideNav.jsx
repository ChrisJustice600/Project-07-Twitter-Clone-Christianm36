import Home from "../iconSide/home.svg";
import TwitterWhite from "../iconSide/Twitter-white.svg";
import { Link } from "react-router-dom";


function ButtonTwitter(){
    return(
        <div className="btn-twitter">Twitter</div>
    )
}



export default function SideNav() {
  // navItems
  const navItems = [
    { icon: "src/iconSide/home.svg", link: "Home", path: "" },
    { icon: "src/iconSide/explore.png", link: "Explore", path: "" },
    { icon: "src/iconSide/notifications.svg", link: "Notifications", path: "" },
    { icon: "src/iconSide/message.svg", link: "Message", path: "" },
    { icon: "src/iconSide/bookmarks.svg", link: "Bookmarks", path: "" },
    { icon: "src/iconSide/list.png", link: "Lists", path: "" },
    { icon: "src/iconSide/profile.png", link: "Profile", path: "" },
    { icon: "src/iconSide/more.png", link: "More", path: "" },
  ];

  return (
    <>
      <div className="container">
        <div className="twitter-logo">
          <img src={TwitterWhite} />
          <span></span>
        </div>

        <ul>
          {navItems.map(({ icon, link }) => (
            <li className="list-content">
              <img src={icon} />
              <span>{link}</span>
            </li>
          ))}
        </ul>
        <ButtonTwitter />
      </div>
    </>
  );
}
