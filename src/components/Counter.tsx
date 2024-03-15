import { useState } from "react"

import styles from "./Counter.module.scss"

export const Counter = () => {
    const [ count, setCount ] = useState(0);

    const increment = () => setCount(count + 1);

    return (
        <div>
            <div className={styles.count}>{count}</div>
            <button onClick={increment} className={styles.btn}>increment</button>
        </div>
    )


}