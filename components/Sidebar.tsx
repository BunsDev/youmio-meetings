'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { sidebarLinks } from '@/constants';
import { cn } from '@/lib/utils';

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <section className="sticky shadow-2xl overflow-scroll left-0 top-0 flex h-screen w-fit flex-col  justify-between  bg-[#0f0f0f] p-4 pt-28 text-white max-sm:hidden lg:w-[220px]">
      <div className="flex flex-1 flex-col gap-2">
        {sidebarLinks.map((item) => {
          const isActive =
            pathname === item.route || pathname.startsWith(`${item.route}/`);
          return (
            <Link
              href={item.route}
              key={item.label}
              className={cn(
                'flex gap-3 items-center text-white p-3 rounded-lg justify-start',
                {
                  'bg-black border-b-2': isActive,
                },
              )}
            >
              <Image
                src={item.imgURL}
                alt={item.label}
                width={26}
                height={26}
              />
              <p className="text-md max-lg:hidden">{item.label}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Sidebar;
