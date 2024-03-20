import Link from "next/link";
import { MaxWidthScreen } from "./MaxWidthScreen";
import { Icons } from "./Icons";
import { NavItems } from "./NavItems";

export function Navbar(){
    return (
        <div className="bg-white sticky z-50 top-0 inset-x-0 h-16">
            <header className="relative bg-white">
                <MaxWidthScreen>
                    <div className="border-b border-gray-200">
                        <div className="flex h-16 items-center">


                            <div className="ml-4 flex lg:ml-0">
                                <Link href='/'>
                                    <Icons.logo className="h-10 w-10" />
                                </Link>
                            </div>
                            <div className="hidden z-50 lg:ml-8 lg:block lg:self-stretch">
                                <NavItems />
                            </div>

                        </div>
                    </div>
                </MaxWidthScreen>

            </header>

        </div>
    )
}