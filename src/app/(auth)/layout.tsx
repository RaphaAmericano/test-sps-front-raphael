
import { redirect } from "next/navigation";
import { lazy, useEffect } from "react";

import { Inter } from "next/font/google";
import { Navbar} from "@/components/Navbar/Navbar";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

    return (<>
        <Navbar />
        {children}
      </>
    );

  
}
