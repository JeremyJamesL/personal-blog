// const EleventyFetch = require("@11ty/eleventy-fetch");
// // const bearer =
// //   "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2ZXJzaW9uIjoiNiIsImlkIjoxMTQ5NCwibG9nZ2VkSW4iOnRydWUsInN1YiI6IjExNDk0IiwiaWF0IjoxNzE1OTQ2NDY2LCJleHAiOjE3NDczOTYzNjYsImh0dHBzOi8vaGFzdXJhLmlvL2p3dC9jbGFpbXMiOnsieC1oYXN1cmEtYWxsb3dlZC1yb2xlcyI6WyJ1c2VyIl0sIngtaGFzdXJhLWRlZmF1bHQtcm9sZSI6InVzZXIiLCJ4LWhhc3VyYS1yb2xlIjoidXNlciIsIlgtaGFzdXJhLXVzZXItaWQiOiIxMTQ5NCJ9fQ.i0lvNJ5PBcHJio65xX6MOCMhJfLcGc4o9Hlj4jM5zNE";

// module.exports = async function () {
//   const url = "https://api.hardcover.app/v1/graphql";

//   return EleventyFetch(url, {
//     duration: "1d",
//     type: "json",
//     fetchOptions: {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         authorization:
//           "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2ZXJzaW9uIjoiNiIsImlkIjoxMTQ5NCwibG9nZ2VkSW4iOnRydWUsInN1YiI6IjExNDk0IiwiaWF0IjoxNzE1OTQ2NDY2LCJleHAiOjE3NDczOTYzNjYsImh0dHBzOi8vaGFzdXJhLmlvL2p3dC9jbGFpbXMiOnsieC1oYXN1cmEtYWxsb3dlZC1yb2xlcyI6WyJ1c2VyIl0sIngtaGFzdXJhLWRlZmF1bHQtcm9sZSI6InVzZXIiLCJ4LWhhc3VyYS1yb2xlIjoidXNlciIsIlgtaGFzdXJhLXVzZXItaWQiOiIxMTQ5NCJ9fQ.i0lvNJ5PBcHJio65xX6MOCMhJfLcGc4o9Hlj4jM5zNE",
//       },
//       body: JSON.stringify({
//         query: `{
//           justRead: user_books(where: {user_id: {_eq: 11494}, status_id: {_eq: 3}}) {
//             book {
//               id
//               title
//               cached_image
//             }
//           }
//         currentlyReading: user_books(where: {user_id: {_eq: 11494}, status_id: {_eq: 1}}) {
//             book {
//               id
//               title
//               cached_image
//             }
//           }
//         } `,
//       }),
//     },
//   });
// };
