import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SAS Group - Teste",
  description: "Usuários",
};

export default function UsersLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (<>
            {children}
          </>
          );
}
