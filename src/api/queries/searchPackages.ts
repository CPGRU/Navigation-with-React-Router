import type { PackageSummary } from "../types/packageSummary";

interface SearchResponse{
    objects: {
        package:{
            name: string;
            version: string;
            description: string;
            keywords: string[];
        }
    }[]
}

export async function SearchPackages(term: string): Promise<PackageSummary[]>{
    const res = await fetch(
        `https://registry.npmjs.org/-/v1/search?text=${term}`
    );
    const data: SearchResponse = await res.json();
    //{objects:[{package1},{package2},{package3}...], time:..., total:...}

    return data.objects.map(({package:{ name, version, description, keywords}})=>{
        return {
            name,
            version,
            description,
            keywords,
        };
    });
}