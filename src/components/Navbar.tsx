import Link from "next/link";

import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <header className="shadow-sm">
      <nav className="m-auto flex max-w-5xl items-center justify-between px-3 py-5">
        <Link href="/" className="flex items-center gap-3">
          {/* <Image src={logo} width={90} height={90} alt="logo" /> */}
          <h1 className="text-2xl font-semibold text-pretty">Sell Old</h1>
        </Link>{" "}
        <Button asChild>
          <Link href="/sales/new">Sell Now</Link>
        </Button>
      </nav>
    </header>
  );
}
