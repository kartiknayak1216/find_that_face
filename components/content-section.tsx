import ContentBlock from "@/components/content-block"
import Sidebar from "@/components/sidebar"

export default function ContentSection() {
  const contentBlocks = [
    {
      title: "What is Reverse Image Search?",
      content:
        "Reverse image search is a technology based on CBIR (Content-Based Image Retrieval). Reverse image search engines can find photos online using a picture provided by the user – no additional keywords are needed. To find a photo using reverse image search, the user simply uploads an image to a search engine, such as lenso.ai. The results include the matched image and the source URL where the photo was found. This technology is used by content creators, photographers, artists, and anyone who is looking for pictures online. Reverse Image Search is the best technology to use when looking for images on the Internet.",
      link: "How to reverse image search?",
    },
    {
      title: "What is Face Search?",
      content:
        "Face Search is a tool that's used for finding people online from image. Face Search engines work thanks to Facial Recognition – this technology is able to find and calculate the distances between facial features, such as eyes, nose and mouth, and match all faces that are identical. Finding photos of humans online is not something any tool can do. That's why there are engines dedicated to facial search, such as lenso.ai. These tools are trained specifically to search for faces and people. Thanks to this, they are able to locate and find photos of the same person in different places and with different facial expressions.",
      link: "Find people from picture",
    },
    {
      title: "How to find copies of images online?",
      content:
        "Finding copies of images online can be useful for anyone concerned about their privacy and the copyright of their images. To find copies of any photo on the Internet, it's best to use reverse image search. This technology finds pictures that are identical to the query image – the image uploaded by the user. After uploading the photo to the image search engine, the tool finds all photos that are copies of this image, or pictures that are very similar, for example different versions of that image, or pictures where the searched image appears, even if only in a smaller format. You can find the same photo in different resolutions or newer and older versions of the same image.",
      link: "Find similar images online",
    },
    {
      title: "How to find similar photos online?",
      content:
        "Finding similar and related pictures online is easy with reverse image search engines. Image Search was popularized by Google, but now it's become a technology used by many search engines, like Yandex or lenso.ai. To find pictures that look similar or identical copies of any photo, it's best to open a browser of choice – Chrome, Edge, Firefox, Safari, or any other popular browser – and search for any image search engine, such as lenso.ai. To make a search with a reverse image search tool, you have to upload your picture from your drive, paste it from the clipboard, or drag it into the upload field. This action starts a search. After the search is done, you have to choose the category you're looking for. These engines can find people, places, duplicates of images, and similar or related pictures in seconds. It's also possible to make a reverse image search on a mobile device by uploading the picture or taking a photo. It's the best way to find books, movies, objects, as well as animals or plants. You can use image search to find landmarks and locations, as well as celebrities and everyday people.",
      link: "Reverse Image Search with lenso.ai",
    },
  ]

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-10">
        {/* Main Content */}
        <div className="lg:col-span-2 bg-indigo-50 rounded-2xl p-10 shadow-md">
          <p className="text-indigo-500 font-medium mb-2">Learn more about Image Search and lenso.ai</p>
          <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-10">
            What is Reverse Image Search on lenso.ai?
          </h1>

          {contentBlocks.map((block, index) => (
            <ContentBlock key={index} {...block} />
          ))}
        </div>

        <Sidebar />
      </div>
    </section>
  )
}
