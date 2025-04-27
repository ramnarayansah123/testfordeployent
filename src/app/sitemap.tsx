import { MetadataRoute } from "next";

export default async function Sitemap(): Promise<MetadataRoute.Sitemap> {
    return [
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/move`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.7
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/freefire`,
            lastModified: new Date(),
            changeFrequency: 'daily', 
            priority: 0.8
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1.0
        }
    ];
}
