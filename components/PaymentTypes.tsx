import Image from "next/image";
import React from "react";

const PaymentTypes = () => {
  return (
    <div>
      <div className="text-gray-600 text-xl mb-1 mt-3">Payment Methods:</div>
      <div className="flex mt-2">
        <Image
          className="mr-1"
          src="/images/pay1.webp"
          alt="logo"
          height={50}
          width={50}
        />
        <Image
          className="mr-1"
          src="/images/pay2.webp"
          alt="logo"
          height={50}
          width={50}
        />
        <Image
          className="mr-1"
          src="/images/pay3.webp"
          alt="logo"
          height={50}
          width={50}
        />
        <Image
          className="mr-1"
          src="/images/pay4.webp"
          alt="logo"
          height={50}
          width={50}
        />
        <Image
          className="mr-1"
          src="/images/pay5.webp"
          alt="logo"
          height={50}
          width={50}
        />
        <Image
          className="mr-1"
          src="/images/pay6.webp"
          alt="logo"
          height={50}
          width={50}
        />
        <Image
          className="mr-1"
          src="/images/pay7.webp"
          alt="logo"
          height={50}
          width={50}
        />
        <Image
          className="mr-1"
          src="/images/pay8.webp"
          alt="logo"
          height={50}
          width={50}
        />
        <Image
          className="mr-1"
          src="/images/pay9.webp"
          alt="logo"
          height={50}
          width={50}
        />
      </div>
    </div>
  );
};

export default PaymentTypes;
