import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithubFilled,
  IconBrandLinkedinFilled,
  IconBrandGmail,
  IconBrandFacebookFilled,
  IconFileCvFilled,
} from "@tabler/icons-react";


export function FloatingDockDemo() {
  const links = [
    {
      title: "GitHub",
      icon: (
        <IconBrandGithubFilled className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/MMamunurRashid",
    },
    {
        title: "Email",
        icon: (
          <IconBrandGmail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "mailto:mdmamun.iubat.m@gmail.com",
      },
      {
        title: "LinkedIn",
        icon: (
          <IconBrandLinkedinFilled className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "https://www.linkedin.com/in/md-mamunur-rashid-web/",
      },
  
    {
      title: "Facebook",
      icon: (
        <IconBrandFacebookFilled className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.facebook.com/mamunul.mamun.LM10",
    },
    {
      title: "Resume",
      icon: (
        <IconFileCvFilled className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://drive.google.com/file/d/1MoJ-XuMi84n08jBOpDk32Mxb0EIl1Y9O/view?usp=sharing",
    },
  ];
  return (
    <div className="flex items-center justify-center md:pt-10 w-full">
      <FloatingDock
        mobileClassName="translate-y-20" // only for demo, remove for production
        items={links}
      />
    </div>
  );
}
