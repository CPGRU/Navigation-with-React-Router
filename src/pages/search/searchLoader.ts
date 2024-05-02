import type { PackageSummary } from "../../api/types/packageSummary";
import { SearchPackages } from "../../api/queries/searchPackages";

export interface SearchLoaderResult{
    searchResults: PackageSummary[];
}

export async function searchLoader({ 
    request, 
}: { 
    request: Request; 
}): Promise<SearchLoaderResult>{
    const url = new URL(request.url);
    const term = url.searchParams.get('q');
    
    if(!term){
      throw new Error('Search term must be provided');
    }
    
    const results = await SearchPackages(term);  //[{package1},{package2},{package3}...]
    

    return {
        searchResults: results //professional projects: return an Object caontain results
    };                         //{searchResults: [{package1},{package2},{package3}...]}
  }
  