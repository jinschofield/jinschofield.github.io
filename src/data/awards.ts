export interface Award {
  date: string;
  title: string;
  description: string;
  link?: string;
  logo?: string;
}

export const awardsData: Award[] = [
  {
    date: "2025",
    title: "1st Place, Jane Street Estimathon at Harvard Undergraduate Trading Competition",
    description: "Won <strong>first place</strong> in the <strong>Estimathon</strong> competition at the <strong>Harvard Undergraduate Trading Competition</strong>.",
    logo: "/images/hutc.png"
  },
  {
    date: "2024",
    title: "Team Princeton, ICPC Regionals",
    description: "Competed in the <strong>ACM ICPC North America East Regional Programming Contest</strong>.",
    logo: "/images/icpc.png"
  },
  {
    date: "2023",
    title: "Princeton Pitch Competition Finalist",
    description: "Selected as a <strong>finalist</strong> in the <strong>Princeton Pitch Competition</strong>.",
    logo: "/images/eclub.png"
  },
  {
    date: "2023",
    title: "National HOSA Medical Innovation Champion",
    description: "Won <strong>1st place</strong> at the <strong>National HOSA Medical Innovation Competition</strong>.",
    logo: "/images/hosa.png"
  },
  {
    date: "2022",
    title: "Invited Speaker, Canadian Business Hall of Fame",
    description: "Invited to speak at the <strong>Canadian Business Hall of Fame</strong> event.",
    logo: "/images/halloffame.png"
  },
  {
    date: "2021",
    title: "DMZ Champion",
    description: "Won <strong>$5,000</strong> as a <strong>DMZ Champion</strong>. Also received <strong>$10,000</strong> from the <strong>Youth Impact Challenge</strong>.",
    logo: "/images/dmz.png"
  },
  {
    date: "2020",
    title: "97th Percentile, Fryer Math Contest",
    description: "Achieved <strong>97th percentile</strong> in the <strong>University of Waterloo Fryer Math Contest</strong>.",
    logo: "/images/waterloo.png"
  },
  {
    date: "2021",
    title: "1st Place, Youth Impact Challenge",
    description: "Awarded <strong>1st place</strong> out of <strong>300+ competitors</strong> in the <strong>Youth Impact Challenge</strong>, receiving <strong>$10,000</strong> in funding.",
    logo: "/images/youthimpactchallenge.png"
  },
  {
    date: "2020",
    title: "Selected to Represent Canada at FIRST Worlds (Robotics)",
    description: "Chosen to represent <strong>Canada</strong> at the <strong>FIRST Robotics World Championship</strong>.",
    logo: "/images/first.png"
  }
];
