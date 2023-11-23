import Logo from "../images/Top-Tweets.png"

export default function Header(){
    return(
        <div className="header">
            <h2 className="page-title">Home</h2>
            <img src={Logo}/>
        </div>
    )
}