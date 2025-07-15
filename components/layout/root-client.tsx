"use client";
import Preloader from "@/components/animation/preloader";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { useEffect, useState } from "react";

export default function RootClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Preloader show={loading} />
      <div style={{ opacity: loading ? 0 : 1, transition: "opacity 0.3s" }}>
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}
