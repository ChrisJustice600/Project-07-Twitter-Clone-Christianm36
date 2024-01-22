import Logo from "../images/Top-Tweets.png"

export default function Header() {
    return (
        <div className="p-6 flex items-center justify-between border-b border-gray-700">
            <h2 className="text-2xl font-bold">Home</h2>
            <img src={Logo} alt="Logo" className="w-12 h-auto" />
        </div>
    )
}

