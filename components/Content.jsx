import React from 'react'


const Content = () => {
  const content = [
    {date: " Mar 24, 2023 ", ket: " 4 min read ", title1: "New attack targets U.S. ", title2: " base in Syria - CBSNEWS", media: "/syria.mp4", link: "https://www.cbsnews.com/video/new-attack-targets-us-base-in-syria-following-american-airstrikes-over-contractors-death/?intcid=CNM-00-10abd1h", desc: "A new attack targeted a U.S. military base in Syria on Friday, according to U.S. officials. Overnight, the U.S. military carried out precision airstrikes in retaliation for another attack Thursday that killed an American contractor and hurt six other people, according to the Pentagon."},
    {date: " Mar 23, 2023 ", ket: " 3 min read ", title1: "TikTok CEO", title2: " data security - CBSNEWS", media: "/Tiktok.mp4", link: "https://www.cbsnews.com/video/new-attack-targets-us-base-in-syria-following-american-airstrikes-over-contractors-death/?intcid=CNM-00-10abd1h", desc: "TikTok CEO Shou Zi Chew plans to tell a House committee that the popular social media app is taking real action to address national security concerns, while the bipartisan group of policymakers appears to inch closer to banning the app."},
  ]
  return (
<section>
  <div class="relative mx-auto max-w-7xl w-11/12">
    <div class="grid max-w-lg md:gap-8 mx-auto mt-8 md:mt-12 lg:grid-cols-2 lg:max-w-none">
      {content.map((content) => (
      <div class="flex flex-col mb-12 overflow-hidden cursor-pointer">
        <a>
          <div class="flex-shrink-0">
            <video class="object-cover w-full h-48 rounded-lg" src={content.media} controls/>
          </div>
        </a>
        <div class="flex flex-col justify-between flex-1">
          <a>{}</a>
          <div class="flex-1">
            <a>
              <div class="flex pt-6 space-x-1 text-sm text-gray-500">
                <time datetime="2023-03-24">{content.date}</time>
                <span aria-hidden="true"> · </span>
                <span> {content.ket} </span>
              </div>
              <h2 className="font-bold md:text-3xl mt-2">
                 {content.title1}<br />{content.title2}
              </h2>
              <p className="text-sm md:text-md">
                 {content.desc}
              </p>
            </a>
            <a
              rel="noopener noreferrer"
              href={content.link}
              className="inline-flex items-center py-2 space-x-2 text-sm text-orange-500"
            >
              <span>Read full news</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      ))}
    </div>
  </div>
</section>
  )
}

export default Content