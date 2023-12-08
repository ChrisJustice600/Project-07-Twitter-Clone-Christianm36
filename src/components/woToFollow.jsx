import Verified from "../images/Verified.png";
import ShowMore from "./showMore";

export default function WoToFollow() {
  const followProfile = [
    {
      avatarProfile: "src/images/Profile-Photo-new-york.png",
      name: "The New York Times",
      tag: "@nytimes",
    },
    {
      avatarProfile: "src/images/photocnn.svg",
      name: "CNN",
      tag: "@CNN",
    },
    {
      avatarProfile: "src/images/image 1.png",
      name: "Twitter",
      tag: "@Twitter",
    },
  ];

  return (
    <div className="follow">
      <h2>Who to follow</h2>
      <div>
        {followProfile.map(({ avatarProfile, name, tag }) => (
          <div className="follow-profile">
            <div className="left">
              <img src={avatarProfile} />
              <div className="name-accompt-follow">
                <div className="title">
                  <div className="name">{name}</div>
                  <img src={Verified} />
                </div>
                <div>{tag}</div>
              </div>
            </div>
            <button>Follow</button>
          </div>
        ))}
      </div>
      <ShowMore />

    </div>
  );
}
