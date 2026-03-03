import { useState } from 'react';
import reactLogo from '../../assets/react.svg';
import viteLogo from '/vite.svg';
import styles from './app.module.scss';

export interface AppProps {
  /** Id for the top-level app container */
  id: string;
}

function App({ id }: AppProps) {
  const [count, setCount] = useState(0);

  return (
    <div id={id}>
      <div>
        <a
          href="https://vite.dev"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Vite (opens in new window)"
        >
          <img src={viteLogo} className={styles.logo} alt="" />
        </a>
        <a
          href="https://react.dev"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="React (opens in new window)"
        >
          <img src={reactLogo} className={`${styles.logo} ${styles.react}`} alt="" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className={styles.card}>
        <button
          type="button"
          onClick={() => setCount((count) => count + 1)}
          aria-label={`Increment count. Current count: ${count}`}
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className={styles.readTheDocs}>Click on the Vite and React logos to learn more</p>
    </div>
  );
}

export { App };
