import { useIsMobile } from "@hooks/useMobile"
import { cx } from "@utils/utils"
import {
    ComponentProps,
    createContext,
    CSSProperties,
    forwardRef,
    useCallback,
    useContext,
    useMemo,
    useState
} from "react";

const SIDEBAR_COOKIE_NAME = "sidebar:state"
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7
const SIDEBAR_WIDTH = "16rem"

type SidebarContext = {
    state: "expanded" | "collapsed"
    open: boolean
    setOpen: (open: boolean) => void
    openMobile: boolean
    setOpenMobile: (open: boolean) => void
    isMobile: boolean
    toggleSidebar: () => void
}

const SidebarContext = createContext<SidebarContext | null>(null)

function useSidebar() {
    const context = useContext(SidebarContext)
    if (!context) {
        throw new Error("useSidebar must be used within a SidebarProvider.")
    }

    return context
}

const SidebarProvider = forwardRef<
    HTMLDivElement,
    ComponentProps<"div"> & {
    defaultOpen?: boolean
    open?: boolean
    onOpenChange?: (open: boolean) => void
}
>(
    (
        {
            defaultOpen = true,
            open: openProp,
            onOpenChange: setOpenProp,
            className,
            style,
            children,
            ...props
        },
        ref,
    ) => {
        const isMobile = useIsMobile()
        const [openMobile, setOpenMobile] = useState(false)

        const [_open, _setOpen] = useState(defaultOpen)
        const open = openProp ?? _open
        const setOpen = useCallback(
            (value: boolean | ((value: boolean) => boolean)) => {
                const openState = typeof value === "function" ? value(open) : value
                if (setOpenProp) {
                    setOpenProp(openState)
                } else {
                    _setOpen(openState)
                }

                document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`
            },
            [setOpenProp, open],
        )

        const toggleSidebar = useCallback(() => {
            return isMobile
                ? setOpenMobile((open) => !open)
                : setOpen((open) => !open)
        }, [isMobile, setOpen, setOpenMobile])

        const state = open ? "expanded" : "collapsed"

        const contextValue = useMemo<SidebarContext>(
            () => ({
                state,
                open,
                setOpen,
                isMobile,
                openMobile,
                setOpenMobile,
                toggleSidebar,
            }),
            [
                state,
                open,
                setOpen,
                isMobile,
                openMobile,
                setOpenMobile,
                toggleSidebar,
            ],
        )

        return (
            <SidebarContext.Provider value={contextValue}>
                <div
                    style={
                        {
                            "--sidebar-width": SIDEBAR_WIDTH,
                            ...style,
                        } as CSSProperties
                    }
                    className={cx("flex min-h-svh max-h-screen w-full", className)}
                    ref={ref}
                    {...props}
                >
                    {children}
                </div>
            </SidebarContext.Provider>
        )
    },
)

export {
    SidebarProvider,
    useSidebar
};