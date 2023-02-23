import React from "react";
import { FC } from "react";

type footerItem = {
  title: string;
  className?: string;
  itemType?: "button" | "h1" | "a";
};

const FooterH1: FC<footerItem> = ({ title, className }) => {
  return <h1 className={className}>{title}</h1>;
};
const FooterA: FC<footerItem> = ({ title, className }) => {
  return (
    <a href="" className={className}>
      {title}
    </a>
  );
};
const FooterBtn: FC<footerItem> = ({ title, className }) => {
  return <button className={className}>{title}</button>;
};

const FooterItem: FC<footerItem> = ({ title, className, itemType }) => {
  const footerItemH1 =
    itemType === "h1" ? <FooterH1 title={title} className={className} /> : "";
  const footerItemA =
    itemType === "a" ? <FooterA title={title} className={className} /> : "";
  const footerItemBtn =
    itemType === "button" ? (
      <FooterBtn title={title} className={className} />
    ) : (
      ""
    );

  return (
    <>
      {footerItemBtn}
      {footerItemH1}
      {footerItemA}
    </>
  );
};

export default FooterItem;
