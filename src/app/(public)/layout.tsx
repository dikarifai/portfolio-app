import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

const PublicLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <main className="flex flex-row">
      <Sidebar /> {children}
    </main>
  );
};

export default PublicLayout;
