import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

const PublicLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <main className="bg-[#E1DCE0] aspect-auto flex flex-row overflow-hidden">
      <Sidebar />
      <main className="w-full bg-[#D7D7D7] flex h-screen overflow-auto md-max:relative">
        {children}
      </main>
    </main>
  );
};

export default PublicLayout;
