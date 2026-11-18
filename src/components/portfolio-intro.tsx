export function PortfolioIntro() {
  return (
    <div className="portfolio-intro">
      <div className="intro-cube-stage" aria-hidden="true">
        <div className="intro-cube">
          {["front", "back", "right", "left", "top", "bottom"].map(face => (
            <span key={face} className={`intro-cube-face intro-cube-${face}`}>cjd<span>.</span></span>
          ))}
        </div>
      </div>
      <p className="sr-only" role="status">Opening portfolio</p>
    </div>
  );
}
