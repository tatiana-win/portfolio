import './Header.css';
export const Header = () => {
    return (
      <header className="header">
          <div className="header-inner">
              <h1 className="header-title">
                  Hi! My name is Tatiana
                  <br/>
                  I build things for the web
              </h1>
              <p className="header-text">
                  I’m a JavaScript developer with 7+ years of commercial experience
                  <br />
                  I have extensive knowledge JavaScript, TypeScript, Css, Angular, React, Redux
              </p>
              <div className="header-divider" />
          </div>
      </header>
    );
}
