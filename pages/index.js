import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../comps/Footer'
import Navbar from '../comps/Navbar'
import styles from '../styles/Home.module.css' // importing Home.module.css file

export default function Home() {
  return (
    <div>
      {/* using Home.module.css */}
      <h1 className={styles.title}>Home Page</h1>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis tempora nisi cumque fugit culpa consequatur deleniti ipsam reprehenderit laudantium ad cum dignissimos sapiente nihil debitis, ex voluptatem ut vitae repellat nemo a maxime? Laudantium fuga rem consequatur eum error maxime repellendus labore quae soluta voluptas voluptatibus, rerum maiores expedita enim voluptatem totam libero nostrum perferendis amet qui quod tempora ut quis doloribus. Officia est distinctio repellendus omnis sequi temporibus soluta sed harum deserunt esse corrupti in dicta quae assumenda tempore animi sint, maxime modi molestiae natus velit officiis. Repudiandae dolore eius nihil tempore enim! Exercitationem nostrum eveniet blanditiis autem nisi?.</p>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis tempora nisi cumque fugit culpa consequatur deleniti ipsam reprehenderit laudantium ad cum dignissimos sapiente nihil debitis, ex voluptatem ut vitae repellat nemo a maxime? Laudantium fuga rem consequatur eum error maxime repellendus labore quae soluta voluptas voluptatibus, rerum maiores expedita enim voluptatem totam libero nostrum perferendis amet qui quod tempora ut quis doloribus. Officia est distinctio repellendus omnis sequi temporibus soluta sed harum deserunt esse corrupti in dicta quae assumenda tempore animi sint, maxime modi molestiae natus velit officiis. Repudiandae dolore eius nihil tempore enim! Exercitationem nostrum eveniet blanditiis autem nisi?</p>
      <Link href="/ninjas">
        <a className={styles.btn}>See Ninja List</a>
      </Link>
    </div>
  )
}
