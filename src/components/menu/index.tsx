import Link from "next/link";
import { usePathname } from "next/navigation";

import { routes } from "./constants";


export function Menu() {
  const pathname = usePathname()

  return (
    <div className="fixed bottom-0 left-0 w-full px-8 py-5 bg-custom-white rounded-t-lg flex items-center justify-between border border-custom-lightGray shadow-base">
      {routes.map(({ name, path, Icon }, index) => (
        <Link
          key={name + index}
          href={path}
          className={`flex flex-col text-xs leading-none font-semibold ${pathname === path ? "text-primary" : "text-tertiary"} items-center gap-[0.375rem]`}
        >
          {Icon}
          <p>{name}</p>
        </Link>
      ))}
    </div>
  )
}
