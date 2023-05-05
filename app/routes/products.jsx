import { useLoaderData, Outlet, NavLink } from "@remix-run/react";

export const meta = () => {
  return [{ title: "New Remix App" }];
};

export const loader = async () => {
  const data = await fetch('https://dev.buildgp.com/wp-json/wp/v2/product')

  return data
}

const style = {
  padding: "2rem", width: "20rem", overflow: "auto", border: "1px solid #9197AE", borderRadius: "0.25rem", flexGrow: 1
}

export default function Index() {
  const data = useLoaderData()
  console.log(data)
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>

      <div style={{ display: "flex", gap: "2rem" }}>

        <div style={{ flexBasis: '40%', ...style}}>
          <h1 >Products</h1>
          <ul>
            {
              data.map((product) => {
                return (
                  <li key={product.id}>
                    <NavLink to={`/products/${product.slug}`} prefetch="render"> {product.title.rendered}</NavLink>
                  </li>
                )
              })
            }
          </ul>
        </div>

        <div style={{ flexBasis: '60%', ...style}}>
          <Outlet />
        </div>

      </div>
    </div>
  );
}
