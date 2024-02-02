import Home from "../iconSide/home.svg";
import TwitterWhite from "../iconSide/Twitter-white.svg";
import { NavLink } from "react-router-dom";
import ProfileBottom from "./profileBottom";
import database from "../data.json";


function ButtonTwitter(){
    return(
        <div className="btn-twitter">Tweet</div>
    )
}



export default function SideNav() {
  const { "current-user": currentUser } = database;
  // navItems
  const navItems = [
    { icon: "src/iconSide/home.svg", link: "Home", path: "/home" },
    { icon: "src/iconSide/explore.png", link: "Explore", path: "" },
    { icon: "src/iconSide/notifications.svg", link: "Notifications", path: "" },
    { icon: "src/iconSide/message.svg", link: "Message", path: "" },
    { icon: "src/iconSide/bookmarks.svg", link: "Bookmarks", path: "" },
    { icon: "src/iconSide/list.png", link: "Lists", path: "" },
    { icon: "src/iconSide/profile.png", link: "Profile", path: `/${currentUser && currentUser.length > 0 ? currentUser[0].author.username : ''}`},
    { icon: "src/iconSide/more.png", link: "More", path: "" },
  ];

  return (
      <div className="p-[7px] mr-2.6 text-1rem font-bold font-inter h-full sticky top-0 bottom-0 left-0">
        <div className="mb-[25px] ml-[20px]">
          <img src={TwitterWhite} />
          <span></span>
        </div>

        <ul>
          {navItems.map(({ icon, link,path }) => (
            <span className="list-content">
              <img src={icon} />
              <NavLink to={path}><span>{link}</span></NavLink>
            </span>
          ))}
        </ul>
        <ButtonTwitter /> 
        <ProfileBottom />
      </div>
  );
}
