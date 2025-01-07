import Link from "next/link";
import React from "react";

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <main>
      <aside style={{ width: "200px", background: "#eaeaea", padding: "1rem" }}>
        <nav>
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <li>
              <Link href="/dashboard">Dashboard Home</Link>
            </li>
            <li>
              <Link href="/dashboard/settings">Settings</Link>
            </li>
          </ul>
        </nav>
      </aside>
      <main style={{ marginLeft: "200px", padding: "1rem" }}>{children}</main>
    </main>
  );
};

export default DashboardLayout;
