import type { ReactNode } from "react";

interface ContentWrapperProps {
    children: ReactNode;
}

const ContentWrapper = ({ children }: ContentWrapperProps) => {
    return (
        <main className="flex-1 p-6">
            {children}
        </main>
    );
};

export default ContentWrapper;