import * as React from "react";
import type { HeadFC } from "gatsby";
import "../styles/global.css";
import pi_dat from "../data/personal.json";
import misc_dat from "../data/misc.json";

const IndexPage = () => {
  return (
    <main>
      <div className="text-white grid grid-rows-2 text-3xl font-extrabold">
        {Object.values(pi_dat.names).map((name) => {
          return (
            <div>
              <span className="bg-black px-2">{name}</span>
            </div>
          );
        })}
      </div>
      {misc_dat.text_below_name.code ? (
        <code>{misc_dat.text_below_name.text}</code>
      ) : (
        <span>{misc_dat.text_below_name.text}</span>
      )}
    </main>
  );
};

export default IndexPage;

/* Page metadata */
export const Head: HeadFC = () => {
  return (
    <>
      <title>Kamal Sacranie | Résumé</title>
      <script
        src="https://unpkg.com/pagedjs/dist/paged.polyfill.js"
        type="text/javascript"
      ></script>
    </>
  );
};
