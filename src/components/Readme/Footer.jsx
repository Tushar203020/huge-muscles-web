import { Footer } from "flowbite-react";
import {
  BsGithub,
  BsLinkedin,
  BsEnvelope,
  BsWhatsapp,
  BsTelegram,
} from "react-icons/bs";

import styles from "./Footer.module.css"; // Import CSS module

function FooterComponent() {
  return (
    <Footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.icons}>
          <Footer.Icon
            href=""
            icon={BsLinkedin}
          />
          <Footer.Icon href="" icon={BsGithub} />
          <Footer.Icon
            href=""
            icon={BsEnvelope}
          />
          <Footer.Icon href="" icon={BsTelegram} />
          <Footer.Icon
            href=""
            icon={BsWhatsapp}
          />
        </div>
      </div>
    </Footer>
  );
}

export default FooterComponent;

/* Footer.module.css */
