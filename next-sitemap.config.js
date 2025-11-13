/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://heartfelthomerenovations.com',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  additionalPaths: async (cfg) => [
    await cfg.transform(cfg, '/faq'),
    await cfg.transform(cfg, '/services/kitchen'),
    await cfg.transform(cfg, '/services/bathroom'),
    await cfg.transform(cfg, '/services/flooring'),
    await cfg.transform(cfg, '/services/repairs'),
  ],
}
