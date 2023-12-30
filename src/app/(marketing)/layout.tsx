import type { Metadata } from "next";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[url('/purple_green.png')] bg-center bg-no-repeat bg-fixed bg-cover]">
      {children}
    </div>
  );
}
