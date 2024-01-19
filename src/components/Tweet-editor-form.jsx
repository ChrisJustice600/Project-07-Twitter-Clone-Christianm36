import Image1 from "../images/Media.svg";
import Image2 from "../images/Gif.svg";
import Image3 from "../images/Poll.svg";
import Image4 from "../images/Group.svg";
import Image5 from "../images/Schedule (1).svg";
import { useState } from "react";


const Image = ({ src }) => {
    return (
        <img
        src={src}
        />
    );
};

export default function TweetEditorForm() {
    const [text, setText] = useState('');

    const formatText = (event) => {
      const originalText = event.target.value;
  
      // Diviser le texte en lignes de 20 caractères
      const lines = originalText.match(/.{1,34}/g);
  
      // Mettre à jour le texte dans l'état local avec le texte formaté
      if (lines) {
        setText(lines.join('\n'));
      } else {
        setText('');
      }
    };

    return (
        <div className="tweet-editor-form">
            <textarea
            className="tweet-editor-input"
                value={text}
                onChange={formatText}
                placeholder="What's happening" 
                style={{ overflowY: 'hidden' }}
            />
            {/* <input className="tweet-editor-input" type="text" placeholder="What's happening" /> */}
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