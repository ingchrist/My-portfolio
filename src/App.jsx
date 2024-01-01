import styles from "./App.module.css";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
    return (
        <div className={styles.App}>
            <Navbar />
            <Hero />
            <About />
            <experience />
        </div>
    );
}

export default App;
