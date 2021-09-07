import * as React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

const NotFoundPage = () => (
  <Layout>
    <SEO
      title="404 error – Grabby Aliens"
      description="This page does not exist. Please return to the homepage."
    />
    <div className="bg-white lg:p-10 sm:p-5 p-3 shadow lg:rounded-2xl sm:rounded-xl rounded-lg">
      <h1 className="font-serif lg:text-2xl sm:text-xl text-lg">
        This page does not exist.
      </h1>
    </div>
  </Layout>
);

export default NotFoundPage;
