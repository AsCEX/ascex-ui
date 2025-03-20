import {SidebarTrigger} from "./main.ts";
import { SidebarProvider } from "@hooks/useSidebar.tsx";
import {AppSidebar} from "@components/Sidebar/AppSidebar.tsx";
import {Breadcrumbs} from "@components/Breadcrumbs/Breadcrumbs.tsx";
import Dashboard from "./Dashboard"
import Cookies from "js-cookie";

function App() {

    const defaultOpen = Cookies.get("sidebar:state") === "true";

    return (
        <SidebarProvider defaultOpen={defaultOpen}>
            <AppSidebar />
            <div className="w-full flex flex-col h-screen">
                <header className="sticky top-0 z-10 flex h-16 shrink-0 items-center gap-2 border-b border-gray-200 bg-white px-4 dark:border-gray-800 dark:bg-gray-950">
                    <SidebarTrigger className="-ml-1" />
                    <div className="mr-2 h-4 w-px bg-gray-200 dark:bg-gray-800" />
                    <Breadcrumbs pathname={"/users/employees"} />
                </header>
                <main className={"main flex h-full w-full overflow-auto dark:bg-gray-800"}>
                    <Dashboard />
                </main>
            </div>
        </SidebarProvider>
    )
}

export default App
