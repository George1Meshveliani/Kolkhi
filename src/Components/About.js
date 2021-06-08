import React, { Component } from "react";
import Fade from "react-reveal";

class About extends Component {
  render() {
    if (!this.props.data) return null;

    // const name = this.props.data.name;
    // const profilepic = "images/" + this.props.data.image;
    // const bio = this.props.data.bio;
    // const street = this.props.data.address.street;
    // const city = this.props.data.address.city;
    // const state = this.props.data.address.state;
    // const zip = this.props.data.address.zip;
    // const phone = this.props.data.phone;
    // const email = this.props.data.email;
    // const resumeDownload = this.props.data.resumedownload;

    return (
      <section id="about">
        <Fade duration={1000}>
          <div >
            <div className="three columns">
            </div>
            <div className="nine columns main-col">
              <h1>პარტიის შესახებ</h1>

              <p>მოქალაქეთა პოლიტიკური გაერთიანება “რევოლუციური დემოკრატია”</p>
              <div>
                <div>
                  <div className="rd-text">
                საქართველოს მოქალაქეთა პოლიტიკური გაერთიანება “რევოლუციური დემოკრატია” მიზნად ისახსვს ქვეყანაში წესრიგის დამყარებას, თანასწორუფლებიანიბის  და სამართლიანობის აღდგენას. ქვეყნის ეკონომიკური განვითარების გზაზე დაყენებას. სიღატაკის დამარცხებას, მოქალაქეების გათავისუფლებას ფინანსური-საბანკო უღლისგან. კლასობრივი სეგრეგაციის აღმოფხვრას, არსებული პოლიტიკური კლასის მიერ უზურპირებული 

              პარტიის ძირითადი ფუნდამენტური პრინციპები და ამოცანები: 
              <div  className ="sector">
              1. სოციალური რეფორმა: 

              კონსტიტუციაში ჩაიწერება რომ არ შეიძლება ადამიანის შემოსავალი (ხელფასი, პენსია, სოციალური დახმარება) არ შეიძლება იყოს საარსებო მინიმუმზე ნაკლები. ასევე ჩაიწერება, რომ სახელმწიფო ბიუჯეტიდან მიღებული ანაზღაურება არ შეიძლება იყოს განსაზღვრულ ზღვარზე მეტი . 

              არსებული საკრედიტო ვალდებულებისგან მოსახელობის სრულ გათავისუფლება, საბანკო მონოპოლიის და დიქტატურის დამხობა . 

              ქვეყნის მატერიალური, საფინანსო და ბუნებრივი რესურსების სამართლიანი გადანაწილება. 
              </div>
            
              <div className="sector">
              2. სასამართლო სისტემის რეფორმა : 

              არსებული მაღალი თანამდებობის მოსამართლეების დათხოვნა და მათი პასუხისმგებაში მიცემა. 

              მათ ადგილზე ხუთი წლის ვადით უცხოელი იურისტების დანიშვნა, რომლებიც მკაცრად მხოლოდ კანონით იხელმძღვანელებენ და უზრუნველყოფენ თავისუფალი სასამართლოს მუშაობას . 

              კორუფციის , ნეპოტიზმის , პროტექციონიზმის , მექრთამეობის წინააღმდეგ დაუნდობელი ბრძოლა და დამნაშავეების კანონის სრული სიმკაცრით დასჯა. 
              <div className="sector">
              3. რელიგიური ინსტიტუტების სახელმწიფოსთან ურთიერთობის მოწესრიგება. არსებული წყობილების ფუნდამენტური ცვლილება. პრივილეგიების, უპორატეს მდგომარეობის გაუქმება და თანაბარ პირობებში ჩაყენება.
              </div>
              4. საგარეო ურთიერთობების მოწესრიგება , ოკუპირებულ რეგიონებთან პირდაპირი დიალოგის დაწყება , რეგიონალური ლიდერის ფუნქციის დაბრუნება.
              </div>
            
               </div>
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
