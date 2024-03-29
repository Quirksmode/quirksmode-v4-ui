import { Metadata } from "../Page/Page.types";

export interface PageAboutData {
  content: Content;
  metadata: Metadata;
}

export interface Content {
  title: string;
  intro: string;
  skillsSections: SkillsSections;
  cvSections?: CvSectionsEntity[];
}

export interface SkillsSections {
  skillsIcon: string;
  skillsTitle: string;
  skills?: SkillsEntity[];
}

export interface SkillsEntity {
  skills_category_name: string;
  skills_colour: string;
  add_skill?: AddSkillEntity[];
}

export interface AddSkillEntity {
  skill_name: string;
  skill_percentage: string;
}

export interface CvSectionsEntity {
  add_icon: string;
  add_class: string;
  add_title: string;
  add_content: string;
}
