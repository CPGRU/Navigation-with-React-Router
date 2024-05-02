import type { PackageDetails } from "../types/packageDetails";

const FEATURED_PACKAGES = [
    'react',
    'typescript',
    'esbuild',
    'vite'
];

export async function getFeaturedPackages(){
    const promises = FEATURED_PACKAGES.map(async (name)=>{
        const res = await fetch(`https://registry.npmjs.org/${name}`);
        return res.json()
    });

    const data = await Promise.all(promises);
    //Promise.all() method takes an iterable of promises as input and returns a single Promise.
    return data as PackageDetails[];
}