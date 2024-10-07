import React, { ReactNode } from "react";
import styles from "./FullPageContainer.module.scss";
import classNames from "classnames";

interface FullPageContainerProps {
  image: string;
  title: string;
  onClick?: () => void;
}

const FullPageContainer: React.FC<FullPageContainerProps> = ({
  image,
  title,
  onClick,
}) => {
  return (
    <div className={classNames(styles.container)} id="panels">
      <div className={styles.diamondBorder} onClick={onClick}>
        <div className={styles.diamond}>
          <div className={styles.diamondContainer}>
            <div className={styles.image}>
              <img loading="lazy" className="img" src={image} alt="image" />
            </div>
            <div className={styles.titleContainer}>
              <p className={styles.title}>{title}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullPageContainer;
