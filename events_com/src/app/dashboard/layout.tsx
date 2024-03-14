import Navbar from "@/components/navbar"
// import Sidebar from "@/components/sidebar"
import styles from "@/styles/dashboard/dashboard.module.css";
// import Footer from "../ui/dashboard/footer/footer"

const Layout = ({children}) => {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        {/*<Sidebar/>*/}
      </div>
      <div className={styles.content}>
        <Navbar/>
        {children}
      </div>
    </div>
  )
}

export default Layout