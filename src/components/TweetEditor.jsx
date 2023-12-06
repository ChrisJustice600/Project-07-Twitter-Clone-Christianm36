import AvatarProfile from "./Avatar"
import TweetEditorForm from "./Tweet-editor-form"

export default function TweetEditor() {
    return (
        <div className="tweet-editor">
            <AvatarProfile />
            <TweetEditorForm />
        </div>
    )
}