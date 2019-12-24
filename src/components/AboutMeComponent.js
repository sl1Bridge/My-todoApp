import React from 'react';
import withoutPhoto from '../img/noPhoto.png';

const AboutMeComponent = () => {
  let UserInfo;

  let imgSrc = "";
  let firstName = "";
  let secondName = "";
  let yearsOld = "";
  let information = "";

  if (UserInfo) {
    imgSrc = UserInfo.img;
    firstName = UserInfo.firstName;
    secondName = UserInfo.secondName;
    yearsOld = UserInfo.yearsOld;
    information = UserInfo.information;
  }

  return (
    <div className={"about-me-container"}>
      <div>
        <div>
        <img src={imgSrc || withoutPhoto}
             alt="Icon"
             className={"user-icon"}
        />
        </div>
        <div>
          <p><span>First Name:</span> {firstName || "Vasya"}</p>
          <p><span>Second Name:</span> {secondName || "Nebivalyi"}</p>
          <p><span>Years Old:</span> {yearsOld || "47"}</p>
        </div>
      </div>
      <h2>Information:</h2>
      <p className={"information-container"}>{information || "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dicta officiis porro tempora veritatis! Accusamus aliquam facilis, ipsum laudantium libero optio quaerat recusandae vitae voluptates!"}</p>
    </div>
  )
};

export default AboutMeComponent;