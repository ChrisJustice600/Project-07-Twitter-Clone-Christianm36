import Image1 from "../images/Media.svg";
import Image2 from "../images/Gif.svg";
import Image3 from "../images/Poll.svg";
import Image4 from "../images/Group.svg";
import Image5 from "../images/Schedule (1).svg";

const Image = ({ src }) => {
    return (
      <img
        src={src}
      />
    );
  };

export default function TweetEditorForm(){

    return (
        <div className="tweet-editor-form">
            <input className="tweet-editor-input" type="text" placeholder="What's happening" />
            <div className="tweet-editor-buttons">
                <div className="tweet-editor-actions">
                    <Image src={Image1} />
                    <Image src={Image2} />
                    <Image src={Image3} />
                    <Image src={Image4} />
                    <Image src={Image5} />
                </div>
                <div className="button">
                    <span>Tweet</span>
                </div>
            </div>
        </div>
    )
}