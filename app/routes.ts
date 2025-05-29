import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/root/root.tsx"),
  route("about", "./routes/about/about.tsx"),
  route("services", "./routes/services/services.tsx"),
  route("contact", "./routes/contact/contact.tsx"),
] satisfies RouteConfig;
