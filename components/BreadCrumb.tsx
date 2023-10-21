import { NextPage } from "next";
import Link from "next/link";

interface BreadcrumbItem {
  text: string;
  link: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const BreadCrumb: NextPage<BreadcrumbProps> = ({ items }) => {
  return (
    <div className="flex mx-16">
      {items.map((item, index) => (
        <div key={index} className="flex">
          <Link
            href={item.link}
            className={`${
              item.link === "" ? "text-black" : "text-orange-700"
            } `}
          >
            {item.text}
          </Link>
          {index < items.length - 1 && <div className="mx-5">/</div>}
        </div>
      ))}
    </div>
  );
};

export default BreadCrumb;
