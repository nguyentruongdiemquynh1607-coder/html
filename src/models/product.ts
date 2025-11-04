// src/product.ts
export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
}

export const products: Product[] = [
  {
    id: 1,
    title: "2025 T1 Worlds Uniform Jacket",
    price: 153.0,
    description:
      "T1 team uniform jacket. Owning them is an honor when you are a die-hard fan of T1.",
    category: "men's clothing",
    image:
      "https://cafe24img.poxo.com/t1shopgg/web/product/small/202510/7c5479ad91536fd15c35a32f84272bcb.png",
    rating: {
      rate: 5.0,
      count: 1000,
    },
  },
  {
    id: 2,
    title: "2025 T1 Worlds Uniform Jersey ",
    price: 113.0,
    description:
      "T1 team uniform t-shirt. With super cool design and high quality material, you will feel comfortable and pleasant when wearing.",
    category: "men's clothing",
    image:
      "https://cafe24img.poxo.com/t1shopgg/web/product/big/202510/33f8920488cd0868cd0149d3e307ed53.png",
    rating: {
      rate: 5.0,
      count: 259,
    },
  },
  {
    id: 3,
    title: "2025 T1 2nd Uniform Pants",
    price: 79.99,
    description: "The product is suitable for t-shirts and jackets",
    category: "men's clothing",
    image:
      "https://cafe24img.poxo.com/t1shopgg/web/product/big/202506/d8863b4d1b9add3d134cfc3ce4000892.jpg",
    rating: {
      rate: 4.7,
      count: 500,
    },
  },
  {
    id: 4,
    title: "2025 T1 2nd Uniform Jacket",
    price: 112.99,
    description:
      "T1 domestic competition uniform. Breathable and comfortable material",
    category: "men's clothing",
    image:
      "https://cafe24img.poxo.com/t1shopgg/web/product/big/202506/124e8e5b86715e3595e10b2b242e0d58.jpg",
    rating: {
      rate: 4.1,
      count: 430,
    },
  },
  {
    id: 5,
    title: "2024 T1 World Champions Uniform Jersey",
    price: 158.99,
    description: "T1 2024 World Championship T-Shirt. Unquestionable quality",
    category: "unisex's clothing",
    image:
      "https://cafe24img.poxo.com/t1shopgg/web/product/small/202505/10c58fe1d3b2da5a7dc3160de880ec93.jpg",
    rating: {
      rate: 5.0,
      count: 1000,
    },
  },
  {
    id: 6,
    title: "2024 T1 World Champions Uniform Jacket",
    price: 168.99,
    description: "The 2024 World Champion's Jacket. The quality is undeniable.",
    category: "unisex's clothing",
    image:
      "https://cafe24img.poxo.com/t1shopgg/web/product/big/202505/997b9e6297cd44c25fd27e2a5a862390.jpg",
    rating: {
      rate: 5.0,
      count: 1500,
    },
  },
  {
    id: 7,
    title: "2025 Happy Keria Day Pajama Set",
    price: 69.9,
    description: "Cute pajamas for Keria's birthday",
    category: "unisex's clothing",
    image:
      "https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/559410452_793894700059857_7268749519247368544_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=j5fAV3a4llIQ7kNvwGsmNP1&_nc_oc=AdlGoBbNEfWLHbnCGtC_K4ygaLBXSKJjIBgViQBOYpCyded5L1HQZ1odXK78Orv3Axqlyh4ckfmbD_1XQOqzDctP&_nc_zt=23&_nc_ht=scontent.fsgn2-7.fna&_nc_gid=qm0r4KFHn1jhCGVzolTvbQ&oh=00_AfhadpN8AngiAz1hOmoNP7F7CiWED-B6YcRZjWwDDwAYlg&oe=690D2C72",
    rating: {
      rate: 4.8,
      count: 400,
    },
  },
  {
    id: 8,
    title: "2025 Happy Gumayusi Day Pajama Set",
    price: 69.99,
    description: "Cute pajamas for Gumayusi's birthday",
    category: "unisex's clothing",
    image:
      "https://scontent.fsgn2-10.fna.fbcdn.net/v/t39.30808-6/482072150_122210569562207337_4310761871000674003_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Twd5jhZ7YTwQ7kNvwEovJIl&_nc_oc=Admgt_5Z6upfjYd-FAp-0Q_ooQB20l6Bi2h2wfITtCmmsW_7F-e8bBqdTSaCmywhkkszrzp5MZBmiY9jD-rZJ1tA&_nc_zt=23&_nc_ht=scontent.fsgn2-10.fna&_nc_gid=x_COShC219YYMKkyyuCdtw&oh=00_AfjKPpB8AfPlrf2Q4HHr4F_faF1i9PfOVPTWjJ039jltOQ&oe=690D12FF",
    rating: {
      rate: 4.9,
      count: 100,
    },
  },
  {
    id: 9,
    title: "2025 Happy Faker Day Pajama Set",
    price: 65.55,
    description: "Cool pajamas for Faker's birthday",
    category: "unisex's clothing",
    image:
      "https://scontent.fsgn2-8.fna.fbcdn.net/v/t39.30808-6/495461089_122223983396207337_6621321705270200685_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=3C-c7YxordoQ7kNvwG8rYwp&_nc_oc=Adl6e0h7lV6S5r6M8VePBKoGNx-ejXyj55EoDegQ12K46HSV9KxkMgv-vBJ4hUzCfrKiFjtry8yFwCBAV_MPlRG4&_nc_zt=23&_nc_ht=scontent.fsgn2-8.fna&_nc_gid=iQGvJID14uimK6ANuwBuKQ&oh=00_AfiVlCAS5d59aagfLkaGAYTNxsnNGhi-dMA3v-QtaCT3ng&oe=690D124D",
    rating: {
      rate: 4.6,
      count: 203,
    },
  },
  {
    id: 10,
    title: "2025 Happy Doran Day Pajama Set",
    price: 64.89,
    description: "Cute pajamas for Doran's birthday",
    category: "unisex's clothing",
    image:
      "https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/518865161_726056976843630_4666973936003790295_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=67m7eGG_Q4sQ7kNvwHwF_pe&_nc_oc=AdnLCppBZ1_Fv5STheOZder1E3iI0aKyTPj784JMLHjkaNThRmpTnpbmP0ZNQholHyVPnxKbrT_d6poxEptGIdTO&_nc_zt=23&_nc_ht=scontent.fsgn2-6.fna&_nc_gid=CaU0x9J37fq6fecaEvNWzQ&oh=00_Afiw2u9I5XzmZOgI9--GcYfqVlCBvibAx1CYNHdXf7HDVQ&oe=690D26B3",
    rating: {
      rate: 4.5,
      count: 470,
    },
  },
  {
    id: 11,
    title: "T1 Animal Friends Keycap Keychain",
    price: 28.99,
    description: "Lovely keychain, stress relief",
    category: "Keychain",
    image:
      "https://cafe24img.poxo.com/t1shopgg/web/product/big/202510/86ddbbbfb66b975b04d7ba80e87cd8fc.jpg",
    rating: {
      rate: 4.8,
      count: 319,
    },
  },
  {
    id: 12,
    title: "T1 ATI Plush",
    price: 26.85,
    description: "T1's fire phoenix mascot",
    category: "plusie",
    image:
      "https://cafe24img.poxo.com/t1shopgg/web/product/big/202510/bf59b96b9bd1a3c481453b16fa3c1b2e.jpg",
    rating: {
      rate: 4.8,
      count: 400,
    },
  },
];
