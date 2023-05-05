import { useLoaderData, Outlet, Link } from "@remix-run/react";

export const meta = () => {
  return [{ title: "New Remix App" }];
};

export const loader = async () => {
  const data = await fetch('https://dev.buildgp.com/wp-json/wp/v2/product')

  return data
}

export default function Index() {
  const data = useLoaderData()
  console.log(data)
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>

      <div style={{ display: "flex" }}>
        <div>
          <h1 >Products</h1>
          <ul style={{ width: "20rem", overflow: "hidden" }}>
            {
              data.map((product) => {
                return (
                  <li key={product.id}>
                    <Link to={`/products/${product.slug}`} prefetch="render"> {product.title.rendered}</Link>
                  </li>
                )
              })
            }
          </ul>
        </div>
        <div style={{ width: "50rem" }}>

          <Outlet />
        </div>

      </div>
    </div>
  );
}
