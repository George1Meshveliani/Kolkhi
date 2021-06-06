import React, { Component } from "react";
import Fade from "react-reveal";

class About extends Component {
  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const profilepic = "images/" + this.props.data.image;
    const bio = this.props.data.bio;
    const street = this.props.data.address.street;
    const city = this.props.data.address.city;
    const state = this.props.data.address.state;
    const zip = this.props.data.address.zip;
    const phone = this.props.data.phone;
    const email = this.props.data.email;
    const resumeDownload = this.props.data.resumedownload;

    return (
      <section id="about">
        <Fade duration={1000}>
          <div className="row">
            <div className="three columns">
              <img
                className="profile-pic"
                src="https://i.pinimg.com/originals/94/d1/83/94d183616a089c6401a692d0bc1efb3e.png"
                alt="Nordic Giant Profile Pic"
              />
            </div>
            <div className="nine columns main-col">
              <h2>პარტიის შესახებ</h2>

              <p>მოქალაქეთა პოლიტიკური გაერთიანება “რევოლუციური დემოკრატია”</p>
              <div className="row">
                <div className="columns contact-details">
//                   <h2>გამოგვყევით სოციალურ ქსელებში</h2>
//                   <p className="address">
//                     <span>facebook:</span>
//                     <br></br>
//                     <li class="list-inline-item"><a href="https://www.facebook.com/Fund.kolkhi/"  target="_blank"><i class="fa fa-facebook"></i></a></li>

//                     <br />
//                     <span>
//                       instagram:
//                     </span>
//                     <br></br>
//                     <li class="list-inline-item"><a href="https://www.instagram.com/Fund.kolkhi/"  target="_blank"><i class="fa fa-instagram"></i></a></li>

//                     <br />
//                   </p>
                </div>
                {/* <div className="columns download">
                  <p>
                    <a href={resumeDownload} className="button">
                      <i className="fa fa-download"></i>Download Resume
                    </a>
                  </p>
                </div> */}
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;
