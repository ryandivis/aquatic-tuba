/**
 * Create a deep-get function that accepts an array of properties to traverse, 
 * a default value if the path is not found, and an input object.
 * @param path 
 * @param defaultValue 
 * @param obj 
 * @returns 
 */

function deepGet<T>(path: (string | number)[], defaultValue: T, obj: any): T {
}

// Example usage:
const inputObject = {
    user: {
        profile: {
            name: "Alice",
            contact: {
                email: "alice@example.com"
            }
        }
    }
};

console.log(deepGet(['user', 'profile', 'name'], 'Unknown', inputObject)); // "Alice"
console.log(deepGet(['user', 'profile', 'contact', 'phone'], 'No phone', inputObject)); // "No phone"
console.log(deepGet(['user', 'address'], 'No address', inputObject)); // "No address"