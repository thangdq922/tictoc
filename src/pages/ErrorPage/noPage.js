import styles from './ErrorPage.module.css'
import Image from '../../component/Image'
import Button from '../../component/Button'
import { PlayIcon } from '../../component/Icons'

function NoPage() {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <p className={styles['not-found']}>
                    <span>4</span>
                    <span style={{ display: 'none' }}>0</span>
                    <img src="https://sf16-website-login.neutral.ttwstatic.com/obj/tiktok_web_login_static/tiktok/site/static/webapp-static-site/bbad6f99219877ac47f9.png"
                        alt="0"
                        className={styles.img} />
                    <span>4</span>
                </p>
                <p className={styles.p2}>Couldn't find this page</p>
                <p className={styles.p3}>Check out more trending videos on TikTok</p>
                <Button primary large leftIcon={<PlayIcon />} to='/' className={styles.Button} >Watch now</Button>
            </div>

            <div className={styles.footer}>
                <div className={styles.fwrapper}>
                    <p className={styles.p}>Download now</p>
                    <div className={styles['icon-container']}>
                        { /* eslint-disable-next-line */}
                        <a href={"#"} className={styles.a}>
                            <Image src="https://lf16-tiktok-common.ibytedtos.com/obj/tiktok-web-common-sg/mtact/static/images/share/video/ic-qrcode.svg"
                                className={styles.qr}
                                alt='QR CODE' />
                            <span>QR CODE</span>
                        </a>
                        <a href="https://www.microsoft.com/store/apps/9NH2GPH4JZS4"
                            target="_blank"
                            rel="nofollow noopener noreferrer"
                            className={styles.a}>
                            <Image src="https://sf16-website-login.neutral.ttwstatic.com/obj/tiktok_web_login_static/tiktok/site/static/webapp-static-site/f1596f39e85631c052c4.png"
                                alt="microsoft-store"
                                lang="en"
                                className={styles['microsoft-store']} />
                        </a>
                        <a href="https://www.tiktok.com/download-link/af/id1235601864"
                            target="_blank"
                            rel="nofollow noopener noreferrer"
                            className={styles.a}>
                            <Image src="https://sf16-website-login.neutral.ttwstatic.com/obj/tiktok_web_login_static/tiktok/site/static/webapp-static-site/d60c66b9f5dc9647f3a3.png"
                                alt="apple-store" lang="en"
                                className={styles["apple-store"]} />
                        </a>
                        <a href="https://www.amazon.com/dp/B07KR1RJL2/"
                            target="_blank"
                            rel="nofollow noopener noreferrer"
                            className={styles.a}>
                            <Image src="https://sf16-website-login.neutral.ttwstatic.com/obj/tiktok_web_login_static/tiktok/site/static/webapp-static-site/d60c66b9f5dc9647f3a3.png"
                                alt="amazon-store"
                                lang="en"
                                className={styles["amazon-store"]} />
                        </a>
                        <a href="https://www.tiktok.com/download-link/af/com.ss.android.ugc.trill"
                            target="_blank"
                            rel="nofollow noopener noreferrer"
                            className={styles.a}>
                            <Image src="https://sf16-website-login.neutral.ttwstatic.com/obj/tiktok_web_login_static/tiktok/site/static/webapp-static-site/d60c66b9f5dc9647f3a3.png"
                                alt="google-store"
                                lang="en"
                                className={styles["google-store"]} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NoPage