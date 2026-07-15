import "./Footer.css";
import telegramIcon from "../assets/telegram.svg";
import githubIcon from "../assets/github.svg";
import emailIcon from "../assets/email.svg";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer-text">© 2026 Nam Tymur. All Rights Reserved.</p>
      <div className="footer-links">
        <a
          href="https://github.com/Lolderter"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={githubIcon} alt="GitHub" className="footer-icon" />
        </a>
        <a
          href="https://t.me/lolderter"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={telegramIcon} alt="Telegram" className="footer-icon" />
        </a>
        <a
          href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=namtimur813@gmail.com"
          target="_blank"
        >
          <img src={emailIcon} alt="Email" className="footer-icon" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
