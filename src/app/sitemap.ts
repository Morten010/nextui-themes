import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap{

    return [
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
            priority: 1
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/components`,
            priority: 0.8
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/colors`,
            priority: 0.8
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/create`,
            priority: 0.8
        },
    ]
}