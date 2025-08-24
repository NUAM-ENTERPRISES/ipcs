import product from "../assets/product.png";
import product1 from "../assets/product1.png";
import product3 from "../assets/product3.png";

const products = [
  {
    id: "EXTRACTOR - GLUE PAD FLY CATCHER MACHINE",
    title: "EXTRACTOR - GLUE PAD FLY CATCHER MACHINE",
    desc: "High-efficiency glue pad fly catcher machine for commercial and residential use. Non-toxic and eco-friendly.",
    features: [
      "Flies approach the machine : Flies are attracted to the UV light and start flying towards it.",
      "Fly contact with the glue pad : As the flies get closer to the UV light source, they land on the sticky glue pad inside the machine. The glue on the pad is non-toxic and designed to be extremely sticky.",
      "Trapping flies : Once the flies land on the glue pad, they become stuck",
    ],
    mainImage: product,
    details: [
      {
        heading: "Fly Kills without electrical shock",
        paragraphs: [
          "The EXTRACTOR - GLUE PAD FLY CATCHER MACHINE is designed to attract and trap flies without the use of harmful chemicals or electrical shocks. It is safe for use in homes, restaurants, and other indoor spaces.",
        ],
        bulletPoints: [
          "Premium Design & Metal body",
          "No Sound, No smell",
          "Coverage: Downside coverage, both left & right side ways coverage",
          "SIZE 1.5 feet: L 20.2 X H 13 X W 4.3",
          "Lamp: 15 w UV-A Tube * 2",
          "Placement: Wall mount",
        ],
        image: product,
      },
      {
        heading: "Technical Specifications",
        paragraphs: [""],
        bulletPoints: [
          "Non Toxic",
          "Power socket: 3 pin 5 AMP",
          "Watts: 30 Watts",
          "Warranty: 1 year exclude manufacturing defects & tube lights",
          "Environment Friendly",
          "Recommend for food processing areas, Hotel, Restaurants, Food Packing area, Receptions, Hospital, Warehouses",
        ],
        image: product1,
      },
    ],
    galleryImages: [product, product1],
  },
  {
    id: "EXTERMINATOR - ELECTRIC SHOCK FLY KILLER MACHINE",
    title: "ELECTRIC SHOCK FLY KILLER MACHINE",
    desc: "Once the insects are towards the UV light source,they come into contact with an electrified grid or metal plate,which delivers a high- voltage shock to the flies,ultimately killing them.",
    features: [
      "Flies approach the machine : Flies are attracted to the UV light and start flying towards it.",
      "Fly contact with the electrified grid : As the flies get closer to the UV light source, they come into contact with an electrified grid or metal plate.",
      "Electrocution : The high-voltage shock delivered by the grid kills the flies instantly.",
    ],
    mainImage: product3,
    details: [
      {
        heading: "Fly Kills with electrical shock",
        paragraphs: [
          "The ELECTRIC SHOCK FLY KILLER MACHINE is designed to attract and kill flies using UV light and an electrified grid. It is effective for use in homes, restaurants, and other indoor spaces.",
        ],
        bulletPoints: [
          "Metal body",
          "SIZE 2 feet  : L 25.3  X H 13.8  X W 4",
          "Lamp : 18 w UV-A Tube  * 2",
          "Placement : Floor standing & Wall mount",
          "Tray : Removable Tray",
          "Power socket : 3 pin 5 AMP",
          "Watts: 40 Watts",
          "Warranty :  1 year exclude manufacturing defects & tube lights",
          "Recommend for Hotel,Restaurants,Supermarkets,STP Plant,Hospital,Warehouses,etc..",
        ],
        image: product3,
      },
    ],
    galleryImages: [product3],
  },
];

export default products;
