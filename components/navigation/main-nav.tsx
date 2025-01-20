// components/Navigation/MainNav.tsx
import Link from "next/link";
import { Button } from "../ui/button";
import { WhichLogo } from "../which-logo";
import {
  LoginLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/components";

const MainNav = () => {
  const navItems = [
    { label: "Tech", href: "/tech" },
    { label: "Appliances", href: "/appliances" },
    { label: "Home & garden", href: "/home-garden" },
    { label: "Money", href: "/money" },
    { label: "Family & health", href: "/family-health" },
    { label: "Cars", href: "/cars" },
    { label: "Travel", href: "/travel" },
    { label: "Consumer rights & campaigns", href: "/consumer-rights" },
    { label: "Services", href: "/services" },
  ];

  return (
    <nav className="border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="font-bold text-2xl md:h-[86px] py-6 px-4">
            <WhichLogo />
          </Link>

          <div className="flex items-center space-x-4">
            <Button variant="outline">
              <LoginLink>Log in</LoginLink>
            </Button>
            <Button>
              <RegisterLink>Join</RegisterLink>
            </Button>
          </div>
        </div>
        <div className="hidden lg:flex space-x-8 container mx-auto px-4 pb-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm hover:text-blue-600 transition-colors font-semibold"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default MainNav;
