import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Award } from "@/data/awards";

export function AwardEntry({ award }: { award: Award }) {
  return (
    <div className="flex flex-row gap-4 mb-4">
      {award.logo && (
        <div className="w-12 h-12 mt-0.5 flex-shrink-0 flex items-center justify-center">
          <Image
            src={award.logo}
            alt={`${award.title} logo`}
            width={48}
            height={48}
            className="rounded-sm object-contain max-w-full max-h-full"
          />
        </div>
      )}
      <div className="flex flex-col flex-1">
        <p className="text-xs text-zinc-500 mb-1">{award.date}</p>
        <h3 className="font-serif text-sm font-medium mb-1">
          {award.link ? (
            <a
              href={award.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1 hover:text-zinc-600 transition-colors duration-200"
            >
              {award.title}
              <ArrowUpRight
                size={14}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
              />
            </a>
          ) : (
            award.title
          )}
        </h3>
        <p 
          className="text-xs text-zinc-600"
          dangerouslySetInnerHTML={{ __html: award.description }}
        />
      </div>
    </div>
  );
}
