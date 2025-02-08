import { TabNavigation, TabNavigationLink } from "@components/TabNavigation/TabNavigation"
// import { MetricsCards } from "@/components/ui/homepage/MetricsCards"
import React from "react"

const navigation = [
    { name: "Overview", href: '#'},
    { name: "Monitoring", href: '#' },
    { name: "Audits", href: '#'},
]
export default function Layout({
                                   children,
                               }: Readonly<{
    children: React.ReactNode
}>) {
    // const pathname = usePathname()
    return (
        <>
            <div className="bg-white dark:bg-gray-925">
                <div className="p-4 sm:p-6">
                    {/*<MetricsCards />*/}
                </div>
                <TabNavigation className="mt-6 gap-x-4 px-4 sm:px-6">
                    {navigation.map((item) => (
                        <TabNavigationLink
                            key={item.name}
                            asChild
                            // active={pathname === item.href}
                        >
                            <a href={item.href}>{item.name}</a>
                        </TabNavigationLink>
                    ))}
                </TabNavigation>
                <>{children}</>
            </div>
        </>
    )
}
