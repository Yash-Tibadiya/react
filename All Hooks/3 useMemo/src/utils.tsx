export const initialItems = new Array(29_999_999).fill(0).map((_, i) => {
  return {
    id: i,
    isSelected: i === 29_999_998,
  };
});

// new Array(29_999_999): This creates a new array with 29,999,999 elements. The elements are initially empty.
// .fill(0): This fills the array with the value 0. Now, every element in the array is 0.
// .map((_, i) => { return { id: i, isSelected: i === 29_999_998 }; }): This maps over each element in the array and creates a new array of objects. The underscore (_) is used as a placeholder for the element, which we don't need in this case. Instead, we're interested in the index i.
// id: i: This sets the id property of each object to its index i.
// isSelected: i === 29_999_998: This sets the isSelected property to true only for the object with id 29,999,998. For all other objects, it will be false.
// In summary, the resulting array will have 29,999,999 objects, each with a unique id from 0 to 29,999,998, and only the object with id 29,999,998 will have isSelected set to true.
