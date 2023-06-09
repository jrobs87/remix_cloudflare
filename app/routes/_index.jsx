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
      <h1>Welcome to Remix</h1>
      <ul>
        <li>
          <Link to="/sandbox">Sandbox</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
      </ul>
    </div>
  );
}
