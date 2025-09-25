// import React from "react";
// import { motion } from "framer-motion";

// const WhyInvest = () => {
//   const items = [
//     { icon: "../Assets/w1.jpg", title: "High ROI Potential" },
//     { icon: "../Assets/w2.jpg", title: "Special Launch Offers" },
//     { icon: "../Assets/w3.jpg", title: "38+ Years Of Excellence" },
//     { icon: "../Assets/w4.jpg", title: "300+ Projects Completed" },
//     { icon: "../Assets/w5.jpg", title: "Reside Among The Billionaire Elite" },
//   ];

//   return (
//     <section
//       className="relative h-[100vh] flex flex-col items-center justify-center bg-fixed bg-center bg-cover"
//       style={{ backgroundImage: "url('/assets/bg/project-bg.jpg')" }} // <-- tamaro bg image
//     >
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black"></div>

//       {/* Content */}
//       <div className="relative w-full px-4 text-center">
//         <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#997736] mb-10">
//           WHY TO INVEST IN THIS PROJECT ?
//         </h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 max-w-6xl mx-auto">
//           {items.map((item, i) => (
//             <motion.div
//               key={i}
//               className="flex flex-col items-center text-white space-y-3"
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: i * 0.2 }}
//               viewport={{ once: true }}
//             >
//               <img
//                 src={item.icon}
//                 alt={item.title}
//                 className="w-16 h-16 object-contain"
//               />
//               <p className="text-lg font-medium">{item.title}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhyInvest;
