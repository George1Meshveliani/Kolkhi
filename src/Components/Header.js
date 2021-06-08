import React, { Component } from "react";
import ParticlesBg from "particles-bg";
import Fade from "react-reveal";
import { FileIcon, defaultStyles } from 'react-file-icon';

import "./styles.css";

class Header extends Component {
  render() {
    if (!this.props.data) return null;

    const project = this.props.data.project;
    const github = this.props.data.github;
    const name = this.props.data.name;
    const description = this.props.data.description;

    return (
      <header id="home">
        <ParticlesBg type="circle" bg={true} />

        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                მთავარი
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#about">
                ჩვენს შესახებ
              </a>
            </li>

            {/* <li>
              <a className="smoothscroll" href="#resume">
                Resume
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#portfolio">
                Works
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#contact">
                Contact
              </a>
            </li> */}
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <Fade bottom>
              <h1 className="responsive-headline">პარტია - “რევოლუციური დემოკრატია”</h1>
            </Fade>
            <Fade bottom duration={1200}>
              <div className="card">
                <hr></hr>
                <h3>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSfmciuh2g3bPgYQzGR12f_NkPnFh90m7CK--Qo-uwOHUDogGw/viewform?vc=0&c=0&w=1&flr=0" 
                    target="blank">
                  <strong><u>შემოგვიერდით, შეავსეთ ფორმა</u></strong>
                  </a>
                <section className="fileform">
                  <section className="file">
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSfmciuh2g3bPgYQzGR12f_NkPnFh90m7CK--Qo-uwOHUDogGw/viewform?vc=0&c=0&w=1&flr=0" 
                    target="blank">
                         <FileIcon extension="ფორმა" {...defaultStyles.docx} />
                    </a>
                  </section>
                </section>
                </h3>
                <hr>
                </hr>
                

              </div>
            </Fade>
            <hr />
            {/* <Fade bottom duration={2000}>
              <ul className="social">
                <a href={project} className="button btn facebook-btn">
                  <i className="fa fa-book"></i>Project
                </a>
                <a href={github} className="button btn github-btn">
                  <i className="fa fa-github"></i>Github
                </a>
              </ul>
            </Fade> */}
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
