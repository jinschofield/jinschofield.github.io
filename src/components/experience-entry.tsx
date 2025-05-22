import Image from "next/image";
import { Experience, MediaItem } from "@/data/experience";

function MediaDisplay({ media }: { media: MediaItem }) {
  if (media.type === 'iframe') {
    return (
      <div className="mt-2 rounded-lg overflow-hidden border border-gray-200">
        <iframe
          src={media.src}
          title={media.title || 'Embedded content'}
          className="w-full aspect-video"
          allow="autoplay"
        />
      </div>
    );
  }
  
  if (media.type === 'image') {
    return (
      <div className="w-full h-auto">
        <Image
          src={media.src}
          alt={media.alt || 'Image content'}
          width={800}
          height={200}
          className="w-full h-auto object-cover rounded-lg border border-gray-200"
          style={{ aspectRatio: '16/4' }}
        />
      </div>
    );
  }
  
  return null;
}

export function ExperienceEntry({ experience }: { experience: Experience }) {
  const dateColumnMedia = experience.media?.filter(m => 
    m.type === 'image' && 
    (m.src.includes('conway.gif') || m.src.includes('cal_proj.png'))) || [];
  
  const otherMedia = experience.media?.filter(m => 
    !(m.type === 'image' && (m.src.includes('conway.gif') || m.src.includes('cal_proj.png')))) || [];
  
  return (
    <div className="grid grid-cols-4 gap-x-1.5 mb-4 group">
      <div className="flex flex-col">
        <span className="text-xs text-zinc-500">{experience.date}</span>
        {dateColumnMedia.map((media, index) => (
          <div key={index} className="mt-1 w-full">
            <Image
              src={media.src}
              alt={media.alt || 'Project image'}
              width={media.src.includes('conway.gif') ? 100 : 160}
              height={media.src.includes('conway.gif') ? 100 : 40}
              className={`w-full h-auto object-cover rounded-sm border border-gray-200 ${media.src.includes('conway.gif') ? 'mt-2' : ''}`}
              style={{
                aspectRatio: media.src.includes('conway.gif') ? '1/1' : '16/9',
                maxHeight: media.src.includes('conway.gif') ? '102px' : 'none'
              }}
            />
          </div>
        ))}
      </div>
      <div className="col-span-3 flex flex-col">
        <div className="flex items-start gap-2">
          {experience.logo && (
            <div className="w-6 h-6 mt-0.5 flex-shrink-0">
              <Image
                src={experience.logo}
                alt={`${experience.company} logo`}
                width={24}
                height={24}
                className="rounded-sm object-contain"
              />
            </div>
          )}
          <div>
            <h3 className="text-sm font-medium font-serif">
              {experience.title} —{" "}
              {experience.companyUrl ? (
                <a
                  href={experience.companyUrl}
                  className="hover:text-zinc-600 transition-colors group-hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {experience.company}
                </a>
              ) : (
                experience.company
              )}
            </h3>
          </div>
        </div>
        {experience.advisor && (
          <p className="text-xs text-zinc-600 italic mt-0.5">
            Advisor: {experience.advisor}
          </p>
        )}
        {experience.manager && (
          <p className="text-xs text-zinc-600 italic mt-0.5">
            Manager: {experience.manager}
          </p>
        )}
        {experience.supervisor && (
          <p className="text-xs text-zinc-600 italic mt-0.5">
            Supervisor: {experience.supervisor}
          </p>
        )}
        <div className="text-xs text-zinc-600 mt-1 space-y-2">
          {experience.description && <p>{experience.description}</p>}
          {experience.links && (
            <div className="flex flex-wrap gap-3">
              {experience.links.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 hover:underline inline-flex items-center gap-1"
                >
                  {link.text}
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                    <polyline points="15 3 21 3 21 9"/>
                    <line x1="10" y1="14" x2="21" y2="3"/>
                  </svg>
                </a>
              ))}
            </div>
          )}
        </div>
        {otherMedia.length > 0 && (
          <div className="mt-2">
            {otherMedia.map((media, index) => (
              <div key={index} className="w-full h-full">
                <MediaDisplay media={media} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
