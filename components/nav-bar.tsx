"use client";

import { Icons } from "@/components/icons";
import { useRouter } from "next/navigation";

export function NavButton({ onClick, children }: any) {
  return (
    <button onClick={onClick} className="hover:bg-none active:bg-none text-lg">
      {children}
    </button>
  );
}

export function Navbar() {
  const router = useRouter();

  return (
    <div className="mt-2 space-x-12 flex items-center justify-center">
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
            router.push("/tasks");
          }}
        />
      </NavButton>
      <NavButton>
        <Icons.compass
          onClick={() => {
            router.push("/discover");
          }}
        />
      </NavButton>
    </div>
  );
}
