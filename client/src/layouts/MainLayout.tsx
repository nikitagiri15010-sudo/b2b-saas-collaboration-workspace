import type { ReactNode } from "react";

type MainLayoutProps = {
  children: ReactNode;
};

function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen">
      {children}
    </div>
  );
}

export default MainLayout;