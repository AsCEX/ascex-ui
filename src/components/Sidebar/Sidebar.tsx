import {
    Drawer,
    DrawerClose,
    DrawerContent, DrawerDescription,
    DrawerTitle,
} from "@components/Drawer/Drawer"
import "./Sidebar.css";
import { cx, focusRing } from "@utils/utils"
import * as VisuallyHidden from "@radix-ui/react-visually-hidden"
import { RiCloseLine } from "@remixicon/react"
import * as React from "react"
import { Button } from "@components/Button/Button"
import {useSidebar} from "../../main.ts";
import clsx from "clsx";

const Sidebar = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(
    (
    {
         className,
         children,
         ...props
    }, ref) => {
        const { isMobile, state, openMobile, setOpenMobile } = useSidebar()

        if (isMobile) {
            return (
                <Drawer open={openMobile} onOpenChange={setOpenMobile} {...props}>
                    <DrawerContent
                        // data-sidebar="sidebar"
                        // data-mobile="true"
                        className={clsx("bg-gray-50 p-0 text-gray-900", className)}
                    >
                        <VisuallyHidden.Root>
                            <DrawerTitle>Sidebar</DrawerTitle>
                        </VisuallyHidden.Root>
                        <DrawerDescription className={"hidden"}></DrawerDescription>
                        <div className="relative flex h-full w-full flex-col">
                            <DrawerClose className="absolute right-4 top-4" asChild>
                                <Button
                                    variant="ghost"
                                    className="!p-2 text-gray-700 hover:text-gray-900 dark:text-gray-300 hover:dark:text-gray-50"
                                >
                                    <RiCloseLine className="size-5 shrink-0" aria-hidden="true" />
                                </Button>
                            </DrawerClose>
                            {children}
                        </div>
                    </DrawerContent>
                </Drawer>
            )
        }
        // dark:bg-[#090E1A]
        return (
            <div
                ref={ref}
                className="group peer hidden md:block"
                data-state={state}
                data-collapsible={state === "collapsed"}
            >
                {/* This is what handles the sidebar gap on desktop */}
                <div
                    className={cx(
                        "relative h-svh w-[--sidebar-width] bg-transparent transition-[width] duration-150 ease-in-out will-change-transform",
                        "group-data-[collapsible=true]:w-0",
                    )}
                />
                <div
                    className={cx(
                        "fixed inset-y-0 z-10 hidden h-svh w-[--sidebar-width] transition-[left,right,width] duration-150 ease-in-out will-change-transform md:flex",
                        "left-0 group-data-[collapsible=true]:left-[calc(var(--sidebar-width)*-1)]",
                        "border-r border-gray-200 dark:border-gray-lemon-dark-sidebar-border",
                        className,
                    )}
                    {...props}
                >
                    <div
                        data-sidebar="sidebar"
                        className="flex h-full w-full flex-col"
                    >
                        {children}
                    </div>
                </div>
            </div>
        )
    },
)
Sidebar.displayName = "Sidebar"

const SidebarTrigger = React.forwardRef<
    React.ComponentRef<"button">,
    React.ComponentPropsWithRef<"button">
>(({ children, onClick, ...props }, ref) => {
    const { toggleSidebar } = useSidebar()

    return (
        <button
            ref={ref}
            data-sidebar="trigger"
            className={cx(
                "group inline-flex rounded-md p-1.5 hover:bg-gray-200/50 hover:dark:bg-gray-900",
                focusRing,
            )}
            onClick={(event) => {
                onClick?.(event)
                toggleSidebar()
            }}
            {...props}
        >
            {children}
        </button>
    )
})
SidebarTrigger.displayName = "SidebarTrigger"

const SidebarFooter = React.forwardRef<
    HTMLDivElement,
    React.ComponentProps<"div">
>(({ className, ...props }, ref) => {
    return (
        <div
            ref={ref}
            data-sidebar="footer"
            className={cx("flex flex-col gap-2 p-3", className)}
            {...props}
        />
    )
})
SidebarFooter.displayName = "SidebarFooter"

const SidebarContent = React.forwardRef<
    HTMLDivElement,
    React.ComponentProps<"div">
>(({ className, ...props }, ref) => {
    return (
        <div
            ref={ref}
            data-sidebar="content"
            className={cx(
                "flex min-h-0 flex-1 flex-col gap-2 overflow-auto",
                className,
            )}
            {...props}
        />
    )
})
SidebarContent.displayName = "SidebarContent"

const SidebarHeader = React.forwardRef<
    HTMLDivElement,
    React.ComponentProps<"div">
>(({ className, ...props }, ref) => {
    return (
        <div
            ref={ref}
            data-sidebar="header"
            className={cx("flex flex-col gap-2 p-2", className)}
            {...props}
        />
    )
})
SidebarHeader.displayName = "SidebarHeader"

const SidebarLink = React.forwardRef<
    HTMLAnchorElement,
    React.ComponentProps<"a"> & {
    children: React.ReactNode
    icon?: React.ElementType
    isActive?: boolean
    notifications?: number | boolean
}
>(({
       children,
       isActive,
       icon,
       notifications,
       ...props
   }, ref) => {
    const Icon = icon

    return (
        <a
            ref={ref}
            aria-current={isActive ? "page" : undefined}
            data-active={isActive}
            className={cx(
                "flex items-center justify-between rounded-md p-2 text-base transition hover:bg-gray-200/50 sm:text-sm hover:dark:bg-gray-900",
                "text-gray-900 dark:text-gray-400 hover:dark:text-gray-50",
                "data-[active=true]:text-blue-600 data-[active=true]:dark:text-blue-500",
                focusRing,
            )}
            onClick={(event) => {
                event.preventDefault();
                props.onClick?.(event);
            }}
            {...props}
        >
      <span className="flex items-center gap-x-2.5">
        {Icon && <Icon className="size-[18px] shrink-0" aria-hidden="true" />}
          {children}
      </span>
            {notifications && (
                <span className="inline-flex size-5 items-center justify-center rounded bg-blue-100 text-sm font-medium text-blue-600 sm:text-xs dark:bg-blue-500/10 dark:text-blue-500">
          {notifications}
        </span>
            )}
        </a>
    )
})
SidebarLink.displayName = "SidebarLink"

const SidebarGroup = React.forwardRef<
    HTMLDivElement,
    React.ComponentProps<"div">
>(({ className, ...props }, ref) => {
    return (
        <div
            ref={ref}
            data-sidebar="group"
            className={cx("relative flex w-full min-w-0 flex-col p-3", className)}
            {...props}
        />
    )
})
SidebarGroup.displayName = "SidebarGroup"

const SidebarGroupContent = React.forwardRef<
    HTMLDivElement,
    React.ComponentProps<"div">
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        data-sidebar="group-content"
        className={cx("w-full text-sm", className)}
        {...props}
    />
))
SidebarGroupContent.displayName = "SidebarGroupContent"

const SidebarMenu = React.forwardRef<
    HTMLUListElement,
    React.ComponentProps<"ul">
>(({ className, ...props }, ref) => (
    <ul
        ref={ref}
        data-sidebar="menu"
        className={cx("flex w-full min-w-0 flex-col gap-1", className)}
        {...props}
    />
))
SidebarMenu.displayName = "SidebarMenu"

const SidebarMenuItem = React.forwardRef<
    HTMLLIElement,
    React.ComponentProps<"li">
>(({ ...props }, ref) => <li ref={ref} {...props} />)
SidebarMenuItem.displayName = "SidebarMenuItem"

const SidebarSubLink = React.forwardRef<
    HTMLAnchorElement,
    React.ComponentProps<"a"> & {
    children: React.ReactNode
    isActive?: boolean
}
>(({ isActive, children, ...props }, ref) => {
    return (
        <a
            ref={ref}
            aria-current={isActive ? "page" : undefined}
            data-active={isActive}
            className={cx(
                "relative flex gap-2 rounded-md py-1.5 pl-9 pr-3 text-base transition sm:text-sm",
                "text-gray-700 hover:text-gray-900 hover:bg-gray-200/50 hover:dark:bg-gray-900 dark:text-gray-lemon-dark-sidebar-subLink-text dark:hover:text-gray-50",
                "data-[active=true]:rounded data-[active=true]:bg-white data-[active=true]:text-blue-600 data-[active=true]:shadow data-[active=true]:ring-1 data-[active=true]:ring-gray-200 data-[active=true]:dark:bg-gray-lemon-dark-sidebar-subLink-active-background data-[active=true]:dark:text-gray-lemon-dark-sidebar-subLink-text data-[active=true]:dark:ring-gray-lemon-dark-sidebar-subLink-active-border",
                focusRing,
            )}
            {...props}
        >
            {isActive && (
                <div
                    className="absolute left-4 top-1/2 h-5 w-px -translate-y-1/2 bg-blue-500 dark:bg-gray-lemon-dark-sidebar-subLink-active-indicator"
                    aria-hidden="true"
                />
            )}
            {children}
        </a>
    )
})
SidebarSubLink.displayName = "SidebarSubLink"

const SidebarMenuSub = React.forwardRef<
    HTMLUListElement,
    React.ComponentProps<"ul">
>(({ className, ...props }, ref) => (
    <ul
        ref={ref}
        data-sidebar="menu-sub"
        className={cx("relative space-y-1 border-l border-transparent", className)}
        {...props}
    />
))
SidebarMenuSub.displayName = "SidebarMenuSub"

export {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarHeader,
    SidebarLink,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarSubLink,
    SidebarTrigger
}
