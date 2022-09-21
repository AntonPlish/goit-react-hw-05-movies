import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "./SharedLayout/SharedLayout";
// import Home from "../pages/Home";
// import { Movies } from "../pages/Movies";
// import { MovieDetails } from "../pages/MovieDetails";
// import { Cast } from "./Cast";
// import { Reviews } from "./Reviews";

// const createAsyncComponent = (path) => lazy(() => import(path));
// const Home = createAsyncComponent("../pages/Home");
// const ProductDetails = createAsyncComponent("../pages/ProductDetails");
// const Products = createAsyncComponent("../pages/Products");
// const Mission = createAsyncComponent("./Mission");
// const Team = createAsyncComponent("./Team");
// const Reviews = createAsyncComponent("./Reviews");

const Home = lazy(() => import("../pages/Home"));
const MovieDetails = lazy(() => import("../pages/MovieDetails"));
const Movies = lazy(() => import("../pages/Movies"));
const Cast = lazy(() => import("./Cast/Cast"));
const Reviews = lazy(() => import("./Reviews/Reviews"));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>

  );
};
