import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  route("/", "routes/main/main.tsx", [
    index("./routes/home/home.tsx"),
    route("about", "./routes/about/about.tsx"),
    route("services", "./routes/services/services.tsx"),
    route("contact", "./routes/contact/contact.tsx"),
  ]),
] satisfies RouteConfig;
