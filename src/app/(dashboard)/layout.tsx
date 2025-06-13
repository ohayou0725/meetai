import React from 'react';
import {SidebarProvider} from "@/components/ui/sidebar";
import DashboardSidebar from "@/modules/dashboard/ui/components/dashboard-sidebar";
import DashboardNavbar from "@/modules/dashboard/ui/components/DashboardNavbar";
interface LayoutProps {
    children: React.ReactNode;
}
const Layout = ({children}:LayoutProps) => {
    return (
        <SidebarProvider>
            <DashboardSidebar />
            <main className="flex flex-col h-screen w-screen bg-muted">
                <DashboardNavbar></DashboardNavbar>
                {children}
            </main>
        </SidebarProvider>
    );
};

export default Layout;