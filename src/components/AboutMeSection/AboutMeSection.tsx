import React from 'react';
import './AboutMeSection.scss';
import person from "../../images/person_photo.png"
import SpinningObject from "../SpinningObject/SpinningObject";
import iconHtml from "../../images/technologies_icons/icon_html.svg"
import iconJs from "../../images/technologies_icons/icon_js.svg"
import iconReact from "../../images/technologies_icons/icon_react.svg"
import iconSass from "../../images/technologies_icons/icon_sass.svg"
import iconGit from "../../images/technologies_icons/icon_git.svg"
import iconTs from "../../images/technologies_icons/icon_ts.svg"
import iconWebpack from "../../images/technologies_icons/icon_webpack.svg"
import ContactIcon from "../ContactIcon/ContactIcon";
import iconCall from "../../images/contacts_icons/call.svg"
import iconGithub from "../../images/contacts_icons/github.svg"
import iconGmail from "../../images/contacts_icons/gmail.svg"
import iconLinkedin from "../../images/contacts_icons/linkedin.svg"


function AboutMeSection() {
    const technologies = [{text: "HTML", icon: iconHtml, className: "iconHtml"},
        {text: "JS", icon: iconJs, className: "iconJs"},
        {text: "React", icon: iconReact, className: "iconReact"},
        {text: "SASS", icon: iconSass, className: "iconSass"},
        {text: "HTML", icon: iconHtml, className: "iconHtml"},
        {text: "Git", icon: iconGit, className: "iconGit"},
        {text: "TS", icon: iconTs, className: "iconTs"},
        {text: "Webpack", icon: iconWebpack, className: "iconWebpack"},
    ]
    const mappingSpinObjects = technologies.map((elem) => <SpinningObject icon={elem.icon} text={elem.text} className={elem.className}/>)

    const contacts = [
        {icon: iconCall, className:"iconCall", link:"tel:+48790854166"},
        {icon: iconGithub, className:"iconGithub", link:"https://github.com/Mary-No"},
        {icon: iconGmail, className:"iconGmail", link:"mailto:novik.work.mail@gmail.com"},
        {icon: iconLinkedin, className:"iconLinkedin", link:"https://www.linkedin.com/in/maria-novik-385861229/"},
    ]
    const mappingContactsObjects = contacts.map((elem) => <ContactIcon className={elem.className} icon={elem.icon} link={elem.link}/>)
    return (
        <div className="about_me_section">
            <div className="about_me_text">
                <div className="about_me_description">
                    <p className="about_me_description_welcome">Привет! Меня зовут Мария,<br/> я начинающий фронтенд
                        разработчик. </p>
                    <p className="about_me_description_more">Я страстно увлечена созданием красивых и функциональных
                        веб-сайтов. <br/>Хочу найти работу, где смогу применить свои навыки и внести свой вклад в
                        развитие современного веб-пространства.</p>
                </div>
                <div className="about_me_contacts_icons">
                    {mappingContactsObjects}
                </div>
            </div>
                <div className="about_me_photo">
                    <div className="about_me_round_person">
                        <img className="about_me_person" src={person} alt="person"/>
                    </div>
                    <div className="spinning_objects_container">
                        {mappingSpinObjects}
                    </div>
                </div>


        </div>
    );
}

export default AboutMeSection;