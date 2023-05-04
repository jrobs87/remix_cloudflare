import { useLoaderData, Outlet, Link } from "@remix-run/react";

export const meta = () => {
  return [{ title: "New Remix App" }];
};

export const loader = async ({params}) => {
  const data = await fetch(`https://dev.buildgp.com/wp-json/wp/v2/product/${params.id}`)

  return data
}

export default function Index() {
  const data = useLoaderData()
  console.log('product', data)
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Product</h1>
   
      <Outlet />
    </div>
  );
}
