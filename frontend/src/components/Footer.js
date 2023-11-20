import { FaInstagram, FaTwitter } from "react-icons/fa";
import { PiPhoneFill } from "react-icons/pi";
import { GrFacebookOption } from "react-icons/gr";
import { MdEmail } from "react-icons/md";
import styles from './Footer.module.css'

export default function Footer() {
    return (
        <div className={styles.FooterBackground}>
            <div className={styles.ContainerCircleIcons}>
                <div className={styles.CircleSocialIcon}>
                    <GrFacebookOption className={styles.SocialIcon} />
                </div>
                <div className={styles.CircleSocialIcon}>
                    <FaInstagram className={styles.SocialIcon} />
                </div>
                <div className={styles.CircleSocialIcon}>
                    <FaTwitter className={styles.SocialIcon} />
                </div>
            </div>
            <p className={styles.FooterDescription}>Projeto colaborativo desenvolvido pelo curso de antropologia UFOPA - Santarém - Pará</p>
            <div className={styles.FooterContactsBackground}>
                <div className={styles.FooterContactPhone}>
                    <PiPhoneFill className={styles.FooterContactIcon} />
                    <p className={styles.FooterContactsText}>+55 (93) 99100-0001</p>
                </div>
                <div className={styles.FooterContactEmail}>
                    <MdEmail className={styles.FooterContactIcon} />
                    <p className={styles.FooterContactsText}>karajadigital@gmail.com</p>
                </div>
            </div>
        </div>
    )
}