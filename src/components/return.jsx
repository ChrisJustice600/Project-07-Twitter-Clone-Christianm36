import { useNavigate } from "react-router-dom";
import ReturnIcon from "../iconprofile/return.svg";

export default function Return({ linkValue }) {

  const navigate = useNavigate()

  const handleClick = () => {
    navigate(linkValue)
  }
  return (
    <div className="return-container">
      <img className="image" src={ReturnIcon} onClick={handleClick} />
    </div>
  );
}
