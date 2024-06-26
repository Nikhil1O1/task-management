import Link from "next/link"
import Image from "next/image"

import { cn } from "@/lib/utils"
import localFont from "next/font/local"

const headingFont = localFont({src:'../public/fonts/CalSans-SemiBold.woff2'})

export const Logo = () => {
    return(
        <Link href="/">
            <div className="hover:opacity-75 transition items-center gap-x-2 hidden md:flex text-white">
                <Image src="/logo.svg" width={80} height={60} alt="logo" />
                <p className={cn("text-lg text-neutral-700 pb-1",
                    headingFont.className,
                )}>
                    TaskMaster
                </p>
            </div>
        </Link>
    )
}