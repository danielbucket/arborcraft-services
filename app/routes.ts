import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  route("/", "routes/main/main.tsx", [
    index("./routes/home/home.tsx"),
    route("services", "./routes/services/services.tsx"),
    route("contact", "./routes/contact/contact.tsx"),
    route("prices", "./routes/prices/prices.tsx"),
    route("reviews", "./routes/reviews/reviews.tsx"),
    route("about", "./routes/about/about.tsx"),
  ]),
] satisfies RouteConfig;
