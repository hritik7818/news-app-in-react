import React from 'react';

export default function NewsItem(props) {
    return <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mt-12">
        <div className="max-w-sm flex justify-end"> <span className="absolute text-xs py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-rose-700 text-white rounded">{props.source}</span></div>
        <img className="rounded-t-lg h-56 w-full" src={props.imageUrl ? props.imageUrl : "https://images.livemint.com/img/2022/01/31/600x338/stock-kpeE--621x414@LiveMint_1643593598451.jpg"} alt="img" />
        <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {props.title ? props.title.slice(0, 50) + "..." : ""}
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {props.desc ? props.desc.slice(0, 120) + "..." : ""}
            </p>
            <a
                href={props.details} target="_blank"
                className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-slate-800 rounded-lg hover:bg-black focus:ring-4 focus:ring-blue-300 dark:bg-black dark:hover:bg-black dark:focus:ring-black"
            >
                Read more
                <svg
                    className="ml-2 -mr-1 w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                    />
                </svg>
            </a>
            <p className="mt-3 text-gray-700 dark:text-gray-400">
                By {props.author ? props.author : "Unknown"} on {new Date(props.publishedAt).toGMTString()}
            </p>
        </div>
    </div>
}
