"use client";

import { HeroUIProvider } from "@heroui/react";

interface ProvidersProps {
  children: React.ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return <HeroUIProvider>{children}</HeroUIProvider>;
};

export default Providers;
