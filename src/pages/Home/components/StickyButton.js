import React, { Component } from 'react';

class StickyButton extends Component {
    render() {
        return (
            <div>
                <div className="mobile-wrap">
  <div className="mobile clearfix">
    <div className="header">
      <span className="ion-ios-navicon pull-left"><i /></span>
      <span className="title">Home</span>
      <span className="ion-ios-search pull-right" />
      <div className="search">
        <form method="post">
          <input type="search" placeholder="Search Here" />
        </form>
      </div>
    </div>
    <div className="sidebar">
      <div className="sidebar-overlay" />
      <div className="sidebar-content">
        <div className="top-head">
          <div className="name">Mohan Khadka</div>
          <div className="email">contact@mohankhadka.com.np</div>
        </div>
        <div className="nav-left">
          <a href="#home"><span className="ion-ios-home-outline" /> Home</a>
          <a href="#alarm"><span className="ion-ios-list-outline" /> Alarm</a>
          <a href="#compose"><span className="ion-ios-compose-outline" /> Compose</a>
          <a href="#chats"><span className="ion-ios-chatboxes-outline" /> Chats</a>
          <a href="#profile"><span className="ion-ios-person-outline" /> Profile</a>
          <a href="#settings"><span className="ion-ios-gear-outline" /> Settings</a>
          <a href="#credits"><span className="ion-ios-information-outline" /> Credits</a>
        </div>
      </div>
    </div>
    <div className="content">
      <div className="html search">
        <div className="title bounceInDown animated">Search Result</div>
        <p className="flipInX animated">Sorry,<br />no matches found for <b className="key" /></p>
      </div>
      <div className="html welcome visible">
        <div className="datetime">
          <div className="day lightSpeedIn animated">Thursday</div>
          <div className="date lightSpeedIn animated">June 18, 2015</div>
          <div className="time lightSpeedIn animated">08:00 AM</div>
        </div>
      </div>
      <div className="html alarm">
        <div className="forecast clearfix">
          <div className="datetime pull-left bounceInLeft animated">
            <div className="day">Thursday</div>
            <div className="date">June 18, 2015</div>
          </div>
          <div className="temperature pull-right bounceInRight animated">
            <div className="unit"><span className="ion-ios-sunny-outline" /> 34<i>°</i></div>
            <div className="location">Kathmandu, Nepal</div>
          </div>
        </div>
        <div className="alarm-list">
          <div className="note clearfix slideInRight animated">
            <div className="time pull-left">
              <div className="hour">9</div>
              <div className="shift">AM</div>
            </div>
            <div className="to-do pull-left">
              <div className="title">Finish HTML Coding</div>
              <div className="subject">Web UI</div>
            </div>
          </div>
          <div className="note clearfix slideInRight animated">
            <div className="time pull-left">
              <div className="hour">1</div>
              <div className="shift">PM</div>
            </div>
            <div className="to-do pull-left">
              <div className="title">Lunch Break</div>
              <div className="subject" />
            </div>
          </div>
          <div className="note clearfix slideInRight animated" data-revert="slideOutRight">
            <div className="time pull-left">
              <div className="hour">3</div>
              <div className="shift">PM</div>
            </div>
            <div className="to-do pull-left">
              <div className="title">Design Stand Up</div>
              <div className="subject">Hangouts</div>
              <div className="user-list clearfix">
                <div className="user pull-left"><img src="https://raw.githubusercontent.com/khadkamhn/secret-project/master/img/usr-i.png" /></div>
                <div className="user pull-left"><img src="https://raw.githubusercontent.com/khadkamhn/secret-project/master/img/usr-ii.png" /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="html compose">
        <div className="forms">
          <div className="group clearfix slideInRight animated">
            <label className="pull-left" htmlFor="compose-time"><span className="ion-ios-time-outline" /> Time</label>
            <input className="pull-right" id="compose-time" type="time" />
          </div>
          <div className="group clearfix slideInLeft animated">
            <label className="pull-left" htmlFor="compose-date"><span className="ion-ios-calendar-outline" /> Date</label>
            <input className="pull-right" id="compose-date" type="date" />
          </div>
          <div className="group clearfix slideInRight animated">
            <label className="pull-left" htmlFor="compose-title"><span className="ion-ios-paper-outline" /> Title</label>
            <input className="pull-right" id="compose-title" type="text" />
          </div>
          <div className="group clearfix slideInLeft animated">
            <label className="visible" htmlFor="compose-detail"><span className="ion-ios-list-outline" /> Task</label>
            <textarea className="visible" id="compose-detail" rows={3} defaultValue={""} />
          </div>
          <div className="action flipInY animated">
            <button className="btn">Compose</button>
          </div>
        </div>
      </div>
      <div className="html chats">
        <div className="tabs-list clearfix">
          <a href="#" className="tab active">Users</a>
          <a href="#" className="tab">Messages</a>
          <a href="#" className="tab">Groups</a>
        </div>
        <div className="active-users">
          <div className="user clearfix rotateInDownLeft animated">
            <div className="photo pull-left">
              <img src="https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg" />
            </div>
            <div className="desc pull-left">
              <p className="name">Connor Hartigan</p>
              <p className="position">Web &amp; UI Designer</p>
            </div>
            <div className="idle pull-right"><span className="away" /></div>
          </div>
          <div className="user clearfix rotateInDownRight animated">
            <div className="photo pull-left">
              <img src="https://s3.amazonaws.com/uifaces/faces/twitter/markmushiva/128.jpg" />
            </div>
            <div className="desc pull-left">
              <p className="name">Jacob Lennon</p>
              <p className="position">Front-End Developer</p>
            </div>
            <div className="idle pull-right"><span className="offline" /></div>
          </div>
          <div className="user clearfix rotateInDownLeft animated">
            <div className="photo pull-left">
              <img src="https://s3.amazonaws.com/uifaces/faces/twitter/scottohara/128.jpg" />
            </div>
            <div className="desc pull-left">
              <p className="name">Didier Mailly</p>
              <p className="position">Co-Founder</p>
            </div>
            <div className="idle pull-right"><span className="away" /></div>
          </div>
          <div className="user clearfix rotateInDownRight animated">
            <div className="photo pull-left">
              <img src="https://s3.amazonaws.com/uifaces/faces/twitter/shalt0ni/128.jpg" />
            </div>
            <div className="desc pull-left">
              <p className="name">Miguel Cunha Ferreira</p>
              <p className="position">Sales Manager</p>
            </div>
            <div className="idle pull-right"><span className="online" /></div>
          </div>
          <div className="user clearfix rotateInDownLeft animated">
            <div className="photo pull-left">
              <img src="https://s3.amazonaws.com/uifaces/faces/twitter/sircookieface/128.jpg" />
            </div>
            <div className="desc pull-left">
              <p className="name">Eric Yuriev</p>
              <p className="position">App Developer</p>
            </div>
            <div className="idle pull-right"><span className="online" /></div>
          </div>
          <div className="user clearfix rotateInDownRight animated">
            <div className="photo pull-left">
              <img src="https://s3.amazonaws.com/uifaces/faces/twitter/ryanmclaughlin/128.jpg" />
            </div>
            <div className="desc pull-left">
              <p className="name">Theodore Clark</p>
              <p className="position">Project Manager</p>
            </div>
            <div className="idle pull-right"><span className="online" /></div>
          </div>
        </div>
      </div>
      <div className="html settings">
        <div className="setting-list">
          <div className="gear clearfix slideInRight animated">
            <div className="title pull-left">General</div>
            <div className="action pull-right"><span className="ion-ios-arrow-right" /></div>
          </div>
          <div className="gear clearfix slideInLeft animated">
            <div className="title pull-left"><label htmlFor="gear-notice">Notification</label></div>
            <div className="action pull-right"><input id="gear-notice" className="on-off" type="checkbox" /><label htmlFor="gear-notice" /></div>
          </div>
          <div className="gear clearfix slideInRight animated">
            <div className="title pull-left"><label htmlFor="gear-sound">Sound</label></div>
            <div className="action pull-right"><input id="gear-sound" className="on-off" type="checkbox" defaultChecked /><label htmlFor="gear-sound" /></div>
          </div>
          <div className="gear clearfix slideInLeft animated">
            <div className="title pull-left">Theme</div>
            <div className="action pull-right">Standard <span className="ion-ios-arrow-right" /></div>
          </div>
          <div className="gear clearfix slideInRight animated">
            <div className="title pull-left">Support</div>
            <div className="action pull-right"><span className="ion-ios-arrow-right" /></div>
          </div>
          <div className="gear clearfix slideInLeft animated">
            <div className="title pull-left">Privacy</div>
            <div className="action pull-right"><span className="ion-ios-arrow-right" /></div>
          </div>
        </div>
      </div>
      <div className="html profile">
        <div className="photo flipInX animated">
          <img src="https://raw.githubusercontent.com/khadkamhn/secret-project/master/img/mohan.png" />
          <div className="social">
            <a href="https://facebook.com/khadkamhn" className="soc-item soc-count-1"><span className="ion-social-facebook" /></a>
            <a href="https://twitter.com/khadkamhn" className="soc-item soc-count-2"><span className="ion-social-twitter" /></a>
            <a href="https://github.com/khadkamhn" className="soc-item soc-count-3"><span className="ion-social-github" /></a>
            <a href="https://pinterest.com/khadkamhn" className="soc-item soc-count-4"><span className="ion-social-pinterest" /></a>
            <a href="https://np.linkedin.com/in/khadkamhn" className="soc-item soc-count-5"><span className="ion-social-linkedin" /></a>
            <a href="https://codepen.io/khadkamhn" className="soc-item soc-count-6"><span className="ion-social-codepen" /></a>
            <a href="skype:khadkamhn?userinfo" className="soc-item soc-count-7"><span className="ion-social-skype" /></a>
            <a href="http://dribbble.com/khadkamhn" className="soc-item soc-count-8"><span className="ion-social-dribbble" /></a>
          </div>
        </div>
        <div className="details">
          <p className="heading flipInY animated">
            <span className="name">Mohan Khadka</span><span className="position">Web/Graphic Desiger</span>
          </p>
          <p className="text fadeInUp animated">Hi, It's me Mohan from Nepal. I'm a web and graphics designer. Designing is my passion and I am still learning and developing my skills on graphics designing and coding. I have been working on various designing projects.</p>
        </div>
      </div>
      <div className="html credits">
        <div className="title flipInY animated">I have been using the following assets to build this design</div>
        <div className="credit-ol">
          <div className="credit-li lightSpeedIn animated"><a href="https://www.google.com/fonts/specimen/Roboto" target="_blank">roboto</a> <span>for typography</span></div>
          <div className="credit-li lightSpeedIn animated"><a href="https://jquery.com" target="_blank">jquery</a> <span>for design/ui</span></div>
          <div className="credit-li lightSpeedIn animated"><a href="http://ionicons.com/" target="_blank">ionicons</a> <span>for icons</span></div>
          <div className="credit-li lightSpeedIn animated"><a href="http://uifaces.com/authorized" target="_blank">ui faces</a> <span>for avatar</span></div>
          <div className="credit-li lightSpeedIn animated"><a href="https://daneden.github.io/animate.css/" target="_blank">animate.css</a> <span>for animation</span></div>
          <div className="credit-li lightSpeedIn animated"><a href="https://dribbble.com/shots/1928064-Secret-Project" target="_blank">concept of design</a> <span>for layout</span></div>
          <div className="credit-li lightSpeedIn animated"><a href="https://unsplash.com/photos/6asyCyR0K1Q/download" target="_blank">unsplash.com</a> <span>for background</span></div>
        </div>
        <div className="text zoomInUp animated">I'm glad for using these resources and expecting same as time ahead</div>
      </div>
    </div>
    <div className="nav">
      <a href="#profile" className="nav-item nav-count-1"><i className="ion-ios-person-outline" /><span className="invisible">Profile</span></a>
      <a href="#compose" className="nav-item nav-count-2"><i className="ion-ios-compose-outline" /><span className="invisible">Compose</span></a>
      <a href="#chats" className="nav-item nav-count-3"><i className="ion-ios-chatboxes-outline" /><span className="invisible">Chats</span></a>
      <a href="#alarm" className="nav-item nav-count-4"><i className="ion-ios-alarm-outline" /><span className="invisible">Alarm</span></a>
      <a href="#toggle" className="mask"><i className="ion-ios-plus-empty" /></a>
    </div>
  </div>
</div>

            </div>
        );
    }
}

export default StickyButton;