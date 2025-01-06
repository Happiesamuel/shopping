// "use client";
// import Image from "next/image";
// import React, { useState } from "react";

// export default function ProductImages({ product }) {
//   const [src, setSrc] = useState(product?.images?.at(0) || "");
//   return (
//     <div className="flex w-[50%]">
//       <div className="flex flex-col gap-2">
//         {product.images.map((x) => (
//           <div
//             key={x}
//             onClick={() => setSrc(x)}
//             className="relative aspect-square flex items-center justify-center rounded-xl bg-zinc-200"
//           >
//             <Image
//               quality={5}
//               src={x || ""}
//               fill
//               alt="img"
//               unoptimized
//               className="h-[200px] w-[200px] object-cover"
//             />
//             <p>{product.title}</p>
//           </div>
//         ))}
//       </div>
//       <div className="w-full h-[500px] relative aspect-square">
//         <Image
//           quality={5}
//           src={src}
//           alt="big-img"
//           fill
//           unoptimized
//           className="object-cover"
//         />
//       </div>
//     </div>
//   );
// }

import React from "react";

const ProductImages = () => {
  return <div>ProductImages</div>;
};

export default ProductImages;
