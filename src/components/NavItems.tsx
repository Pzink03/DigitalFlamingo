"use client"

import { PRODUCT_CATEGORIES } from "@/config"

import { useRef, useState } from "react"
import { NavItem } from "./NavItem"
import { useOnClickOutside } from "@/hooks/useOnClickOutside"

export function NavItems(){
    const [isActive, setIsActive] = useState<null | number>(null)

    const isAnyOpen = isActive !== null

    const navRef = useRef<HTMLDivElement | null>(null)

    useOnClickOutside(navRef, () => setIsActive(null))

    return (
        <div className="flex gap-4 h-full" ref={navRef}>
            {PRODUCT_CATEGORIES.map((category, i) => {
                const handleOpen = () => {
                    if(isActive === i) {
                        setIsActive(null)
                    } else {
                        setIsActive(i)
                    }
                }

                const isOpen = i === isActive
                return (
                    <NavItem category={category} handleOpen={handleOpen} isOpen={isOpen} key={category.value} isAnyOpen={isAnyOpen}/>
                )
            })}
        </div>
    )


}
