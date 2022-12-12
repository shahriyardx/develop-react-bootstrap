import React from "react"
import Blogs from "../components/blogs/Blogs"
import Breadcrumb from "../components/shared/Breadcrumb"
import MainLayout from "../components/shared/MainLayout"

const BlogPage = () => {
  const pageDescription = `Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum dolorem.`

  return (
    <MainLayout>
      <Breadcrumb title="Blogs" description={pageDescription} />

      <section id="blog" class="blog">
        <div class="container" data-aos="fade-up">
          <div class="row gy-4 posts-list">
            <Blogs />
          </div>
        </div>
      </section>
    </MainLayout>
  )
}

export default BlogPage
