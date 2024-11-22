import Image from "next/image";
import brandImage4 from "@/assets/img/brand/brand__4.png";

const HeaderAnimate = () => {
  const items = [
    { name: "GANA DE $50,000 A $100,000 MXN AL MES", img: brandImage4 },
    { name: "GANA DE $50,000 A $100,000 MXN AL MES", img: brandImage4 },
    { name: "GANA DE $50,000 A $100,000 MXN AL MES", img: brandImage4 },
    { name: "GANA DE $50,000 A $100,000 MXN AL MES", img: brandImage4 },
    { name: "GANA DE $50,000 A $100,000 MXN AL MES", img: brandImage4 },
    { name: "GANA DE $50,000 A $100,000 MXN AL MES", img: brandImage4 },
    { name: "GANA DE $50,000 A $100,000 MXN AL MES", img: brandImage4 },
    { name: "GANA DE $50,000 A $100,000 MXN AL MES", img: brandImage4 },
    { name: "GANA DE $50,000 A $100,000 MXN AL MES", img: brandImage4 },
    { name: "GANA DE $50,000 A $100,000 MXN AL MES", img: brandImage4 },
  ];
  return (
    <div className="header__animate">
      <div className="container-fluid">
        <div className="header__animate__wraper">
          {items?.map(({ name, img }, idx) => (
            <div key={idx} className="header__animate__item">
              <Image src={img} alt="" />
              <h3>{name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeaderAnimate;
