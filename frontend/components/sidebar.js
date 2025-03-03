"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "../styles/styles.css";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <nav>
      <ul className="nav flex-column">
        <li className={`nav-item ${pathname === "/" ? "active" : ""}`}>
          <Link href="/" className="nav-link text-white">
            <img src="/boxes.svg" alt="Product List" className="me-2" />
            Product List
          </Link>
        </li>
        <li className={`nav-item ${pathname === "/update_stock" ? "active" : ""}`}>
          <Link href="/update_stock" className="nav-link text-white">
            <img src="/box.svg" alt="Update Stock" className="me-2" />
            Update Stock
          </Link>
        </li>
        <li className={`nav-item ${pathname === "/add_product" ? "active" : ""}`}>
          <Link href="/add_product" className="nav-link text-white">
            <img src="/database-add.svg" alt="Add Product" className="me-2" />
            Add Product
          </Link>
        </li>
      </ul>
    </nav>
  );
}
