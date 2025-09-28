// import React, { useState } from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

// const ScheduleModal = ({ isOpen, onClose }) => {
//   const [selectedDate, setSelectedDate] = useState(new Date());

//   if (!isOpen) return null;

//   const handleConfirm = () => {
//     alert(`You selected: ${selectedDate.toLocaleString()}`);
//     onClose();
//   };

//   return (
//     <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
//       <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6 relative">
//         {/* Close Button */}
//         <button
//           onClick={onClose}
//           className="absolute top-3 right-3 text-gray-500 hover:text-black"
//         >
//           ✕
//         </button>

//         <h2 className="text-xl font-semibold text-[#997736] mb-4 text-center">
//           Schedule Your Property Viewing
//         </h2>

//         {/* Calendar */}
//         <DatePicker
//           selected={selectedDate}
//           onChange={(date) => setSelectedDate(date)}
//           showTimeSelect
//           timeIntervals={30}
//           dateFormat="MMMM d, yyyy h:mm aa"
//           minDate={new Date()}
//           className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#997736]"
//           inline={false}
//         />

//         {/* Confirm Button */}
//         <button
//           onClick={handleConfirm}
//           className="w-full mt-6 bg-[#997736] text-white font-semibold py-2 px-4 rounded-lg hover:bg-[#b38e5d] transition-colors"
//         >
//           Confirm Appointment
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ScheduleModal;
