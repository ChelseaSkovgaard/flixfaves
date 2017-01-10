import React, { Component } from 'react';
import {Link} from 'react-router';

class HomeInfo extends Component {
  constructor(){
    super();
    this.state = {
      heroNumber: ''
    }
  }

  componentWillMount() {
    this.setRandomNumber()
  }

  setRandomNumber() {
    let max = 10;
    let min = 1;
    this.setState({heroNumber: (Math.floor(Math.random() * (max - min) + min))});
  }

  render() {
    let heroNumber = this.state.heroNumber
    let heroImageNumber = "heroimage" + heroNumber

  return (
    <div>
      <section className="hero" id={heroImageNumber}>
        <h3 id="hero-heading" >Never Miss a Movie Again</h3><br/>
      </section>
        <h2>HOW IT WORKS</h2>
      <section id="make-list-section">
        <article className="intro-list-box">
          <Link to='/browsecurrent'>
            <div className="pic-intro theater-pic">
            </div>
          </Link>
          <h3 className="sub-heading">
          Wondering what movies are coming soon and are currently in theaters?
          </h3>
          <p className="intro-desc">
          Flix Faves displays upcoming and current movies for you to easily add to your movie list.
          </p>
        </article>
        <article className="intro-list-box">
          <Link to='/favorites'>
            <div className="pic-intro alarm-pic">
            </div>
          </Link>
          <h3 className="sub-heading">
          Want reminders when movies you want to see are in theaters?
          </h3>
          <p className="intro-desc">
          Flix Faves helps you build a list of movies you want to see and alerts
          you when the film comes to theaters.
          </p>
        </article>
        <article className="intro-list-box">
          <Link to='/watchedmovies'>
            <div className="pic-intro reminder-pic">
            </div>
          </Link>
          <h3 className="sub-heading">
          Interested in tracking all the movies you have watched?
          </h3>
          <p className="intro-desc">
          Flix Faves allows you to track all the movies you have seen and want to see.
          </p>
        </article>
      </section>
    </div>
  )
}
}

module.exports = HomeInfo
