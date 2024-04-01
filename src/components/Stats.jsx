import React from "react";
import styles from "../style";
import { stats } from "../constants/Index";

const Stats = () => {
  return (
    <section
      className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}
    >
      {stats.map((stat) => (
        <div key={stat.id} className={`flex-1 flex justify-start items-center flex-row m-3`}>
          <h4 className="font-poppins font-semibold xs:text-[40px] xl:leading-[50px] leading-[40px] text-white text-[30px]" >{stat.value}</h4>
          <p className="font-poppins font-normal xs:text-[20px] xl:leading-[25px] leading-[21px] text-gradient uppercase ml-3 text-[15px]">{stat.title}</p>
        </div>
      ))}
    </section>
  );
};

export default Stats;
