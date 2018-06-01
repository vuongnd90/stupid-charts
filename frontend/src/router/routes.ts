import Graph from "../pages/graph/Graph.vue";
import Home from "../pages/home/Home.vue";

export const routes = [
    {
        component: Home,
        meta: { title: "Home" },
        name: "home",
        path: "/",
    },
    {
        component: Graph,
        meta: { title: "Graph" },
        name: "graph",
        path: "/graph",
    },
];
