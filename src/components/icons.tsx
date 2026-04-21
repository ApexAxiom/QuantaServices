import type { IconName } from "@/lib/site-data";

type IconProps = {
  name: IconName;
  className?: string;
};

export function Icon({ name, className }: IconProps) {
  return (
    <span className={className} aria-hidden="true">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        width="24"
        height="24"
      >
        {name === "signal" && (
          <>
            <path d="M4 18h16" />
            <path d="M7 18V9" />
            <path d="M12 18V5" />
            <path d="M17 18v-7" />
            <path d="m5 9 4-3 3 2 6-4" />
          </>
        )}
        {name === "workflow" && (
          <>
            <rect x="3.5" y="4.5" width="7" height="5" rx="1.5" />
            <rect x="13.5" y="14.5" width="7" height="5" rx="1.5" />
            <rect x="3.5" y="14.5" width="7" height="5" rx="1.5" />
            <path d="M10.5 7h3A2.5 2.5 0 0 1 16 9.5v5" />
            <path d="M10.5 17H13" />
          </>
        )}
        {name === "copilot" && (
          <>
            <path d="M12 4 6 7v5c0 4 2.6 6.8 6 8 3.4-1.2 6-4 6-8V7l-6-3Z" />
            <path d="M12 10v5" />
            <path d="M9.5 12.5 12 10l2.5 2.5" />
          </>
        )}
        {name === "database" && (
          <>
            <ellipse cx="12" cy="6" rx="6.5" ry="2.8" />
            <path d="M5.5 6v6c0 1.5 2.9 2.8 6.5 2.8s6.5-1.3 6.5-2.8V6" />
            <path d="M5.5 12v6c0 1.5 2.9 2.8 6.5 2.8s6.5-1.3 6.5-2.8v-6" />
          </>
        )}
        {name === "shield" && (
          <>
            <path d="M12 4 6 6.5v5.5c0 3.7 2.3 6.5 6 8 3.7-1.5 6-4.3 6-8V6.5L12 4Z" />
            <path d="m9.4 12.2 1.8 1.8 3.4-3.8" />
          </>
        )}
        {name === "chart" && (
          <>
            <path d="M4 18h16" />
            <path d="M7 16V9" />
            <path d="M12 16V6" />
            <path d="M17 16v-4" />
            <path d="m6 11 5-4 3 2 4-3" />
          </>
        )}
        {name === "map" && (
          <>
            <path d="m4 7 5-2 6 2 5-2v12l-5 2-6-2-5 2V7Z" />
            <path d="M9 5v12" />
            <path d="M15 7v12" />
          </>
        )}
        {name === "clock" && (
          <>
            <circle cx="12" cy="12" r="8" />
            <path d="M12 8v4l3 2" />
          </>
        )}
        {name === "layers" && (
          <>
            <path d="m12 4 8 4-8 4-8-4 8-4Z" />
            <path d="m4 12 8 4 8-4" />
            <path d="m4 16 8 4 8-4" />
          </>
        )}
        {name === "spark" && (
          <>
            <path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z" />
            <path d="M19.5 4.5 20 6l1.5.5-1.5.5-.5 1.5-.5-1.5L17.5 6l1.5-.5.5-1.5Z" />
            <path d="m4 15 .6 1.8L6.5 17l-1.9.6L4 19.5l-.6-1.9L1.5 17l1.9-.2L4 15Z" />
          </>
        )}
      </svg>
    </span>
  );
}
