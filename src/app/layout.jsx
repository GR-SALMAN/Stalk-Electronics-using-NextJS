import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav className="flex">
          {/* Use direct reference to the image in public folder */}
          <Link href="/">
            <button id="BrandLogo">
              <h1>
                STALK <sup>electronics</sup>
              </h1>
            </button>

            {/* <img src="public/Icons/StalkIcon.png" alt="HomeIcon" /> */}
          </Link>

          {/* middle nav area */}
          <div className="middleNav">
            <div>
              <Link href="/">Home</Link>
            </div>
            <div>
              <Link href="/Contact">Contact</Link>
            </div>
            <div>
              <Link href="/About">About</Link>
            </div>
            <div>
              <Link href="/SignUp">Sign Up</Link>
            </div>
            <div>
              <Link href="/AddCategory">Add Category</Link>
            </div>
          </div>

          {/* Search Bar Section */}
          <div className="SearchBar flex">
            <input
              style={{
                backgroundColor: "transparent",
                width: "152px",
                height: "18px",
              }}
              type="text"
              placeholder="What are you looking for?"
            />
            <button>
              {" "}
              <Image
                src="/Icons/searchIcon.png"
                alt="search icon"
                width={24}
                height={24}
              />
            </button>
          </div>

          {/* favorites and cart section */}
          <div className="felx">
            <Image
              src="/Icons/Favorites.png"
              alt="favorites icon"
              width={32}
              height={32}
            />
            <Link href="/Cart">
              <Image
                src="/Icons/CartIcon.png"
                alt="cart icon"
                width={32}
                height={32}
              />
            </Link>
          </div>
        </nav>

        {children}
      </body>
    </html>
  );
}
