import React from 'react';
import './App.css';

import imgProfile from './images/profile.jpg';
import imgAbout from './images/about.jpg';

import iconAspnet from './images/icons/aspnet.ico';
import iconCentos from './images/icons/centos.ico';
import iconCplusplus from './images/icons/cplusplus.ico';
import iconCss from './images/icons/css.ico';
import iconGit from './images/icons/git.ico';
import iconGithub from './images/icons/github.ico';
import iconGradle from './images/icons/gradle.ico';
import iconHtml5 from './images/icons/html5.ico';
import iconJava from './images/icons/java.ico';
import iconIis from './images/icons/iis.ico';
import iconJenkins from './images/icons/jenkins.ico';
import iconJs from './images/icons/js.ico';
import iconMariadb from './images/icons/mariadb.ico';
import iconMaven from './images/icons/maven.ico';
import iconMfc from './images/icons/mfc.ico';
import iconMssql from './images/icons/mssql.ico';
import iconSpring from './images/icons/spring.ico';
import iconSpringboot from './images/icons/springboot.ico';
import iconSqlite from './images/icons/sqlite.ico';
import iconTomcat from './images/icons/tomcat.ico';

declare var $ : any;
 

class App extends React.Component {
  componentDidMount() {
    "use strict"; // Start of use strict
      // Smooth scrolling using jQuery easing
      $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            window.location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
                window.location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
      });
  
      // Closes responsive menu when a scroll trigger link is clicked
      $(".js-scroll-trigger").click(function () {
          $(".navbar-collapse").collapse("hide");
      });
      
      // Activate scrollspy to add active class to navbar items on scroll
      $("body").scrollspy({
          target: "#sideNav",
      });
     
  }

  render() {
    return (
      <div>
        {/* Navigation */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
            <a className="navbar-brand js-scroll-trigger" href="#page-top">
                <span className="d-block d-lg-none">Minhyeok Kim</span>
                <span className="d-none d-lg-block">
                  <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src={imgProfile} alt="" />
                </span>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav">
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#about">About Me</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#experience">Experience</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#skills">Skills</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#projects">Projects</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#education">Education</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#interests">Interests</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#additions">Additions</a></li>
                </ul>
            </div>
        </nav>
        
        {/* Page Content */}
        <div className="container-fluid p-0">
            {/* - About */}
            <section className="resume-section" id="about">
                <div className="resume-section-content">
                    <h1 className="mb-0">
                        Minhyeok 
                        <span className="text-primary"> Kim</span>
                    </h1>
                    <div className="subheading mb-5">
                      Phone : 010-7347-9872
                      <br />
                      E-Mail : <a href="mailto:alsgurmaniadev@gmail.com">alsgurmaniadev@gmail.com</a>
                      <br />
                    </div>
                    <p className="lead mb-5">Water, Books and Programming</p>
                    <img className="img-fluid img-about mx-auto mb-5" src={imgAbout} alt="" />
                    <div className="social-icons">
                      <a className="social-icon" href="https://github.com/Minhyeok-Kim-dev" target="_blank">
                        <i className="fab fa-github"></i>
                      </a>
                      {/* 
                      <a className="social-icon" href="#">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                      <a className="social-icon" href="#">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a className="social-icon" href="#">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                        */}
                    </div>
                </div>
            </section>
            <hr className="m-0" />
            {/* - Experience */}
            <section className="resume-section" id="experience">
                <div className="resume-section-content">
                    <h2 className="mb-5">Experience</h2>
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">Web Developer</h3>
                            <div className="subheading mb-3">#Newzen Solution #?????????????????? #???????????????</div>
                            <p>- ???????????? ?????? ?????? Web Application ??????</p>
                            <p>- C/S ???????????? ?????? API ??????</p>
                        </div>
                        <div className="flex-shrink-0">
                          <span className="text-primary">2018.06 - 2021.01</span>
                        </div>
                    </div>
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">C/S Developer (Windows)</h3>
                            <div className="subheading mb-3">#Newzen Solution #?????????????????? #?????????</div>
                            <p>- ?????? ??? ????????? ???????????? ERP ???????????? `????????????`, `KRP` ?????? ??????</p>
                            <p>- ERP ???????????? ?????? ????????? ??????</p>
                            <p>- ?????????????????? ?????????????????? ???????????? ??????</p>
                        </div>
                        <div className="flex-shrink-0">
                          <span className="text-primary">2016.07 - 2018.06</span>
                        </div>
                    </div>
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">Software Developer</h3>
                            <div className="subheading mb-3">#KARAK Electronics #R&D SW??? #?????????</div>
                            <p>- ??????????????? S/W ??????</p>
                        </div>
                        <div className="flex-shrink-0">
                          <span className="text-primary">2015.01 - 2015.08</span>
                        </div>
                    </div>
                </div>
            </section>
            <hr className="m-0" />
            {/* - Skills */}
            <section className="resume-section" id="skills">
              <div className="resume-section-content">
                  <h2 className="mb-5">Skills</h2>
                  <div className="subheading mb-3">Programming Languages #Back-End</div>
                  <ul className="list-inline dev-icons">
                    <li className="list-inline-item"><img src={iconJava} /></li>
                    <li className="list-inline-item"><img src={iconSpring} /></li>
                    <li className="list-inline-item"><img src={iconSpringboot} /></li>
                    <li className="list-inline-item"><img src={iconGradle} /></li>
                    <li className="list-inline-item"><img src={iconMaven} /></li>
                    <li className="list-inline-item"><img src={iconAspnet} /></li>
                  </ul>
                  <div className="subheading mb-3">Programming Languages #Front-End</div>
                  <ul className="list-inline dev-icons">
                    <li className="list-inline-item"><img src={iconJs} /></li>
                    <li className="list-inline-item"><img src={iconHtml5} /></li>
                    <li className="list-inline-item"><img src={iconCss} /></li>
                  </ul>
                  <div className="subheading mb-3">Programming Languages #C/S</div>
                  <ul className="list-inline dev-icons">
                    <li className="list-inline-item"><img src={iconCplusplus} /></li>
                    <li className="list-inline-item"><img src={iconMfc} /></li>
                  </ul>
                  <div className="subheading mb-3">DevOps #Database</div>
                  <ul className="list-inline dev-icons">
                    <li className="list-inline-item"><img src={iconMariadb} /></li>
                    <li className="list-inline-item"><img src={iconMssql} /></li>
                    <li className="list-inline-item"><img src={iconSqlite} /></li>
                  </ul>
                  <div className="subheading mb-3">DevOps #CI</div>
                  <ul className="list-inline dev-icons">
                    <li className="list-inline-item"><img src={iconGit} /></li>
                    <li className="list-inline-item"><img src={iconGithub} /></li>
                    <li className="list-inline-item"><img src={iconJenkins} /></li>
                  </ul>
                  <div className="subheading mb-3">DevOps #Web Server #WAS</div>
                  <ul className="list-inline dev-icons">
                    <li className="list-inline-item"><img src={iconTomcat} /></li>
                    <li className="list-inline-item"><img src={iconIis} /></li>
                  </ul>
                  <div className="subheading mb-3">DevOps #OS</div>
                  <ul className="list-inline dev-icons">
                    <li className="list-inline-item"><img src={iconCentos} /></li>
                  </ul>

                  <h2 className="mb-5"></h2>
                  <div className="subheading mb-3">Licenses</div>
                  <ul className="fa-ul mb-0">
                      <li>
                        <span className="fa-li">
                          <i className="fas fa-check"></i>
                        </span>
                        ?????????????????? 2???
                      </li>
                      <li>
                        <span className="fa-li">
                          <i className="fas fa-check"></i>
                        </span>
                        ??????????????????
                      </li>
                      <li>
                        <span className="fa-li">
                          <i className="fas fa-check"></i>
                        </span>
                        PADI Freediver
                      </li>
                  </ul>
              </div>
            </section>
            <hr className="m-0" />
            {/* - Projects */}
            <section className="resume-section" id="projects">
              <div className="resume-section-content">
                <h2 className="mb-5">Projects - Web</h2>
                <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                  <div className="flex-grow-1">
                      <h3 className="mb-0">?????? ???????????? ????????? Bizbooks</h3>
                      <div className="subheading mb-3">#Spring #Github #Jenkins #MariaDB #Linux #Azure</div>
                      <p>
                        <a href="https://bizbooks.newzensolution.co.kr/" target="_blank">https://bizbooks.newzensolution.co.kr/</a>
                      </p>
                      <p>- ???????????? ??????</p>
                      <p>- ?????? Applications ??????</p>
                      <p>- Scraping module ?????? (Infotech)</p>
                      <p>- Batch scheduler ??????</p>
                      <p>- ?????? C/S ???????????? ?????? </p>
                      <p>- json parse ?????? ?????? (Python)</p>
                      <p>- Microsoft Azure ?????? ??????????????? ????????? ??????</p>
                  </div>
                  <div className="flex-shrink-0">
                    <span className="text-primary">2019.06 - 2021.01</span>
                  </div>
                </div>
                <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                  <div className="flex-grow-1">
                      <h3 className="mb-0">?????? C/S ???????????? ??????????????? ?????? ????????? ??????</h3>
                      <div className="subheading mb-3">#ASP.NET #SourceSafe #MSSQL #Windows Server</div>
                      <p>- ?????? ????????? ?????? API ??????</p>
                      <p>- CS ???????????? ??? ????????? ?????? ????????? ??????</p>
                  </div>
                  <div className="flex-shrink-0">
                    <span className="text-primary">2020.03 - 2020.03</span>
                  </div>
                </div>
                <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                  <div className="flex-grow-1">
                      <h3 className="mb-0">???????????? ????????? ??? ????????? ??????</h3>
                      <div className="subheading mb-3">#ASP.NET #SourceSafe #Windows Server</div>
                      <p>- USB Serial ?????? API ??????</p>
                  </div>
                  <div className="flex-shrink-0">
                    <span className="text-primary">2019.12 - 2020.01</span>
                  </div>
                </div>
                <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                  <div className="flex-grow-1">
                      <h3 className="mb-0">?????????????????? ???????????? ??? ????????? ??????</h3>
                      <div className="subheading mb-3">#Spring #Git #MariaDB #Linux</div>
                      <p>- DB Schema migration (SQLite -> MariaDB)</p>
                      <p>- ???????????? DB ???????????? ????????? ??????</p>
                  </div>
                  <div className="flex-shrink-0">
                    <span className="text-primary">2019.01 - 2019.06</span>
                  </div>
                </div>
                <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                  <div className="flex-grow-1">
                      <h3 className="mb-0">Web UI Components Platform ??????</h3>
                      <div className="subheading mb-3">#Spring #Git #MariaDB #Linux</div>
                      <p>- ?????? ??????????????? Wrapping (jqWidgets UI Framework)</p>
                      <p>- ?????? Reference site ??????</p>
                  </div>
                  <div className="flex-shrink-0">
                    <span className="text-primary">2018.06 - 2018.12</span>
                  </div>
                </div>
                <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                  <div className="flex-grow-1">
                      <h3 className="mb-0">??????????????? ???????????? ??????</h3>
                      <div className="subheading mb-3">#Spring #Git #MariaDB #Linux</div>
                      <p>- ?????? Applications ??????</p>
                      <p>- ?????? CS ???????????? ????????? ?????? (?????? / dll)</p>
                      <p>- ?????? ????????? ?????? ????????? ??????</p>
                      <p>- Grid Components ?????? (RealGrid -> jqWidgets)</p>
                  </div>
                  <div className="flex-shrink-0">
                    <span className="text-primary">2018.06 - 2018.12</span>
                  </div>
                </div>

                <h3> </h3>
                <h2 className="mb-5">Projects - C/S</h2>
                <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                  <div className="flex-grow-1">
                      <h3 className="mb-0">KcLep ?????????????????? ERP??????</h3>
                      <div className="subheading mb-3">#MFC #SourceSafe #SQLite</div>
                      <p>- ???????????? ?????? ??????</p>
                  </div>
                  <div className="flex-shrink-0">
                    <span className="text-primary">2016.07 - 2020.12</span>
                  </div>
                </div>
                <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                  <div className="flex-grow-1">
                      <h3 className="mb-0">KRP ?????????????????? ERP??????</h3>
                      <div className="subheading mb-3">#MFC #SourceSafe #MariaDB</div>
                      <p>- ???????????? ?????? ??????</p>
                  </div>
                  <div className="flex-shrink-0">
                    <span className="text-primary">2017.01 - 2020.12</span>
                  </div>
                </div>
                <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                  <div className="flex-grow-1">
                      <h3 className="mb-0">KRP ?????????????????? ERP?????? ????????? ??????</h3>
                      <div className="subheading mb-3">#ASP.NET #MFC #SourceSafe #MSSQL #Windows Server</div>
                      <p>- ?????? ??? ????????? ?????? (ASP.NET)</p>
                      <p>- ?????? ?????? dll ?????? (MFC)</p>
                      <p>- ???????????? ????????? ??????</p>
                  </div>
                  <div className="flex-shrink-0">
                    <span className="text-primary">2017.01 - 2020.12</span>
                  </div>
                </div>
                <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                  <div className="flex-grow-1">
                      <h3 className="mb-0">?????????????????? ?????????????????? ???????????? ??????</h3>
                      <div className="subheading mb-3">#MFC #SourceSafe #SQLite</div>
                      <p>- ???????????? ?????? ??? ??????</p>
                  </div>
                  <div className="flex-shrink-0">
                    <span className="text-primary">2017.01 - 2020.12</span>
                  </div>
                </div>
                <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                  <div className="flex-grow-1">
                      <h3 className="mb-0">??????????????? ??????</h3>
                      <div className="subheading mb-3">#Windows Server</div>
                      <p>- FTP Server ??????</p>
                      <p>- ????????? ??????</p>
                      <p>- DB ??????, ?????? ??????</p>
                      <p>- NAS ????????????</p>
                  </div>
                  <div className="flex-shrink-0">
                    <span className="text-primary">2016.07 - 2017.06</span>
                  </div>
                </div>
              </div>
            </section>
            <hr className="m-0" />
            {/* - Education */}
            <section className="resume-section" id="education">
              <div className="resume-section-content">
                <h2 className="mb-5">Education</h2>
                <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div className="flex-grow-1">
                        <h3 className="mb-0">??????????????????????????? (??????) / ??????????????????</h3>
                        <div className="subheading mb-3">??????</div>
                        <p>?????? : 2.8 / 4.5</p>
                    </div>
                    <div className="flex-shrink-0">
                      <span className="text-primary">2015.03 - 2018.08</span>
                    </div>
                </div>
                <div className="d-flex flex-column flex-md-row justify-content-between">
                    <div className="flex-grow-1">
                        <h3 className="mb-0">??????????????? / ??????????????????</h3>
                        <div className="subheading mb-3">????????????</div>
                        <p>?????? : 3.9 / 4.5</p>
                    </div>
                    <div className="flex-shrink-0">
                      <span className="text-primary">2009.03 - 2015.02</span>
                    </div>
                </div>
                <div className="d-flex flex-column flex-md-row">
                  <div className="flex-grow-1">
                    <div className="d-flex flex-column flex-md-row justify-content-between">
                      <ul className="fa-ul mb-0">
                        <li>
                          <span className="fa-li">
                            <i className="fas fa-trophy text-warning"></i>
                          </span>
                          ??????????????? ?????????
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <span className="text-primary">2015</span>
                  </div>
                </div>
                <div className="d-flex flex-column flex-md-row">
                  <div className="flex-grow-1">
                    <div className="d-flex flex-column flex-md-row justify-content-between">
                      <ul className="fa-ul mb-0">
                        <li>
                          <span className="fa-li">
                            <i className="fas fa-trophy text-warning"></i>
                          </span>
                          job matching SW???????????? ?????? #??????????????????????????? #Smart Memo Program #WinAPI32
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <span className="text-primary">2014</span>
                  </div>
                </div>
              </div>
            </section>
            <hr className="m-0" />
            {/* - Interests */}
            <section className="resume-section" id="interests">
                <div className="resume-section-content">
                  <h2 className="mb-5">Interests</h2>
                  <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div className="flex-grow-1">
                      <h3 className="mb-0">Programming</h3>
                      <div className="subheading mb-3">?????????????????? / ?????????????????? ??????</div>
                      <p>- ??????????????? ?????? ?????????, ?????????</p>
                      <p>- ????????? ????????? ?????? ??? ?????? ??????</p>
                      <p>- DevOps</p>
                    </div>
                  </div>
                  <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div className="flex-grow-1">
                      <h3 className="mb-0">Books</h3>
                      <div className="subheading mb-3">????????? ????????? ???????????????</div>
                      <p>- ????????? ??? ?????? ??????</p>
                      <p>- ????????? ?????????</p>
                    </div>
                  </div>
                  <div className="d-flex flex-column flex-md-row justify-content-between">
                    <div className="flex-grow-1">
                      <h3 className="mb-0">Water</h3>
                      <div className="subheading mb-3">????????? ?????? ????????? ???????????? ?????????</div>
                      <p>- ??????????????? ??????</p>
                      <p>- ????????? ??????</p>
                    </div>
                  </div>
                </div>
            </section>
            {/* - Additions */}
            <section className="resume-section" id="additions">
                <div className="resume-section-content">
                  <h2 className="mb-5">Additions</h2>
                  <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div className="flex-grow-1">
                      <h3 className="mb-0">?????? ?????????????????????</h3>
                      <div className="subheading mb-3">?????? ??????</div>
                      <p>- 4,000?????? (?????????: 3,600?????? / ????????????: ??? 400??????)</p>
                      <div className="subheading mb-3">?????? ????????????</div>
                      <p>- 2021.05</p>
                    </div>
                  </div>
                  <div className="d-flex flex-column flex-md-row justify-content-between">
                      <div className="flex-grow-1">
                        <h3 className="mb-0">?????????</h3>
                        <p>???????????? ?????? ???????????? ?????? ??????????????? ???????????? ????????? ??????????????? ????????? ????????????????????????.</p>
                        <p>????????? ????????? ?????? ??? ?????? ?????? ????????? ??????????????? ???????????????.</p>
                        <p>??? ??? ??????????????? ???????????????.</p>
                      </div>
                  </div>
                </div>
            </section>
            <hr className="m-0" />
        </div>
      </div>
    );
  }
}

export default App;
