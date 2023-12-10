// import {createWriteStream} from "fs";
// import {SitemapStream} from "sitemap";
//
// const hostname = " https://rabipeknovel.com"
//
// const urls = [
// 	{
// 		url: "/",
// 		changefreq: "daily",
// 		priority: 1
// 	},
// 	{
// 		url: "/catalogue",
// 		changefreq: "daily",
// 		priority: 0.7
// 	},
// 	{
// 		url: "/user/login",
// 		changefreq: "monthly",
// 		priority: 0.7
// 	},
// 	{
// 		url: "/user/signup",
// 		changefreq: "monthly",
// 		priority: 0.7
// 	},
// 	{
// 		url: "/soumettre-un-manuscrit",
// 		changefreq: "monthly",
// 		priority: 0.7
// 	}
// ];
//
//
// const sitemap = new SitemapStream({hostname: hostname})
// const writeStream = createWriteStream('../public/sitemap.xml');
// sitemap.pipe(writeStream);
//
// sitemap.write(urls)
// sitemap.end()