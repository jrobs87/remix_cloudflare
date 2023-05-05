import { useLoaderData, Outlet, Link } from "@remix-run/react";

export const meta = () => {
  return [{ title: "New Remix App" }];
};

export const loader = async ({ params }) => {
  const data = await fetch(`https://dev.buildgp.com/wp-json/wp/v2/product?slug=${params.slug}&_embed=benefits`)
  console.log('product', data)
  return data
}

const imgStyle = (url) => {
  return {
    backgroundImage: `url(${url})`,
    height: "20rem",
    width: "100%",
    backgroundSize: 'cover',
    backgroundRepeat: "no-repeat",
    backgroundPosition: 'center',
    backgroundColor: 'black',
    marginBottom: '1rem'
  }
}

export default function Index() {
  const data = useLoaderData()

  console.log('product', data)

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>{data[0].title.rendered}</h1>



      <div style={imgStyle(data[0].yoast_head_json.og_image[0].url)}></div>

      <pre>{JSON.stringify(data[0], null, 2)}</pre>
    </div>
  );
}
