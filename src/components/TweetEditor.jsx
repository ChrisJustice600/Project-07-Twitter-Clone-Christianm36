import AvatarProfile from "./Avatar"
import TweetEditorForm from "./Tweet-editor-form"

export default function TweetEditor() {
    return (
        <div className="flex items-start justify-start gap-[20px] p-1rem border-b border-solid border-gray-700">
            <AvatarProfile />
            <TweetEditorForm />
        </div>
    )
}