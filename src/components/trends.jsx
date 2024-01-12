import ToolstrendsImage from "../iconSide/Settings-trends.svg";
import TrendMore from "../iconSide/trend-more.svg";
import ShowMore from "./showMore";

function TrendList() {
  const trendlist = [
    {
      trendListTitle: "Trending in Turkey",
      trendTag: "#SQUID",
      trendTweet: "2,066 Tweets",
    },
  ];
  return (
    <>
      {trendlist.map(({ trendListTitle, trendTag, trendTweet }) => (
        <ul className="trend-contenair">
          <div className="trend-list">
            <div className="trend-list-title">
              <h3>{trendListTitle}</h3>
              <img src={TrendMore} />
            </div>
          </div>
          <div className="trend-tag">{trendTag}</div>
          <div className="trend-tweet">{trendTweet}</div>
        </ul>
      ))}
    </>
  );
}

function TrendTitle() {
  return (
    <>
      <div className="trends-title">
        <h2>Trends for you</h2>
        <img src={ToolstrendsImage} />
      </div>
    </>
  );
}


export default function Trends() {
  return (
    <div className="trends">
      <div className="trendTitle">
        <TrendTitle />
      </div>
      <TrendList />
      <TrendList />
      <TrendList />
      <TrendList />
      <ShowMore />
    </div>
  );
}
