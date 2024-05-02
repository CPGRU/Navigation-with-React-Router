import { useLoaderData } from "react-router-dom";
import { SearchLoaderResult } from "./searchLoader";
import PackageListItem from "../../components/PackageListItem";

export default function SearchPage(){
    const { searchResults } = useLoaderData() as SearchLoaderResult;
    //As the user navigates around the app, the loaders for the next matching branch of routes will be called in parallel 
    //and their data made available to components through useLoaderData.

    const renderedResults = searchResults.map((result)=>{
        return <PackageListItem pack={result} key={result.name}/>
    })
    return (
        <div>
            <h1 className="text-2xl font-bold my-6">Search Results</h1>
            <div className="space-y-4 mt-4">
                { renderedResults}
            </div>
        </div>
        
    )
}