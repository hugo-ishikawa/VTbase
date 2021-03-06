import React from 'react';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import rn from 'random-number';

/**
 * DataBaseページで表示するVtuber1件に対するコンテナとしてのコンポーネント
 */


// 今回は表示のサンプルとしてランダムで色とバッジを追加する
const gen = rn.generator({min:1, max:100, integer: true});
const getColor = (num) => {
  if(1 <= num && num <= 90){
    return '1'
  } else if (91 <= num && num <= 95) {
    return '2'
  } else {
    return '3'
  }
}
const getBudges = (num) => {
  if(1 <= num && num <= 85){
    return []
  } else if (86 <= num && num <= 90) {
    return ['new']
  } else if (91 <= num && num <= 95) {
    return ['hot']
  } else {
    return ['new', 'hot']
  }
}


const VtuberCard = (props) => {
    return (
      <Link to={`/database/${props.vtuber.channelId}`} style={{ textDecoration: 'none' }}>
      
        <div className={`vtuberCard vtuberCard__color-${getColor(gen())}`}>
        {
          getBudges(gen()).map((budge, index) => (
              <div 
                key={index}
                className={`vtuberCard__budge ${budge}`}
                style={{
                  backgroundImage: `url(../temp/${budge}.svg)`,
                }}
              />
          ))
        }
        <img 
          className="vtuberCard__image"
          src={`../temp/icons/${props.vtuber.channelId}.png`}/>           
        <div className="vtuberCard__channelTitle">
          {props.vtuber.title.slice(0,12)}
        </div>
      
        <div className="vtuberCard__param--container">
            <div className="vtuberCard__param--subContainer">
              <span className="vtuberCard__param">{numeral(props.vtuber.subs).format('0.0a')}</span>              
              <span className="vtuberCard__param--label">Subs</span>
            </div>
            <div className="vtuberCard__param--subContainer">
              <span className="vtuberCard__param">{numeral(props.vtuber.videoCount).format('0a')}</span>    
              <span className="vtuberCard__param--label">Videos</span>
            </div>
            <div className="vtuberCard__param--subContainer">
              <span className="vtuberCard__param">{numeral(props.vtuber.followerCount).format('0a')}</span>    
              <span className="vtuberCard__param--label">Followers</span>
            </div>
        </div>

        </div>
      </Link>

    );
  }
  
  export default VtuberCard