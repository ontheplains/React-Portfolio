import React from 'react';

const Jumbo = ({myinfo}) => {
    let imgUrl = myinfo.mainImage ? myinfo.mainImage : "";
    let backgroundStyle = {
        backgroundImage: 'url(' + imgUrl + ')'
    };

    return (
        <div>
            <div className="cover cover--02 js-cover" style={backgroundStyle}>
                <div className="container cover__container--02">
                    <div className="cover__pic_box--02"></div>
                    <div className="cover__text_box--02">
                        <h2 className="cover__title--02">
                         <span className="cover__title_text--02">{myinfo.name}</span>
                   </h2>
                </div>
            </div>
        </div>
      </div>
    )
};

export default Jumbo
