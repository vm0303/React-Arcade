import React from "react";
import "../Footer/footer.css";
const Footer = () => (


    <footer>

        <div className="footer-text">
            <p
                style={{color: "whitesmoke"}}
                title="I put a copyright here so you would know where I got most of my code from while doing the Towers of Hanoi program"
            >
                Towers of Hanoi: &copy; 2022 from &nbsp;
                <a
                    style={{color: "skyblue"}}
                    target="_blank"
                    href="https://codesandbox.io/s/react-tower-of-hanoi-uje04?file=/src/App.js:2191-2238"
                    rel="noreferrer">
                     Colin5530 in SandBox
                </a>

            </p>
            <p
                style={{color: "whitesmoke"}}
                title="I put a copyright here so you would know where I got most of my code from while doing the Sliding Puzzle program"
            >
                Sliding Puzzle: &copy; 2022 from &nbsp;
                <a
                    style={{color: "skyblue"}}
                    target="_blank"
                    href="https://www.youtube.com/watch?v=_wdbhVvMOCs&t=0s&ab_channel=BarelyCodingwithDanielBark"
                    rel="noreferrer">
                    Barely Coding with Daniel Bark
                </a>

            </p>
            <p style={{color: "whitesmoke"}}>
                Edited and re-created by Vishal Madhav
            </p>
        </div>
    </footer>

);

export default Footer;