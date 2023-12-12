// import tableModel from "../Model/tableModel.js";

// const checkAndUpdateDocument = async(req, res, next) => {
//   const id = req.cookies.session;

//   if (id) {
//     const result = await tableModel.findOneAndUpdate(
//       { _id: id },
//       { $set: { used: true } },
//       { new: true }
//     );

//     if (result) {
//       console.log('Cookie diatur dan dokumen diperbarui!');
//     } else {
//       console.log('Dokumen tidak ditemukan.');
//     }
//   } else {
//     console.log('Cookie tidak ditemukan atau sudah berakhir.');
//   }

//   next(); 
// }

// export default checkAndUpdateDocument;
