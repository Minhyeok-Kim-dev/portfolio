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
                            <div className="subheading mb-3">#Newzen Solution #연구개발본부 #주임연구원</div>
                            <p>- 세무회계 관련 다수 Web Application 개발</p>
                            <p>- C/S 프로그램 연동 API 개발</p>
                        </div>
                        <div className="flex-shrink-0">
                          <span className="text-primary">2018.06 - 2021.01</span>
                        </div>
                    </div>
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">C/S Developer (Windows)</h3>
                            <div className="subheading mb-3">#Newzen Solution #솔루션개발팀 #연구원</div>
                            <p>- 회사 주 제품군 세무회계 ERP 프로그램 `세무사랑`, `KRP` 메뉴 개발</p>
                            <p>- ERP 프로그램 인증 서비스 개발</p>
                            <p>- 한국세무사회 전산세무회계 자격시험 채점</p>
                        </div>
                        <div className="flex-shrink-0">
                          <span className="text-primary">2016.07 - 2018.06</span>
                        </div>
                    </div>
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">Software Developer</h3>
                            <div className="subheading mb-3">#KARAK Electronics #R&D SW팀 #연구원</div>
                            <p>- 전관방송용 S/W 개발</p>
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
                        리눅스마스터 2급
                      </li>
                      <li>
                        <span className="fa-li">
                          <i className="fas fa-check"></i>
                        </span>
                        정보처리기사
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
                      <h3 className="mb-0">세무 비즈니스 솔루션 Bizbooks</h3>
                      <div className="subheading mb-3">#Spring #Github #Jenkins #MariaDB #Linux #Azure</div>
                      <p>
                        <a href="https://bizbooks.newzensolution.co.kr/" target="_blank">https://bizbooks.newzensolution.co.kr/</a>
                      </p>
                      <p>- 프로젝트 리더</p>
                      <p>- 메인 Applications 개발</p>
                      <p>- Scraping module 개발 (Infotech)</p>
                      <p>- Batch scheduler 개발</p>
                      <p>- 내부 C/S 프로그램 연동 </p>
                      <p>- json parse 모듈 개발 (Python)</p>
                      <p>- Microsoft Azure 기반 파일업로드 서비스 개발</p>
                  </div>
                  <div className="flex-shrink-0">
                    <span className="text-primary">2019.06 - 2021.01</span>
                  </div>
                </div>
                <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                  <div className="flex-grow-1">
                      <h3 className="mb-0">내부 C/S 프로그램 세무대리인 연동 서비스 개발</h3>
                      <div className="subheading mb-3">#ASP.NET #SourceSafe #MSSQL #Windows Server</div>
                      <p>- 인증 서비스 기반 API 개발</p>
                      <p>- CS 프로그램 간 데이터 중계 서비스 개발</p>
                  </div>
                  <div className="flex-shrink-0">
                    <span className="text-primary">2020.03 - 2020.03</span>
                  </div>
                </div>
                <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                  <div className="flex-grow-1">
                      <h3 className="mb-0">유출방지 솔루션 웹 서비스 개발</h3>
                      <div className="subheading mb-3">#ASP.NET #SourceSafe #Windows Server</div>
                      <p>- USB Serial 관리 API 개발</p>
                  </div>
                  <div className="flex-shrink-0">
                    <span className="text-primary">2019.12 - 2020.01</span>
                  </div>
                </div>
                <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                  <div className="flex-grow-1">
                      <h3 className="mb-0">전산세무회계 프로그램 웹 서비스 개발</h3>
                      <div className="subheading mb-3">#Spring #Git #MariaDB #Linux</div>
                      <p>- DB Schema migration (SQLite -> MariaDB)</p>
                      <p>- 사용자별 DB 초기설정 서비스 개발</p>
                  </div>
                  <div className="flex-shrink-0">
                    <span className="text-primary">2019.01 - 2019.06</span>
                  </div>
                </div>
                <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                  <div className="flex-grow-1">
                      <h3 className="mb-0">Web UI Components Platform 개발</h3>
                      <div className="subheading mb-3">#Spring #Git #MariaDB #Linux</div>
                      <p>- 외부 라이브러리 Wrapping (jqWidgets UI Framework)</p>
                      <p>- 내부 Reference site 개발</p>
                  </div>
                  <div className="flex-shrink-0">
                    <span className="text-primary">2018.06 - 2018.12</span>
                  </div>
                </div>
                <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                  <div className="flex-grow-1">
                      <h3 className="mb-0">경비청구서 프로그램 개발</h3>
                      <div className="subheading mb-3">#Spring #Git #MariaDB #Linux</div>
                      <p>- 메인 Applications 개발</p>
                      <p>- 내부 CS 프로그램 연동부 개발 (메뉴 / dll)</p>
                      <p>- 사내 메신저 연동 서비스 개발</p>
                      <p>- Grid Components 적용 (RealGrid -> jqWidgets)</p>
                  </div>
                  <div className="flex-shrink-0">
                    <span className="text-primary">2018.06 - 2018.12</span>
                  </div>
                </div>

                <h3> </h3>
                <h2 className="mb-5">Projects - C/S</h2>
                <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                  <div className="flex-grow-1">
                      <h3 className="mb-0">KcLep 전산세무회계 ERP개발</h3>
                      <div className="subheading mb-3">#MFC #SourceSafe #SQLite</div>
                      <p>- 프로그램 메뉴 개발</p>
                  </div>
                  <div className="flex-shrink-0">
                    <span className="text-primary">2016.07 - 2020.12</span>
                  </div>
                </div>
                <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                  <div className="flex-grow-1">
                      <h3 className="mb-0">KRP 전산세무회계 ERP개발</h3>
                      <div className="subheading mb-3">#MFC #SourceSafe #MariaDB</div>
                      <p>- 프로그램 메뉴 개발</p>
                  </div>
                  <div className="flex-shrink-0">
                    <span className="text-primary">2017.01 - 2020.12</span>
                  </div>
                </div>
                <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                  <div className="flex-grow-1">
                      <h3 className="mb-0">KRP 전산세무회계 ERP인증 서비스 개발</h3>
                      <div className="subheading mb-3">#ASP.NET #MFC #SourceSafe #MSSQL #Windows Server</div>
                      <p>- 인증 웹 서비스 개발 (ASP.NET)</p>
                      <p>- 인증 연동 dll 개발 (MFC)</p>
                      <p>- 모니터링 시스템 개발</p>
                  </div>
                  <div className="flex-shrink-0">
                    <span className="text-primary">2017.01 - 2020.12</span>
                  </div>
                </div>
                <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                  <div className="flex-grow-1">
                      <h3 className="mb-0">한국세무사회 전산세무회계 자격시험 채점</h3>
                      <div className="subheading mb-3">#MFC #SourceSafe #SQLite</div>
                      <p>- 채점소스 개발 및 채점</p>
                  </div>
                  <div className="flex-shrink-0">
                    <span className="text-primary">2017.01 - 2020.12</span>
                  </div>
                </div>
                <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                  <div className="flex-grow-1">
                      <h3 className="mb-0">백업솔루션 관리</h3>
                      <div className="subheading mb-3">#Windows Server</div>
                      <p>- FTP Server 설정</p>
                      <p>- 방화벽 설정</p>
                      <p>- DB 백업, 로그 백업</p>
                      <p>- NAS 모니터링</p>
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
                        <h3 className="mb-0">한국방송통신대학교 (편입) / 컴퓨터과학과</h3>
                        <div className="subheading mb-3">학사</div>
                        <p>학점 : 2.8 / 4.5</p>
                    </div>
                    <div className="flex-shrink-0">
                      <span className="text-primary">2015.03 - 2018.08</span>
                    </div>
                </div>
                <div className="d-flex flex-column flex-md-row justify-content-between">
                    <div className="flex-grow-1">
                        <h3 className="mb-0">유한대학교 / 컴퓨터정보과</h3>
                        <div className="subheading mb-3">전문학사</div>
                        <p>학점 : 3.9 / 4.5</p>
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
                          유한대학교 총장상
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
                          job matching SW경진대회 동상 #서울지방중소기업청 #Smart Memo Program #WinAPI32
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
                      <div className="subheading mb-3">스페셜리스트 / 제너럴리스트 사이</div>
                      <p>- 프로그램이 주는 성취감, 자신감</p>
                      <p>- 새로운 환경을 접할 수 있는 기회</p>
                      <p>- DevOps</p>
                    </div>
                  </div>
                  <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div className="flex-grow-1">
                      <h3 className="mb-0">Books</h3>
                      <div className="subheading mb-3">하루키 작가를 좋아합니다</div>
                      <p>- 생각할 수 있는 시간</p>
                      <p>- 표현의 다양성</p>
                    </div>
                  </div>
                  <div className="d-flex flex-column flex-md-row justify-content-between">
                    <div className="flex-grow-1">
                      <h3 className="mb-0">Water</h3>
                      <div className="subheading mb-3">사주에 물의 기운이 강하다고 합니다</div>
                      <p>- 경쟁보다는 조화</p>
                      <p>- 생각의 정리</p>
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
                      <h3 className="mb-0">추가 기재사항입니다</h3>
                      <div className="subheading mb-3">직전 연봉</div>
                      <p>- 4,000만원 (기본급: 3,600만원 / 외근수당: 약 400만원)</p>
                      <div className="subheading mb-3">출근 가능일자</div>
                      <p>- 2021.05</p>
                    </div>
                  </div>
                  <div className="d-flex flex-column flex-md-row justify-content-between">
                      <div className="flex-grow-1">
                        <h3 className="mb-0">끝으로</h3>
                        <p>올리브영 기술 블로그를 통해 프로그래밍 기술뿐만 아니라 조직문화에 대해서 되돌아보았습니다.</p>
                        <p>따뜻한 문화를 접할 수 있는 좋은 기회로 연결되기를 희망합니다.</p>
                        <p>긴 글 읽어주셔서 감사합니다.</p>
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
