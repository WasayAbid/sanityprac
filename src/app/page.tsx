import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

const getBlogs = async () => {
  try {
    const data = await client.fetch(`*[_type=="blog"]`);
    console.log("Fetched blogs:", data);
    return data;
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return [];
  }
};



export default async function Home() {
  const blogs = await getBlogs();
  
  return (
    <main
      className="relative min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: 'url(/image.png)', 
      }}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>

      <div className="relative p-10">
        <div className="text-center mb-12">
          <h1 className="bg-blue-600 text-white font-bold py-2 px-6 rounded-lg font-mono text-4xl inline-block shadow-lg">
            Random Blogs
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.length > 0 ? (
            blogs.map((blog) => (
              <div
                key={blog._id}
                className="bg-white border border-gray-200 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl"
              >
                <div className="p-5">
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">
                    {blog.name}
                  </h2>
                  <p className="text-gray-600 mb-4">{blog.description}</p>
                  {blog.image && (
                    <div className="w-full h-64 overflow-hidden rounded-lg mb-4">
                      <Image
                        src={urlFor(blog.image)}
                        width={300}
                        height={200}
                        alt="Blog Image"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <button className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 hover:bg-blue-700 transition">
                    Read More
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>No blogs available.</p>
          )}
        </div>
      </div>
    </main>
  );
}
