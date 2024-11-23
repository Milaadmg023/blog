import Link from "next/link";

type Item = {
  id: number;
  name: string;
  icon: string;
  href: string;
};

export default function Navbar() {
  const menuItems : Item[] = [
    {
      id: 1,
      name: "درباه ما",
      icon: "ℹ",
      href: "/about",
    },
    {
      id: 2,
      name: "خانه",
      icon: "🏠",
      href: "/",
    },
    {
      id: 3,
      name: "ارتباط با ما",
      icon: "📞",
      href: "/contact",
    },
  ];
  return (
    <>
      {/* desktop navbar */}
      <nav className="hidden md:flex justify-between py-3 px-5">
        <div id="items" className="flex gap-4 text-lg">
          {menuItems.map((item) => {
            return <Link key={item.id} href={item.href}>{item.name}</Link>;
          })}
        </div>
        <div id="icons" className="flex gap-3 text-xl">
          <button>🔎</button>
          <button className="text-2xl">☀</button>
        </div>
      </nav>
      {/* mobile navbar */}
      <nav className="md:hidden px-4 fixed bottom-1 left-0 right-0 flex items-center justify-center z-100">
        <div className="flex flex-col bg-gray-100 dark:bg-slate-800 rounded-lg shadow-2xl">
          <div className="border border-gray-300 py-1 flex gap-1 shadow-xl rounded-lg dark:bg-slate-800 dark:text-slate-100 dark:border-slate-600">
            {menuItems.map((item) => {
              return (
                <div key={item.id} className="group relative px-1 cursor-pointer">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full hover:text-blue-500">
                    <Link href={item.href}>{item.icon}</Link>
                  </div>
                  <span className="absolute whitespace-nowrap -top-8 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
                    {item.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </nav>
    </>
  );
}
