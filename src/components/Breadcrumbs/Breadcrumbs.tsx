import { ChevronRight } from "lucide-react"
import React from "react";

interface BreadcrumbsProps {
  pathname: string
}

export function Breadcrumbs({ pathname } : BreadcrumbsProps) {

  const pathnames = pathname.split("/").filter((x) => x);

  return (
    <>
      <nav aria-label="Breadcrumb" className="ml-2">
        <ol role="list" className="flex items-center space-x-3 text-sm">
          <li className="flex">
            <a
              href="#"
              className="text-gray-500 transition hover:text-gray-700 dark:text-gray-400 hover:dark:text-gray-300"
            >
              Home
            </a>
          </li>

          {pathnames.length > 0 && <ChevronRight
              className="size-4 shrink-0 text-gray-600 dark:text-gray-400"
              aria-hidden="true"
          />}
          {
            pathnames.map((value, index) => {
              // const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
              const isLast = index === pathnames.length - 1;

              return <React.Fragment key={"breadcrumbs-" + index}>
                <li className="flex" >
                  <div className="flex items-center">
                    <a
                        href="#"
                        // aria-current={page.current ? 'page' : undefined}
                        className="text-gray-900 dark:text-gray-50 capitalize"
                    >
                      {decodeURIComponent(value)}
                    </a>
                  </div>
                </li>

                {!isLast && <ChevronRight
                    className="size-4 shrink-0 text-gray-600 dark:text-gray-400"
                    aria-hidden="true"
                />}
              </React.Fragment>;
            })
          }
        </ol>
      </nav>
    </>
  )
}
