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
          <p>First Name: {firstName || "Vasya"}</p>
          <p>Second Name: {secondName || "Nebivalyi"}</p>
          <p>Years Old: {yearsOld || "47"}</p>
        </div>
      </div>
        <p>Information: {information || "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, numquam."}</p>
    </div>
  )
};

export default AboutMeComponent;