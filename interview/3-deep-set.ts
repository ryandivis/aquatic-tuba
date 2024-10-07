/**
 * The deepSet function is designed to traverse or create a nested object 
 * structure based on a path provided as an array of keys. It assigns a value 
 * to the final property in the path, ensuring that any missing intermediate 
 * objects or arrays are created along the way. This is useful for cases where 
 * you dynamically build up deeply nested structures without knowing in 
 * advance if every level of the hierarchy exists.
 * @param path 
 * @param value 
 * @param obj 
 */

function deepSet<T>(path: (string | number)[], value: T, obj: any): void {
    
}

// Example usage:
const deepSetObject = {};

// Setting a deeply nested property
deepSet(['user', 'profile', 'name'], 'Alice', deepSetObject);
deepSet(['user', 'profile', 'contact', 'email'], 'alice@example.com', deepSetObject);
deepSet(['user', 'profile', 'contact', 'phone'], '123-456-7890', deepSetObject);

console.log(deepSetObject);
// Output: 
// {
//   user: {
//     profile: {
//       name: "Alice",
//       contact: {
//         email: "alice@example.com",
//         phone: "123-456-7890"
//       }
//     }
//   }
// }