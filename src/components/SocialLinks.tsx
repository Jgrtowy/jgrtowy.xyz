import { BarChart2, Bot, Github, Mail, Twitter } from "lucide-react";
import React from "react";
import { cn } from "./utils/cn";

interface SocialLink {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }> | React.ReactElement;
  description: string;
  iconType: 'lucide' | 'svg';
}

const socialLinks: SocialLink[] = [
  {
    name: "github",
    href: "https://github.com/jgrtowy",
    icon: Github,
    description: "check out my projects",
    iconType: "lucide"
  },
  
  {
    name: "twitter",
    href: "https://x.com/jgrtowy",
    icon: Twitter,
    description: "follow me on twitter",
    iconType: "lucide"
  },
  {
    name: "anilist",
    href: "https://anilist.co/user/yoghurt",
    icon: (
      <svg 
        fill="#ffffff" 
        viewBox="0 0 24 24" 
        role="img" 
        xmlns="http://www.w3.org/2000/svg"
        className="w-4 h-4 transition-transform duration-300 group-hover:scale-110"
      >
        <path d="M6.361 2.943 0 21.056h4.942l1.077-3.133H11.4l1.052 3.133H22.9c.71 0 1.1-.392 1.1-1.101V17.53c0-.71-.39-1.101-1.1-1.101h-6.483V4.045c0-.71-.392-1.102-1.101-1.102h-2.422c-.71 0-1.101.392-1.101 1.102v1.064l-.758-2.166zm2.324 5.948 1.688 5.018H7.144z"/>
      </svg>
    ),
    description: "check my anime/manga list",
    iconType: "svg"
  },
  {
    name: "stats.fm",
    href: "https://stats.fm/user/jgrtowy",
    icon: BarChart2,
    description: "my weird music taste",
    iconType: "lucide"
  },
  {
    name: "aniwheel",
    href: "https://aniwheel.moe/",
    icon: (
        <svg width="16" height="16" viewBox="0 0 121 121" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M50.63 22.2731C50.53 25.5731 48.11 32.3031 47.25 34.2731" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M51.33 24.5631C63.12 22.8331 80.12 20.7731 92.53 20.0231C98.76 19.6431 96.75 24.0231 91.6 28.0031" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M56.18 34.8431C57.75 35.1431 60.13 34.9831 61.89 34.7831C68.42 34.0231 75.66 33.0031 82.63 32.3831C84.4 32.2231 86.23 32.1931 87.98 32.6031" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M53.83 44.3531C54.75 45.2731 55.03 46.3631 55.12 46.9331C55.73 50.5031 56.95 57.7031 57.99 64.9931C58.16 66.1531 58.31 67.2931 58.45 68.3731" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M56.26 45.5831C65.11 44.4831 82.35 41.9331 87.21 41.4831C89.51 41.2731 91.01 42.2731 90.84 44.9131C90.59 48.7431 88.92 56.0031 87.61 62.7431C87.39 63.8631 87.16 64.9531 86.9 66.0031" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M58 55.7631C65.38 54.7731 79.5 52.5231 88.52 52.0331" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M59.25 66.0831C66.27 65.2231 78 63.8931 86.14 63.3931" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M48.04 76.9031C51 77.6531 53.39 77.5731 56 77.3331C66.72 76.3431 80.7 75.0531 90.88 74.4831C93.58 74.3331 96.07 74.3931 98.72 74.9431" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M70.36 24.5631C71.35 25.5531 72 26.7731 72 28.1831C72 29.0631 71.98 70.1931 71.89 86.5231C71.87 89.4331 71.86 91.5531 71.84 92.5231" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M26.5 26.5231C29.85 28.1331 35.16 33.1531 36 35.6531" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21 57.0231C23.25 58.0231 24.75 57.5231 25.75 57.2731C26.75 57.0231 35 54.0231 36.5 53.5231C39.75 52.4431 40.09 54.5831 37.94 57.6231C30.75 67.7731 31 67.5231 38.47 73.7931C41.35 76.2131 41.27 77.6331 39 79.5231C37.5 80.7731 29.75 87.5231 28.25 88.0231" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M24 89.5231C27 89.0231 33 87.7731 37.5 88.7731C42 89.7731 66.82 96.4831 71.25 97.7731C83.25 101.273 92.5 102.273 101.5 100.523" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
    ),
    description: "my child",
    iconType: "svg"
  },
  {
    name: "tomochan",
    href: "https://github.com/jgrtowy/tomochan",
    icon: Bot,
    description: "my other child",
    iconType: "lucide"
  },
  {
    name: "email",
    href: "mailto:contact@jgrtowy.xyz",
    icon: Mail,
    description: "contact@jgrtowy.xyz",
    iconType: "lucide"
  }
];

export default function SocialLinks() {
  return (
    <div className="flex flex-wrap gap-3 justify-center items-center max-w-lg mx-auto">
      {socialLinks.map((link) => {
        return (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "group relative flex items-center gap-2 px-4 py-2.5",
              "border border-white/20 bg-white/5 backdrop-blur-sm",
              "hover:border-white/40 hover:bg-white/10",
              "transition-all duration-300 ease-out",
              "text-white/80 hover:text-white",
              "text-sm font-medium",
              "rounded-lg",
              "transform hover:scale-105 hover:-translate-y-0.5"
            )}
          >
            {link.iconType === 'lucide' ? (
              React.createElement(link.icon as React.ComponentType<{ className?: string }>, {
                className: "w-4 h-4 transition-transform duration-300 group-hover:scale-110"
              })
            ) : (
              link.icon as React.ReactElement
            )}
            <span className="transition-opacity duration-300">{link.name}</span>
            
            <div className={cn(
              "absolute -top-10 left-1/2 transform -translate-x-1/2",
              "px-2 py-1 bg-black/80 text-white text-xs rounded",
              "opacity-0 group-hover:opacity-100 transition-opacity duration-300",
              "pointer-events-none whitespace-nowrap"
            )}>
              {link.description}
            </div>
            
            <div className={cn(
              "absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100",
              "bg-gradient-to-r from-white/5 to-white/10",
              "transition-opacity duration-300 -z-10"
            )} />
          </a>
        );
      })}
    </div>
  );
}