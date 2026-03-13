import type { CollectionEntry } from "astro:content";

export type ProjectEntry = CollectionEntry<"projects">;

export const sortProjectsByOrder = (projects: ProjectEntry[]) =>
  [...projects].sort((a, b) => a.data.order - b.data.order);

export const projectPath = (slug: string) => `/selected-work/${slug}/`;

export const mapProjectForGrid = (project: ProjectEntry) => ({
  slug: project.slug,
  title: project.data.title,
  image: project.data.image,
  descriptor: project.data.descriptor,
  order: project.data.order,
  layoutPattern: project.data.layoutPattern,
  visualWeight: project.data.visualWeight,
  orientation: project.data.orientation,
  cropFocus: project.data.cropFocus,
  detailImages: project.data.detailImages,
});
