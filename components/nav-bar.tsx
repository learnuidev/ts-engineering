"use client";

import { Icons } from "@/components/icons";
import { useRouter } from "next/navigation";

export function NavButton({ onClick, children }: any) {
  return (
    <button onClick={onClick} className="hover:bg-none active:bg-none text-2xl">
      {children}
    </button>
  );
}

export function Navbar() {
  const router = useRouter();

  return (
    <div className="mt-4 space-x-12 sm:space-x-16 flex items-center justify-center">
      <NavButton>
        <Icons.home
          onClick={() => {
            router.push("/");
          }}
        />
      </NavButton>
      <NavButton
        onClick={() => {
          router.push("/search");
        }}
      >
        <Icons.magnifyingGlass />
      </NavButton>
      <NavButton>
        <Icons.verticalStack
          onClick={() => {
            router.push("/history");
          }}
        />
      </NavButton>
      <NavButton>
        <Icons.compass
          onClick={() => {
            router.push("/learn");
          }}
        />
      </NavButton>
    </div>
  );
}
