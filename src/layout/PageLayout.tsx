import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";

type PageLayoutProps = {
  children: React.ReactNode;
};

export const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <>
      <NavBar />
      <main className="space-y-10 md:space-y-20 max-w-[1512px] mx-auto">
        {children}
      </main>
      <Footer />
    </>
  );
};
