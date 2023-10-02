import "./App.css";
import styles from "./App.module.scss";
import MainPage from "./components/mainPageLayout/mainPage";
import { Suspense, lazy } from "react";

const MyLazyComponent = lazy(() => import("./MyLazyComponent"));

const App = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <Suspense>
          <MainPage />
          <MyLazyComponent />
        </Suspense>
      </div>
    </div>
  );
};

export default App;
