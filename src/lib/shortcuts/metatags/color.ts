import { MetaTagsProps } from "svelte-meta-tags";

const MetaTagsColor = (color: string) => [{
  rel: undefined as unknown as string,
  href: undefined as unknown as string,
  color,
}]as MetaTagsProps["additionalLinkTags"][keyof MetaTagsProps["additionalLinkTags"]];

export default MetaTagsColor;