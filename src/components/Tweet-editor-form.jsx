import Image1 from "../images/Media.svg";
import Image2 from "../images/Gif.svg";
import Image3 from "../images/Poll.svg";
import Image4 from "../images/Group.svg";
import Image5 from "../images/Schedule (1).svg";
import { useState } from "react";
import { useContext } from "react";
import UserContext from "../context/UserContext";

const Image = ({ src }) => {
    return (
        <img
            src={src}
        />
    );
};

export default function TweetEditorForm() {
    const [text, setText] = useState('');
    const { data, setData } = useContext(UserContext);

    // Cloner le tableau des tweets du contexte
    const updatedData = [...data.tweets];
    
    const formatText = (event) => {
        const originalText = event.target.value;
        const lines = originalText.match(/.{1,40}/g);

        if (lines) {
            setText(lines.join('\n'));
        } else {
            setText('');
        }
    };


    const content = text.trim();
    // let addObjet = {
    //     id: "0",
    //     imageavatar: "",
    //     userName: data.currentUser.userName,
    //     authorName: "",
    //     authortag: "",
    //     date: "7min",
    //     content: content,
    //     imagebg: "",
    //     reply: "19",
    //     repost: "144",
    //     like: "184",
    //     bio: "It’s our job to #GoThere & tell the most difficult stories. For breaking news, follow @CNNBRK and download our app http://cnn.com/apps",
    //     islike: false
    // };

    const handleTweetClick = () => {
        // Récupérer le contenu du texte
      

        if (content) {
            console.log(content);

            updatedData.unshift(addObjet);

            setData({ ...data, tweets: updatedData });
            setText('');
        }
    };


    return (
        <div className="flex-1">
            <textarea
                class="h-16 w-full border-none outline-none text-1.3rem bg-black text-white resize-none pt-10 mt-13"
                value={text}
                onChange={formatText}
                placeholder="What's happening"
                style={{ overflowY: 'hidden' }}
            />
            {/* <input className="tweet-editor-input" type="text" placeholder="What's happening" /> */}
            <div class="flex items-center justify-between mr-10 mb-10">
                <div class="flex items-center justify-start gap-[1rem]">
                    <Image src={Image1} />
                    <Image src={Image2} />
                    <Image src={Image3} />
                    <Image src={Image4} />
                    <Image src={Image5} />
                </div>
                <div onClick={handleTweetClick} class="capitalize cursor-pointer px-4 py-2 border-none rounded-full bg-blue-500 text-white text-1rem">
                    <span>Tweet</span>
                </div>
            </div>
        </div>
    )
}