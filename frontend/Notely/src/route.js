import React, { lazy, Suspense } from "react";

// const LazyLoad = (Component) => (<Suspense fallback={<div>Loading...</div>}>  <Component /> </Suspense>);
const routeConfig = [
    {path: "/notes", element: lazy(() => import("@/pages/notes/Index.jsx"))}
]

export default routeConfig;