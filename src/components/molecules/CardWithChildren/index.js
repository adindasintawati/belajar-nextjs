import React from "react";

const Card = ({ children, cardClassname }) => {
  return (
    <>
      <div className={`border rounded-lg shadow-lg w-[300px] ${cardClassname}`}>{children}</div>
    </>
  );
};

export default Card;

/** children
 * children : properti khusus yang dipake buat mengirimkan komponen amak(children) ke dalam komponen induk(parent)
 * dalam kasus ini komponen Card ajab menjadi komponen parent/pembungkus
 * untuk komponen children didalam <Card>{komponen children}</Card>
 */
