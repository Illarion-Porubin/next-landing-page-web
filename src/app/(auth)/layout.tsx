import StoreProvider from "../StoreProvider";
import "../globals.scss";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </StoreProvider>
  );
}
