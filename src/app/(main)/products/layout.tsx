import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header></Header>
      <main className="bg-[url('/blue_green.png')] bg-center bg-no-repeat bg-fixed bg-cover]">
        <div className="min-h-[700px]">
          <div className="max-w-[85%] mx-auto pb-[75px] pt-[40px] px-10">{children}</div>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
}
