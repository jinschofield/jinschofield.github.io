"use client";

import { useState } from "react";
import Image from "next/image";
import { Education } from "@/data/education";

export function EducationEntry({ education }: { education: Education }) {
  const [showCoursework, setShowCoursework] = useState(false);

  return (
    <div>
      <div className="grid grid-cols-4 gap-x-1.5 mb-1.5">
        <span className="text-xs text-zinc-500">{education.year}</span>
        <div className="col-span-3 flex items-start gap-2">
          {education.logo && (
            <div className="w-6 h-6 mt-0.5 flex-shrink-0">
              <Image
                src={education.logo}
                alt={`${education.institution} logo`}
                width={24}
                height={24}
                className="rounded-sm object-contain"
              />
            </div>
          )}
          <div>
            <h3 className="text-sm font-medium font-serif">{education.degree} — {education.institution}</h3>
          {education.advisor && (
            <p className="text-xs text-zinc-500 mt-1 italic">
              Advisor: {education.advisor}
            </p>
          )}
          {education.thesis && (
            <p className="text-xs text-zinc-500 mt-1 italic">
              Thesis:{" "}
              {education.thesisUrl ? (
                <a
                  href={education.thesisUrl}
                  className="hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {education.thesis}
                </a>
              ) : (
                education.thesis
              )}
            </p>
          )}
          {education.description && (
            <p className="text-xs text-zinc-500 mt-1">
              {education.description}
            </p>
          )}
          {education.activities && (
            <p className="text-xs text-zinc-500 mt-1">
              {education.activities}
            </p>
          )}
          {education.coursework && (
            <div className="mt-2">
              <button
                onClick={() => setShowCoursework(!showCoursework)}
                className="text-xs text-blue-600 hover:underline focus:outline-none"
              >
                {showCoursework ? 'Hide Coursework' : 'View Coursework'}
              </button>
              {showCoursework && (
                <div className="mt-2 grid grid-cols-2 gap-1 text-xs text-zinc-600">
                  {education.coursework.map((course, index) => (
                    <div key={index} className="flex items-start">
                      <span className="mr-1">•</span>
                      <span>{course}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
          </div>
        </div>
      </div>
    </div>
  );
}
