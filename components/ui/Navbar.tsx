"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { cn } from "@/utils/cn";

export function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Components">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/mini-projects/card">Card Component</HoveredLink>
            <HoveredLink href="/mini-projects/email-subscribe">
              Email Subscribe
            </HoveredLink>
            <HoveredLink href="/mini-projects/product-cart">
              Product Cart
            </HoveredLink>
            <HoveredLink href="/astro-ship">Astro Ship</HoveredLink>
            <HoveredLink href="/nike-shop">Nike Shop</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
