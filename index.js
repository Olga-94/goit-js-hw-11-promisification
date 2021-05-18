import './task-js/task-1';
import './task-js/task-2';
import './task-js/task-3';


// Перепиши функцию toggleUserState() так, чтобы она не использовала callback - функцию callback,
// а принимала всего два параметра allUsers и userName и возвращала промис.

// const users = [
//   { name: 'Mango', active: true },
//   { name: 'Poly', active: false },
//   { name: 'Ajax', active: true },
//   { name: 'Lux', active: false },
// ];

// const toggleUserState = (allUsers, userName) => {
//   return new Promise(resolve => {
//     const updatedUsers = allUsers.map(user =>
//       user.name === userName ? { ...user, active: !user.active } : user,
//     );

//     resolve(updatedUsers);
//   });
// };
// const logger = updatedUsers => console.table(updatedUsers);

// refs.task2.addEventListener('click', e => {
//   toggleUserState(users, 'Mango').then(logger);
//   toggleUserState(users, 'Lux').then(logger);
// });

// // ==========================================================================================================================>>>>>>

// // Перепиши функцию makeTransaction() так, чтобы она не использовала
// // callback - функции onSuccess и onError, а принимала всего один параметр transaction и возвращала промис.

// const randomIntegerFromInterval = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// };

// const makeTransaction = transaction => {
//   const delay = randomIntegerFromInterval(200, 500);

//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const canProcess = Math.random() > 0.3;

//       if (canProcess) {
//         resolve({ transaction: transaction.id, delay: delay });
//       } else {
//         reject(transaction.id);
//       }
//     }, delay);
//   });
// };

// const logSuccess = ({ transaction, delay }) => {
//   console.log(`Transaction ${transaction} processed in ${delay}ms`);
// };

// const logError = id => {
//   console.warn(`Error processing transaction ${id}. Please try again later.`);
// };

// refs.task3.addEventListener('click', e => {
//   console.log(
//     makeTransaction({ id: 70, amount: 150 }).then(logSuccess).catch(logError),
//   );

//   console.log(
//     makeTransaction({ id: 71, amount: 230 }).then(logSuccess).catch(logError),
//   );

//   console.log(
//     makeTransaction({ id: 72, amount: 75 }).then(logSuccess).catch(logError),
//   );

//   console.log(
//     makeTransaction({ id: 73, amount: 100 }).then(logSuccess).catch(logError),
//   );
// });