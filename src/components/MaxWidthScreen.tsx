import { cn } from "@/lib/utils"

type MaxWidthScreenProps = {
    className?: string,
    children: React.ReactNode
}

export function MaxWidthScreen({className, children} : MaxWidthScreenProps) {
    return (
        <div className={cn("mx-auto w-full max-w-screen-xl px-2.5 md:px-20", className)}>
            {children}
        </div>
    )
}
