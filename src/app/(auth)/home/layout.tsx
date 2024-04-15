import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SAS Group - Teste",
  description: "Home",
};

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
          <>
            {children}
          </>
      );
}
