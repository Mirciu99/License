import { useEffect, useState } from "react";
import agent from "../../app/api/agent";
import LoadingComponent from "../../app/layout/LoadingComponent";
import { Product } from "../../app/models/product";
import ProductList from "./ProductList";

export default function Catalog() {
  const [products, SetProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  console.log(products);

  useEffect(() => {
    agent.Catalog.list()
      .then((products) => SetProducts(products))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <LoadingComponent message="Loading products..." />;

  return (
    <>
      <h1>Catalog</h1>
      <ProductList products={products} />
    </>
  );
}
