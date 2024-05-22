# Leilukin's Hub

Source code of my hobby website, [Leilukin's Hub](https://leilukin.neocities.org/), hosted on [Neocities](https://neocities.org/).

Built with [Eleventy](https://www.11ty.dev/) and deployed to Neocities with the [deploy-to-neocities](https://github.com/bcomnes/deploy-to-neocities) GitHub action.

## Dependencies
- [Eleventy](https://www.11ty.dev/)
- Eleventy's official [RSS](https://www.11ty.dev/docs/plugins/rss/) plugin
- Eleventy's official [Navigation](https://www.11ty.dev/docs/plugins/navigation/) plugin

### Eleventy Community Plugins
- [eleventy-plugin-emoji-readtime](https://www.npmjs.com/package/@11tyrocks/eleventy-plugin-emoji-readtime)
- [eleventy-plugin-embed-everything](https://www.npmjs.com/package/eleventy-plugin-embed-everything)
- [eleventy-plugin-metagen](https://www.npmjs.com/package/eleventy-plugin-metagen)
- [eleventy-plugin-nesting-toc](https://www.npmjs.com/package/eleventy-plugin-nesting-toc)

### markdown-it plugins
- [markdown-it-anchor](https://www.npmjs.com/package/markdown-it-anchor)
- [markdown-it-attribution](https://www.npmjs.com/package/markdown-it-attribution)
- [markdown-it-attrs](https://www.npmjs.com/package/markdown-it-attrs)
- [markdown-it-bracketed-spans](https://www.npmjs.com/package/markdown-it-bracketed-spans)
- [markdown-it-deflist](https://www.npmjs.com/package/markdown-it-deflist)
- [markdown-it-footnote](https://www.npmjs.com/package/markdown-it-footnote)

## Self-hosted Assets
- [Lexend](https://www.lexend.com/) font family
- [Intel One Mono](https://www.intel.com/content/www/us/en/company-overview/one-monospace-font.html) typeface
- [Font Awesome](https://fontawesome.com/)

## Run Locally
1. Clone this repository locally
```
git clone https://github.com/helenclx/Neocities-Leilukin.git
```
2. Install dependencies
```
bun install
```
3. Run the project
```
bun run start
```
4. Open http://localhost:8080/ in your browser

This project was created using `bun init` in bun v1.1.0. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
