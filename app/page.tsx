import Image from 'next/image'
import styles from './page.module.scss'
import Header from '@/app/_files/components/Header'
import Button from './_files/components/SiteButton'

export default function Home() {
  return (
    <main className={styles.main}>
      <Header/>
      <div className={styles.pageContent}>
        <div style={{flex: 1, gap: "1.5em", display: 'flex', flexDirection: 'column', justifyContent: "center"}}>
            <Button bg="#000000" fg='#FFFFFF'>Marketplace now live</Button>
            <h1>The new era of <br/>FabrikGate is here.</h1>
            <p style={{fontWeight: 450}}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
            <Button bg="#FFFFFF" fg='#8E8E8E' border="1px solid #E0E1DA">Launch App</Button>
        </div>
        <div style={{flex: 1, justifyContent: "center", alignItems: "center", display: "flex", background: "#F9F9F9", margin: "5em 0"}}>
            <img src="images/photo.png"/>
        </div>
      </div>
    </main>
  )
}
