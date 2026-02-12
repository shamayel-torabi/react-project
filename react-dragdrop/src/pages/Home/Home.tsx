import { DropZone } from '../../components/DropZone';
import styles from './Home.module.css';

const Home = () => {
  return (
    <main className={styles.home}>
      {/* <header>
        <p>Header</p>
      </header> */}
      <section>
        <DropZone role='Users' />
        <DropZone role='Admin' />
      </section>
    </main>
  );
}

export default Home;