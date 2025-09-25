import React from "react";

const units = [
  { type: "3 BHK", area: "1700 Sq. Ft.", price: "₹20 Cr*", img: "/assets/Assets/fp.jpg" },
  { type: "4 BHK", area: "1700 Sq. Ft.", price: "₹On Request", img: "/assets/Assets/fp.jpg" },
  { type: "5 BHK", area: "2600 Sq. Ft.", price: "₹On Request", img: "/assets/Assets/fp.jpg" },
];

export default function UnitPlans() {
  return (
    <section id="pricing" className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold mb-8 text-center">Proposed Area & Pricing</h2>
        <div className="glide" id="up-slider">
          <div className="glide__track" data-glide-el="track">
            <ul className="glide__slides">
              {units.map((u, i) => (
                <li key={i} className="glide__slide">
                  <div className="bg-white rounded-lg shadow overflow-hidden">
                    <img src={u.img} alt={u.type} className="w-full" />
                    <div className="p-4 text-center">
                      <h3 className="text-xl font-bold">{u.type}</h3>
                      <p className="text-gray-600">{u.area}</p>
                      <p className="text-lg font-semibold mt-2">{u.price}</p>
                      <button className="mt-3 px-4 py-2 border border-yellow-600 text-yellow-600 rounded hover:bg-yellow-600 hover:text-white transition">
                        Costing Details
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
