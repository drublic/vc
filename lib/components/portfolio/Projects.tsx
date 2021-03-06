import React from "react";

const Projects = () => (
  <>
    <h2>Projects</h2>

    <div className="work__element">
      <a href="https://www.croozer.com/" className="work__element__image">
        <img src="/img/work/croozer-portfolio.svg" alt="Croozer GmbH" />
      </a>

      <div className="work__element__content">
        <h3>Croozer GmbH</h3>
        <p>
          <a href="https://www.croozer.com/">Croozer</a> produces and sells
          trailers for all types of bicycles to transport your kids, dogs or
          cargo.
          <br />I prepared the relaunch of their Magento-based web-shop and
          underlying architecture to a micro services oriented architecture.
        </p>
        <p className="work__element__date">Year of development: 2017</p>
      </div>
    </div>

    <div className="work__element">
      <a href="https://www.fashionette.de/" className="work__element__image">
        <img src="/img/work/fashionette-portfolio.svg" alt="Fashionette" />
      </a>

      <div className="work__element__content">
        <h3>Fashionette</h3>
        <p>
          Founded in 2009, <a href="https://www.fashionette.de/">Fashionette</a>{" "}
          is a e-commerce company selling luxury and premium handbags and small
          leather goods.
          <br />
          Together with the team at Fashionette I prepared the relaunch of their
          Magento-based web-shop and underlying architecture. I was responsible
          to develop the architecture and guide the team in developing it.
          Furthermore I re-introduced Scrum and was responsible for scaling from
          one Scrum team to two including freelancers and remote workers.
        </p>
        <p className="work__element__date">Year of development: 2016</p>
      </div>
    </div>

    <div className="work__element">
      <a href="http://siteeffect.io/" className="work__element__image">
        <img src="/img/work/siteeffect.png" alt="Siteeffect" />
      </a>

      <div className="work__element__content">
        <h3>Siteeffect</h3>
        <p>
          <a href="http://siteeffect.io/">Siteeffect</a> is a startup developing
          a visual regression testing tool for developers and product managers
          helping with quality assurance. As a front-end developer for their web
          app I developed the visual interface with React.js.
        </p>
        <p className="work__element__date">Year of development: 2015</p>
      </div>
    </div>

    <div className="work__element">
      <a
        href="https://www.shareacamper.co.nz/"
        className="work__element__image"
      >
        <img src="/img/work/shareacamper.png" alt="Siteeffect" />
      </a>

      <div className="work__element__content">
        <h3>Share A Camper</h3>
        <p>
          If you ever want to travel through New Zealand with a campervan check
          out <a href="https://www.shareacamper.co.nz/">Share A Camper</a>. They
          realize private campervan hiring. I initally set up the architecture
          of the front-end with the team.
        </p>
        <p className="work__element__date">Year of development: 2015</p>
      </div>
    </div>

    {/* <div className="work__element">
      <a href="http://www.kms-blackspace.com/" className="work__element__image">
        <img src="/img/work/kms.png" alt="KMS Blackspace" />
      </a>

      <div className="work__element__content">
        <h3>KMS <span>Blackspace</span></h3>
        <p>Front-End Development &amp; TYPO3 Configuration for Design and Branding Agency <a href="http://www.kms-blackspace.com/">KMS BLACKSPACE</a> from Munich.</p>
        <p className="work__element__date">Years of development: 2013 &amp; 2014</p>
      </div>
    </div> */}

    <div className="work__element">
      <a href="http://www.sapdatacenter.com/" className="work__element__image">
        <img src="/img/work/sap.png" alt="SAP Data Center" />
      </a>

      <div className="work__element__content">
        <h3>
          SAP <span>Data Center</span>
        </h3>
        <p>
          <a href="http://helloanselm.com/">Anselm Hannemann</a> and I developed
          the Front-end for SAP's new Cloud service for large companies:{" "}
          <a href="http://www.sapdatacenter.com/">SAP Data Center</a>.
        </p>
        <p className="work__element__date">Year of development: 2013</p>
      </div>
    </div>

    {/* <div className="work__element">
      <a href="http://app-meister.com/" title="App Meister" className="work__element__image">
        <img src="/img/work/appmeister.png" alt="App Meister" />
      </a>

      <div className="work__element__content">
        <h3>App <span>Meister</span></h3>
        <p>For the start-up compendii I worked on the mobile version of <a href="http://app-meister.com/" title="App Meister">App Meister</a>. App Meister helps you to find the best iOS apps for your need.</p>
        <p className="work__element__date">Year of development: 2013</p>
      </div>
    </div> */}

    {/* <div className="work__element">
      <a href="http://www.dgu-online.de/" className="work__element__image">
        <img src="/img/work/dgu.png" alt="" />
      </a>

      <div className="work__element__content">
        <h3>DGU</h3>
        <p>The <a href="http://www.dgu-online.de/">Deutsche Gesellschaft für Unfallchirurgie</a> relaunched their online presence. At <a href="http://gebruederheitz.de/">/gebrüderheitz</a> we developed the TYPO3-based website.</p>
        <p className="work__element__date">Year of development: 2012</p>
      </div>
    </div> */}
  </>
);

export default Projects;
