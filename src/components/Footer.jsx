import "./Footer.css";
import telegramIcon from "/src/assets/telegram.svg";
import githubIcon from "/src/assets/github.svg";
import emailIcon from "/src/assets/email.svg";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer-text">© 2026 Nam Tymur. All Rights Reserved.</p>
      <div className="footer-links">
        <a href="https://github.com/Lolderter" target="_blank">
          <img src={githubIcon} alt="GitHub" className="footer-icon" />
        </a>
        <a href="https://t.me/lolderter" target="_blank">
          <img src={telegramIcon} alt="Telegram" className="footer-icon" />
        </a>
        <a href="mailto:namtimur813@gmail.com">
          <img src={emailIcon} alt="Email" className="footer-icon" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
