import react, {useState} from 'react'
import styles from './Header.module.css'
import {
    IonButton,
    IonCard,
    IonCardContent,
    IonCardSubtitle,
    IonCol,
    IonIcon,
    IonRow,
    useIonToast,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonItem,
  } from '@ionic/react';




export default function Header() {

    const [isHovered, setIsHovered] = useState(false);
    
    //this causes terrible reload issues that look horrible, will try to find an alternative way
    const headerText = isHovered ? 'TOO LATE!' : 'Turn back now?';


    return(
    <div className={styles.header}>

        <h1 className={styles.header__text}>
            ASCENSION
        </h1>

        <div className={styles.menu}>
            <div>
                <p> Guide </p>
            </div>
            <div>
                <p> Learn </p>
            </div>
            <div>
                <p> Review </p>
            </div>
        </div>

        <h1 onMouseEnter={()=>setIsHovered(true)} onMouseLeave={()=>setIsHovered(false)} className={styles.header__text}>
            {headerText}
        </h1>

    </div>
    );

}