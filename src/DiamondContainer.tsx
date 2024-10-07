import React, { ReactNode } from "react";
import styles from "./DiamondContainer.module.scss";
import classNames from "classnames";

interface DiamondContainerProps {
  image: string;
  title: string;
  onClick?: () => void;
}

const DiamondContainer: React.FC<DiamondContainerProps> = ({
  image,
  title,
  onClick,
}) => {
  const [retry, setRetry] = React.useState(0);

  const handleImageError = () => {
    if (retry < 3) {
      setRetry(retry + 1);
    }
  };
  return (
    <div className={classNames(styles.container)} id="panels">
      <div className={styles.diamondBorder} onClick={onClick}>
        <div className={styles.diamond}>
          <div className={styles.diamondContainer}>
            <div className={styles.image}>
              <img
                loading="lazy"
                className="img"
                src={`${image}?retry=${retry}`}
                alt="image"
                onError={handleImageError}
              />{" "}
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

export default DiamondContainer;
