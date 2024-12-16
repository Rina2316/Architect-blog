"use client";

import { usePathname } from "next/navigation";
import MainPageImage from "../../icons/MainPageImage.svg?icon";
import SecondPageImage from "../../icons/SecondPageImage.svg?icon";
import Architecture from "../../icons/architecture.svg?icon";
import CustomButton from "../CustomButton/CustomButton";
import styles from "./ImageComponent.module.scss";

interface ImageComponentProps {
  onScrollToArticles?: () => void;
}


const ImageComponent:  React.FC<ImageComponentProps> = ({onScrollToArticles}) => {
  const pathname = usePathname();
  

  return (
    <div className={styles.wrapper}>
      {pathname === "/" ? (
        <section>
          <Architecture className={styles.architecture}/>
          <MainPageImage className={styles.image} />
            <div className={styles.block}>
              <p className={styles.paragraphFirstPage}>
                We, as a brand, turn your dreams into fantastique interiors and architectural designs. Our projects inspire the pursuit of your great aspirations. We create the alchemy of luxury and the enjoyment of our clientèle.
              </p>
              <CustomButton size="s" variant="secondary" onClick={onScrollToArticles}>
                All projects
              </CustomButton>
            </div>
            <div className={styles.lastBlock}/>
        </section>
      ) : (
        <section>
          <div className={styles.blockTag}>
          <h1 className={styles.tagSecondPage}>
            The Importance of Sustainable Design in Architectural Projects
          </h1>
          </div>
          <div className={styles.blockParagraph}>
          <p className={styles.paragraphSecondPage}>
            In recent years, sustainable design has become a cornerstone of architectural project planning. Sustainable design focuses on creating buildings that minimize environmental impact and promote energy efficiency.
          </p>
          </div>
            <SecondPageImage className={styles.imageSecond} />
          
        </section>
      )}
    </div>
  );
};

export default ImageComponent;
