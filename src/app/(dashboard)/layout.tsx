import SideBar from "@/components/dashboard/sideBar/SideBar";
import "../globals.scss";
import StoreProvider from "../StoreProvider";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="en">
        <body>
          <SideBar />
          {children}
        </body>
      </html>
    </StoreProvider>
  );
}
