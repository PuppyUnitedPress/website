import type { MetaTagsProps } from 'svelte-meta-tags';

const MetaTagsColor = (color: string): MetaTagsProps['additionalMetaTags'] => [
	{
		name: 'theme-color',
		content: color
	}
];

export default MetaTagsColor;
