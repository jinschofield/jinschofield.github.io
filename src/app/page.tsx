import { EducationEntry } from "@/components/education-entry";
import { educationData } from "@/data/education";
import { ProfileSection } from "@/components/profile-section";
import { aboutMe } from "@/data/aboutme";
import { AwardEntry } from "@/components/award-entry";
import { awardsData, Award } from "@/data/awards";
import { researchData } from "@/data/research";
import { ExperienceEntry } from "@/components/experience-entry";
import { experienceData } from "@/data/experience";
import { PortfolioEntry } from "@/components/portfolio-entry";
import { portfolioData } from "@/data/portfolio";
import { PublicationEntry } from "@/components/publication-entry";
import { publicationData } from "@/data/publication";
import { sectionOrder, Section } from "@/data/section-order";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFFCF8]">
      <div className="max-w-screen-lg mx-auto px-6 py-12">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-1">
          {/* Left Column - Fixed Info */}
          <div className="col-span-12 md:col-span-4 space-y-6 mb-6 md:mb-0">
            {/* Profile */}
            <div className="md:sticky top-6 space-y-4">
              <ProfileSection aboutMe={aboutMe} />
            </div>
          </div>

          {/* Right Column - Scrolling Content */}
          <div className="col-span-12 md:col-span-7 md:col-start-6 space-y-12">
            {/* Content sections */}

            {/* Map through sectionOrder to render sections in correct order */}
            {sectionOrder.map((sectionName) => {
              // Most of this is redundant... but in case it needs to be unique.
              switch (sectionName) {
                case Section.Awards:
                  return (
                    awardsData.length > 0 && (
                      <section key={sectionName} className="mb-8">
                        <h2 className="font-serif text-l mb-4 tracking-wide uppercase">
                          Awards
                        </h2>
                        <div className="space-y-6">
                          {awardsData.map((award: Award, index: number) => (
                            <div key={index}>
                              <AwardEntry award={award} />
                            </div>
                          ))}
                        </div>
                      </section>
                    )
                  );
                case Section.Education:
                  return (
                    educationData.length > 0 && (
                      <section key={sectionName} className="mb-8">
                        <h2 className="font-serif text-zinc-700 mb-4 tracking-wide uppercase">
                          Education
                        </h2>
                        <div className="space-y-6">
                          {educationData.map((education, index) => (
                            <EducationEntry key={index} education={education} />
                          ))}
                        </div>
                      </section>
                    )
                  );

                case Section.Experience:
                  return (
                    experienceData.length > 0 && (
                      <section key={sectionName} className="mb-8">
                        <h2 className="font-serif text-md mb-4 tracking-wide uppercase">
                          Experience
                        </h2>
                        <div className="space-y-6">
                          {experienceData.map((experience, index) => (
                            <ExperienceEntry
                              key={index}
                              experience={experience}
                            />
                          ))}
                        </div>
                      </section>
                    )
                  );
                case Section.Portfolio:
                  return (
                    portfolioData.length > 0 && (
                      <section key={sectionName} className="mb-8">
                        <h2 className="font-serif text-md mb-4 tracking-wide uppercase">
                          Other Projects
                        </h2>
                        <div className="space-y-6">
                          {portfolioData.map((portfolio, index) => (
                            <PortfolioEntry key={index} portfolio={portfolio} />
                          ))}
                        </div>
                      </section>
                    )
                  );
                case Section.Publications:
                  return (
                    (researchData.length > 0 || publicationData.length > 0) && (
                      <section key={sectionName} className="mb-8">
                        <h2 className="font-serif text-md mb-4 tracking-wide uppercase">
                          Publications
                        </h2>
                        <div className="space-y-6">
                          {researchData.map((research, index) => (
                            <AwardEntry key={`research-${index}`} award={research} />
                          ))}
                          {publicationData.map((publication, index) => (
                            <PublicationEntry key={`pub-${index}`} publication={publication} />
                          ))}
                        </div>
                      </section>
                    )
                  );
                default:
                  return null;
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
