import React from 'react';
import {Link} from 'react-router';

const HomeInfo = () => {
  return (
    <div>

      <section id="hero">
        <Link className="home-page-link" to='/search'>
          Find Movies
        </Link>
        <Link className="home-page-link" to='/browseupcoming'>
          Browse Upcoming Movies
        </Link>
      </section>

      <section id="make-list-section">
        <h2>MAKE YOUR LIST</h2>

        <article className="intro-list-box">
          <div className="pic-intro theater-pic">
          </div>
          <h3 className="sub-heading">Wondering what movies are coming soon and are currently in theaters? </h3>
          <p className="intro-desc">
          Flix Favs displays upcoming and current movies for you to easily add to your movie list.
          </p>
        </article>

        <article className="intro-list-box">
        <div className="pic-intro alarm-pic">
        </div>
          <h3 className="sub-heading">Want reminders when movies you want to see are in theaters? </h3>
          <p className="intro-desc">
          Flix Favs helps you build a list of movies you want to see and alerts
          you when the film comes to theaters.
          </p>
        </article>



        <article className="intro-list-box">
        <div className="pic-intro reminder-pic">
        </div>
          <h3 className="sub-heading">Interested in tracking all the movies you have watched? </h3>
          <p className="intro-desc">
          Flix Favs allows you to track, sort, and search all the movies you have seen.
          </p>
        </article>
      </section>

      <section id="how-work">
        <h2>HOW IT WORKS</h2>
        <h3 className="sub-heading"> Find movies you want to watch.</h3>
        <article className="intro-desc">
          Use the search feature of Flix Finder to find
          movies you are interested in.
        </article>
        <article className="intro-desc">
          Use the browsing features to find upcoming and current movies.
        </article>
        <article className="intro-desc">
          Click on more on individual movies to see similar movies that may interest you.
        </article>
      </section>
    </div>
  )
}

module.exports = HomeInfo
