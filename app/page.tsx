<<<<<<< HEAD
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              app/page.tsx
            </code>
            .
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
=======
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

// Types
interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  category: string;
}

const HomePage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if user is logged in
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);

    // Mock fetching products
    const mockProducts: Product[] = [
      {
        id: "1",
        name: "สมาร์ทโฟนรุ่นใหม่",
        price: 25000,
        description:
          "สมาร์ทโฟนรุ่นล่าสุดพร้อมกล้องความละเอียดสูงและแบตเตอรี่ที่ใช้งานได้ยาวนาน",
        imageUrl: "/placeholder/300/200",
        category: "อิเล็กทรอนิกส์",
      },
      {
        id: "2",
        name: "โน๊ตบุ๊คประสิทธิภาพสูง",
        price: 45000,
        description: "โน๊ตบุ๊คสำหรับทำงานและเล่นเกม พร้อมการ์ดจอรุ่นใหม่",
        imageUrl: "/placeholder/300/200",
        category: "อิเล็กทรอนิกส์",
      },
      {
        id: "3",
        name: "เสื้อยืดคอกลม",
        price: 390,
        description: "เสื้อยืดคอกลมผ้าฝ้าย 100% นุ่มสบาย",
        imageUrl: "/placeholder/300/200",
        category: "เสื้อผ้า",
      },
      {
        id: "4",
        name: "กางเกงยีนส์",
        price: 1290,
        description: "กางเกงยีนส์ทรงสลิม ผ้ายีนส์คุณภาพดี",
        imageUrl: "/placeholder/300/200",
        category: "เสื้อผ้า",
      },
      {
        id: "5",
        name: "ชุดตกแต่งบ้าน",
        price: 2500,
        description: "ชุดตกแต่งบ้านสไตล์มินิมอล",
        imageUrl: "/placeholder/300/200",
        category: "บ้านและสวน",
      },
      {
        id: "6",
        name: "หม้อหุงข้าวดิจิตอล",
        price: 1590,
        description: "หม้อหุงข้าวระบบดิจิตอล ความจุ 1.8 ลิตร",
        imageUrl: "/placeholder/300/200",
        category: "เครื่องใช้ในครัว",
      },
    ];

    const uniqueCategories = Array.from(
      new Set(mockProducts.map((product) => product.category))
    );

    setProducts(mockProducts);
    setCategories(uniqueCategories);
    setLoading(false);

    // ในอนาคตจะเชื่อมต่อกับ backend
  }, []);

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory
      ? product.category === selectedCategory
      : true;
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Link
                href="/"
                className="text-2xl font-bold text-blue-600 flex items-center"
              >
                <span className="text-3xl">🛒</span>
                <span className="ml-2">Your Marketplace</span>
              </Link>
            </div>

            <div className="w-full max-w-xl px-4">
              <div className="relative">
                <input
                  type="text"
                  className="w-full h-10 pl-10 pr-4 py-1 text-base border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="ค้นหาสินค้า..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <div className="absolute left-4 top-3">
                  <svg
                    className="h-4 w-4 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-2 sm:space-x-4">
              {isLoggedIn ? (
                <div className="flex items-center space-x-4">
                  <Link
                    href="/cart"
                    className="relative p-2 text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-blue-600 rounded-full">
                      0
                    </span>
                  </Link>
                  <div className="relative group">
                    <button className="p-2 text-gray-700 hover:text-blue-600 transition-colors flex items-center space-x-1">
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      <span className="hidden sm:inline-block">
                        บัญชีของฉัน
                      </span>
                    </button>
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg overflow-hidden z-20 hidden group-hover:block">
                      <div className="py-2">
                        <Link
                          href="/profile"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          ข้อมูลส่วนตัว
                        </Link>
                        <Link
                          href="/orders"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          ประวัติการสั่งซื้อ
                        </Link>
                        <button
                          onClick={() => {
                            localStorage.removeItem("token");
                            setIsLoggedIn(false);
                          }}
                          className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                        >
                          ออกจากระบบ
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex space-x-2 sm:space-x-4">
                  <Link
                    href="/login"
                    className="px-4 py-2 border border-transparent rounded-lg text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                  >
                    Login
                  </Link>
                  <Link
                    href="/register"
                    className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                  >
                    Register
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-grow">
        {/* Hero section */}
        <div className="relative bg-gradient-to-r from-blue-600 to-indigo-700 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:w-full lg:pb-28 xl:pb-32">
              <div className="mt-10 mx-auto max-w-7xl px-4 lg:px-8 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-28">
                <div className="sm:text-center lg:text-left">
                  <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                    <span className="block">ช้อปปิ้งออนไลน์ที่ดีที่สุด</span>
                    <span className="my-3 block text-blue-200">
                      ด้วยราคาที่คุ้มค่า
                    </span>
                  </h1>
                  <p className="mt-3 text-base text-blue-100 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                    พบกับสินค้าคุณภาพดี ราคาถูก
                    จัดส่งถึงบ้านคุณอย่างรวดเร็วและปลอดภัย
                  </p>
                  <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                    <div className="rounded-md shadow">
                      <a
                        href="#products"
                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-blue-700 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10 transition-colors"
                      >
                        ดูสินค้าเลย
                      </a>
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-3">
                      <a
                        href="#categories"
                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-500 bg-opacity-60 hover:bg-opacity-70 md:py-4 md:text-lg md:px-10 transition-colors"
                      >
                        หมวดหมู่สินค้า
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            {/* <div className="h-56 w-full bg-gradient-to-r from-blue-500/30 to-indigo-600/30 backdrop-blur-sm sm:h-72 md:h-96 lg:w-full lg:h-full"></div> */}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Categories */}
          <div id="categories" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              หมวดหมู่สินค้า
            </h2>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === null
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                }`}
              >
                ทั้งหมด
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? "bg-blue-600 text-white shadow-md"
                      : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Products */}
          <div id="products">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold text-gray-900">สินค้าแนะนำ</h2>
              {searchQuery && (
                <p className="text-sm text-gray-500">
                  ผลการค้นหา: "{searchQuery}"
                </p>
              )}
            </div>

            {loading ? (
              <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
              </div>
            ) : filteredProducts.length === 0 ? (
              <div className="text-center py-16 bg-gray-50 rounded-xl border border-gray-100">
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <h3 className="mt-2 text-lg font-medium text-gray-900">
                  ไม่พบสินค้า
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  ลองค้นหาด้วยคำค้นอื่น หรือเลือกหมวดหมู่อื่น
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="group bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-100"
                  >
                    <Link href={`/product/${product.id}`}>
                      <div className="h-48 w-full bg-gray-200 group-hover:opacity-90 transition-opacity">
                        <div className="w-full h-full flex items-center justify-center">
                          <span className="text-gray-500 text-sm">
                            {product.name}
                          </span>
                        </div>
                      </div>
                      <div className="p-5">
                        <div className="flex justify-between items-start">
                          <h3 className="text-lg font-medium text-gray-900 group-hover:text-blue-600 transition-colors truncate">
                            {product.name}
                          </h3>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                            {product.category}
                          </span>
                        </div>
                        <p className="mt-2 text-sm text-gray-500 line-clamp-2">
                          {product.description}
                        </p>
                        <div className="mt-3 flex justify-between items-center">
                          <p className="text-lg font-bold text-gray-900">
                            ฿{product.price.toLocaleString()}
                          </p>
                          <div className="ml-4">
                            <button
                              className="inline-flex items-center p-2 border border-transparent rounded-full shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                              onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                if (isLoggedIn) {
                                  console.log("Add to cart:", product);
                                  // In the future, this will connect to the backend
                                } else {
                                  window.location.href = "/login";
                                }
                              }}
                            >
                              <svg
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-2">🛒</span>
                <span className="text-xl font-bold">Your Marketplace</span>
              </div>
              <p className="text-gray-300">
                Your Marketplace
                เป็นแพลตฟอร์มซื้อขายสินค้าออนไลน์ที่รวบรวมสินค้าคุณภาพดีจากผู้ขายที่น่าเชื่อถือ
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">ลิงก์ด่วน</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    หน้าหลัก
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    เกี่ยวกับเรา
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    ติดต่อเรา
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faq"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    คำถามที่พบบ่อย
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">ติดต่อเรา</h3>
              <address className="not-italic text-gray-300">
                <p>123 ถนนสุขุมวิท</p>
                <p>กรุงเทพมหานคร 10110</p>
                <p className="mt-2">
                  <a
                    href="mailto:contact@yourmarketplace.com"
                    className="hover:text-white transition-colors"
                  >
                    contact@yourmarketplace.com
                  </a>
                </p>
                <p>
                  <a
                    href="tel:+6623456789"
                    className="hover:text-white transition-colors"
                  >
                    02-345-6789
                  </a>
                </p>
              </address>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} Jangkhon. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
>>>>>>> b778bd4 (Main,Login,Register Page)
