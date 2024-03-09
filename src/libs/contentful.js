import {isDevelopment} from "@/libs/utils";

const fetchGraphQL = async (query, preview = isDevelopment) => {
    const res = await fetch(`https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${preview ? process.env.CONTENTFUL_PREVIEW_API_KEY : process.env.CONTENTFUL_DELIVERY_API_KEY}`,
        },
        body: JSON.stringify({query}),
    })
    if (!res.ok) return undefined

    return res.json()
}

export const getAllWritings = async (preview = isDevelopment) => {
    const result = await fetchGraphQL(
        `query {
              writingCollection(preview: ${isDevelopment}) {
                items {
                  title,
                  slug,
                  date,
                  sys {
                    firstPublishedAt
                    publishedAt
                  }
                }
              }  
            }`, preview);

    return result?.data?.writingCollection?.items ?? [];

}

