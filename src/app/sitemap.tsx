import { MetadataRoute } from "next";

export default async function Sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://testfordeployents.vercel.app/';
    
    return [
        {
            url: `${baseUrl}/pubg`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.7
        },
        {
            url: `${baseUrl}/freefire`,
            lastModified: new Date(),
            changeFrequency: 'daily', 
            priority: 0.8
        },
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1.0
        }
    ];
}
