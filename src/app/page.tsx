import { Suspense } from "react";
import List from "@/components/List";
export default async function page() {
  // const data = await getProducts();
  // console.log(data);

  return (
    <div className="pt-16">
      <h1>Data fetching</h1>
      <Suspense fallback={<p>loading...</p>}>
        <List />
      </Suspense>
    </div>
  );
}
// const wixClient = useWixContext();
// useEffect(
//   function () {
//     const getProducts = async () => {
//       const res = await wixClient.products.queryProducts().find();
//       console.log(res);
//     };
//     getProducts();
//   },
//   [wixClient]
// );
// const [{ products }, data] = await Promise.all([
//   getProductsCategoriesList(),
//   getCategoriesList(),
// ]);
// const categories: ProductCategory[] = data
//   .map((x: string) =>
//     products.filter((y: ProductCategory) => y.category === x)
//   )
//   .map((x: Product) => {
//     return {
//       category: x?.at(0)?.category,
//       thumbnail: x?.at(0)?.thumbnail,
//       results: x.length,
//     };
//   });

{
  /* <div className="h-screen bg-zinc-300"></div>
      <div>
        <h1>Shop our top categories</h1>
        <div className="flex flex-wrap gap-3">
          {categories.map((cat) => (
            <Link
              href={`/list?category=${cat.category}`}
              className="flex flex-col items-center bg-zinc-200 rounded-lg py-2 px-2"
              key={cat.category}
            >
              <Image
                width={100}
                height={100}
                alt={cat.category}
                src={cat.thumbnail}
              />
              <h1>{cat.category}</h1>
            </Link>
          ))}
        </div>
      </div> */
}
