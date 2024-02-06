import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app/store";
import "./index.css";
import Landing from "./screens/Landing";
import Main from "./screens/Main";
import Error from "./screens/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
    errorElement: <Error />,
  },
  {
    path: "warp/",
    element: <Main />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const cursorBorder = document.querySelector("#cursor-border") as HTMLElement;
const cursorPos = { x: 0, y: 0 };
const cursorBorderPos = { x: 0, y: 0 };
let scrollPos = 0,
  smoothScrollPos = 0,
  scrollEasting = 40;

document.addEventListener("mousemove", (e) => {
  cursorPos.x = e.clientX;
  cursorPos.y = e.clientY;
});
document.addEventListener(
  "wheel",
  (e) => {
    e.preventDefault();
    const x = Math.min(smoothScrollPos, 1695 - smoothScrollPos);
    scrollEasting = x / 10 + 30;
    scrollPos = Math.min(Math.max(scrollPos + (e.deltaX || e.deltaY), 0), 1695);
    return false;
  },
  { passive: false }
);

requestAnimationFrame(function loop() {
  const easting = 8;
  cursorBorderPos.x += (cursorPos.x - cursorBorderPos.x) / easting;
  cursorBorderPos.y += (cursorPos.y - cursorBorderPos.y) / easting;
  smoothScrollPos += (scrollPos - smoothScrollPos) / scrollEasting;

  cursorBorder.style.transform = `translate(${cursorBorderPos.x}px, ${cursorBorderPos.y}px)`;
  window.scrollTo(smoothScrollPos, 0);
  requestAnimationFrame(loop);
});

root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
  // </React.StrictMode>
);
