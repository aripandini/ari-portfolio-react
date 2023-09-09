function Portfolio() {
    return(
        <section id="work" className="work">
      <div className="title">
        <h2>Portfolio</h2>
      </div>
      <div className="project-grid">
      <a href="https://pregnant-genie-619af0388864.herokuapp.com/" className="project projectthree">
                    <div class="project-title">
                        <h3>Eugenie</h3>
                        <p>UGC Market</p>
                    </div>
                </a>
        <a href="https://github.com/skywalkah/borrowhood" className="project projecttwo">
          <div className="project-title">
            <h3>Borrowhood</h3>
            <p>Need something? Borrow it!</p>
          </div>
        </a>
        <a href="https://obelisk477.github.io/bookipedia/" className="project projectone">
          <div className="project-title">
            <h3>Bookipedia</h3>
            <p>Find Books!</p>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Portfolio