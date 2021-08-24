import { Constructor } from "../utils/constructor";
import { WithWordingInterface } from "../utils/with-wording";

interface TextSectionWording {
  title: string;
  content: string;
}

interface ListSectionWording {
  title: string;
  content: string[];
}

interface ExperienceItemWording {
  jobTitle?: string;
  company?: {
    name?: string;
    details?: string;
  };
  startDate: string;
  endDate?: string;
  details?: string[] | string;
  shortLine?: boolean;
  icon: string;
}

export interface ExperienceWording {
  title: string;
  items: ExperienceItemWording[][];
  dateIntervals: {
    noEnd: string;
    start: string;
    end: string;
  };
}

export interface CVNMAWording {
  title: string;
  subtitle: string;
  note: string;
  contact: {
    email: string;
  };
  presentation: {
    title: string;
    abstract: string;
    langs: ListSectionWording;
    networks: {
      title: string;
      content: {
        icon: string;
        alt: string;
        text: string;
        url?: string;
      }[];
    };
  };
  intro: {
    callToAction: {
      text: string;
      url: string;
      img: {
        src: string;
        alt: string;
      };
    };
    items: {
      title: string;
      content: string[];
      icon: {
        src: string;
        caption: string;
      };
    }[];
  };
  experience: ExperienceWording;
  education: {
    title: string;
    items: {
      school: string;
      diploma: string;
      year: string;
    }[];
  };
  accomplishments: {
    title: string;
    groups: {
      title: string;
      items: {
        headline: string;
        date?: string;
        links?: {
          text: string;
          href?: string;
        }[];
        context?: string;
        href?: string;
      }[];
    }[];
  };
  misc: {
    title: string;
    content: string[];
  };
}

export type WithCVNMAWording = Constructor<WithWordingInterface<CVNMAWording>>;
