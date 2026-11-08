import Image from "next/image";
import { site } from "@/content/site";

export function Stack() {
  return (
    <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
      {site.stack.map((tool) => (
        <li key={tool.name}>
          <a
            href={tool.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-xl border border-line px-4 py-3.5 text-sm text-foreground transition-[background-color,border-color,transform] duration-150 ease-out hover:border-foreground/20 hover:bg-surface active:scale-[0.97] motion-reduce:active:scale-100"
          >
            <Image
              src={tool.icon}
              alt=""
              width={20}
              height={20}
              className="size-5 shrink-0 rounded-[5px]"
            />
            {tool.name}
          </a>
        </li>
      ))}
    </ul>
  );
}
