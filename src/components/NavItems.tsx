"use client"

import { PRODUCT_CATEGORIES } from "@/config"

import { useEffect, useRef, useState } from "react"
import { NavItem } from "./NavItem"
import { useOnClickOutside } from "@/hooks/useOnClickOutside"

export function NavItems(){
    const [isActive, setIsActive] = useState<null | number>(null)

    useEffect(() => {
        const handler = (e:KeyboardEvent) => {
            if(e.key === 'Escape') {
                setIsActive(null)
            }
        }

        document.addEventListener('keydown', handler)

        return () => {
            document.removeEventListener('keydown', handler)
        }
    }, [])

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
