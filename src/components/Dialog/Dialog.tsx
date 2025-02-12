// Tremor Dialog [v0.0.1]

import React from "react"
import { AlertDialog } from "radix-ui";

import {cx, focusRing} from "@utils/utils"

const Dialog = (
    props: React.ComponentPropsWithoutRef<typeof AlertDialog.Root>,
) => {
    return <AlertDialog.Root {...props} />
}
Dialog.displayName = "Dialog"

const DialogTrigger = AlertDialog.Trigger

// DialogTrigger.displayName = "DialogTrigger"

const DialogClose = AlertDialog.Cancel

// DialogClose.displayName = "DialogClose"

const DialogPortal = AlertDialog.Portal

// DialogPortal.displayName = "DialogPortal"

const DialogOverlay = React.forwardRef<
    React.ElementRef<typeof AlertDialog.Overlay>,
    React.ComponentPropsWithoutRef<typeof AlertDialog.Overlay>
>(({className, ...props}, forwardedRef) => {
    return (
        <AlertDialog.Overlay
            ref={forwardedRef}
            className={cx(
                // base
                "fixed inset-0 z-50 overflow-y-auto",
                // background color
                "bg-black/70",
                // transition
                "data-[state=open]:animate-dialogOverlayShow",
                className,
            )}
            {...props}
        />
    )
})

// DialogOverlay.displayName = "DialogOverlay"

const DialogContent = React.forwardRef<
    React.ElementRef<typeof AlertDialog.Content>,
    React.ComponentPropsWithoutRef<typeof AlertDialog.Content>
>(({className, ...props}, forwardedRef) => {
    return (
        <DialogPortal>
            <DialogOverlay>
                <AlertDialog.Content
                    ref={forwardedRef}
                    className={cx(
                        // base
                        "fixed left-1/2 top-1/2 z-50 w-[95vw] max-w-lg -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-md border p-0 shadow-lg",
                        // border color
                        "border-gray-200 dark:border-gray-900",
                        // background color
                        "bg-white dark:bg-gray-lemon-dark-secondary",
                        // transition
                        "data-[state=open]:animate-dialogContentShow",
                        focusRing,
                        className,
                    )}
                    tremor-id="tremor-raw"
                    {...props}
                />
            </DialogOverlay>
        </DialogPortal>
    )
})

// DialogContent.displayName = "DialogContent"

const DialogHeader = ({
                          className,
                          ...props
                      }: React.HTMLAttributes<HTMLDivElement>) => {
    return <>
        <DialogClose asChild>
            <button
                className="ml-auto absolute right-2 top-2 items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                type="button">
                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24"
                     className="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
            </button>
        </DialogClose>
        <div className={cx("flex flex-col h-full gap-y-1 p-0", className)} {...props} />
    </>
}

// DialogHeader.displayName = "DialogHeader"

const DialogTitle = React.forwardRef<
    React.ElementRef<typeof AlertDialog.Title>,
    React.ComponentPropsWithoutRef<typeof AlertDialog.Title>
>(({className, ...props}, forwardedRef) => (
    <>
        <AlertDialog.Title
            ref={forwardedRef}
            className={cx(
                // base
                "text-sm font-semibold p-4 bg-gray-200 dark:bg-gray-lemon-dark-secondary",
                // text color
                "text-gray-900 dark:text-gray-50",
                // border
                "border-b border-b-gray-200 dark:border-b-gray-lemon-dark-border",
                className,
            )}
            {...props}
        />

    </>
))

// DialogTitle.displayName = "DialogTitle"

const DialogDescription = React.forwardRef<
    React.ElementRef<typeof AlertDialog.Description>,
    React.ComponentPropsWithoutRef<typeof AlertDialog.Description>
>(({className, ...props}, forwardedRef) => {
    return (
        <AlertDialog.Description
            ref={forwardedRef}
            className={cx("text-gray-500 dark:text-gray-500", className)}
            {...props}
        />
    )
})

// DialogDescription.displayName = "DialogDescription"

const DialogFooter = ({
                          className,
                          ...props
                      }: React.HTMLAttributes<HTMLDivElement>) => {
    return (
        <div
            className={cx(
                "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 p-6",
                className,
            )}
            {...props}
        />
    )
}

// DialogFooter.displayName = "DialogFooter"

export {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
}