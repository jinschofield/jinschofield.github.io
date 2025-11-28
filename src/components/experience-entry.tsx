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
    (m.type === 'image' && (m.src.includes('conway.gif') || m.src.includes('cal_proj.png'))) ||
    (m.type === 'video' && m.src.includes('igloo'))) || [];

  const otherMedia = experience.media?.filter(m =>
    !((m.type === 'image' && (m.src.includes('conway.gif') || m.src.includes('cal_proj.png'))) ||
      (m.type === 'video' && m.src.includes('igloo')))) || [];
  
  return (
    <div className="grid grid-cols-4 gap-x-1.5 mb-4 group">
      <div className="flex flex-col">
        <span className="text-xs text-zinc-500">{experience.date}</span>
        {dateColumnMedia.map((media, index) => (
          <div key={index} className="mt-1 w-full">
            {media.type === 'video' ? (
              <video
                src={media.src}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto object-cover rounded-sm border border-gray-200 mt-2"
                style={{ aspectRatio: '1/1', maxHeight: '102px' }}
              />
            ) : (
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
            )}
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
            <div className="flex flex-wrap gap-3 mt-2">
              {experience.links.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 hover:bg-blue-100 text-blue-700 hover:text-blue-900 rounded-md border border-blue-200 transition-all duration-150 font-medium"
                >
                  {link.thumbnailSrc && (
                    <Image
                      src={link.thumbnailSrc}
                      alt={link.thumbnailAlt || `${link.text} preview`}
                      width={link.thumbnailWidth ?? 48}
                      height={link.thumbnailHeight ?? 30}
                      className="rounded border border-blue-200 bg-white object-contain min-w-[40px]"
                      loading="lazy"
                    />
                  )}
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                    <line x1="16" y1="13" x2="8" y2="13"/>
                    <line x1="16" y1="17" x2="8" y2="17"/>
                    <polyline points="10 9 9 9 8 9"/>
                  </svg>
                  <span className="leading-tight">{link.text}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
