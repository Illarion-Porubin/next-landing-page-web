import SideBar from "@/components/dashboard/sideBar/SideBar";
import "../globals.scss";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SideBar />
        {children}
      </body>
    </html>
  );
}
