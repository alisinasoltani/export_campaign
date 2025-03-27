'use client'

import { useState, useEffect } from "react";
import axios from "axios";
import ChapterOverview from "@/components/dashboard/ChapterOverview";
import type { ChapterData } from "@/types";

const page = () => {
    const [data, setData] = useState<ChapterData[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [renderTrigger, setRenderTrigger] = useState<number>(0);

    useEffect(() => {
        axios.get('http://localhost:3000/api/chapters')
        .then((response) => {
            setData(response.data);
        })
        .catch((error) => {
            setError(error);
        })
        .finally(() => {
            setLoading(false);
        })
    }, [renderTrigger]);

    const handleTrigger = () => {
        setRenderTrigger((prev) => prev + 1);
    }
    
    if (loading) return (<div>it's loading!</div>);
    if (error) return (<div className="text-red-400">something went wrong!</div>);
    return (
        <div className="flex flex-col justify-center items-center gap-4 irsansx">
            {
                data.map((chapter) => (
                    <ChapterOverview key={chapter.id} id={chapter.id} title={chapter.title} trigger={handleTrigger} />
                ))
            }
        </div>
    );
}

export default page;