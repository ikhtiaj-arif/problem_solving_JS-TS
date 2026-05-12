# Common Problem-Solving Questions for Coding Interviews

A curated collection of beginner-to-intermediate Data Structures & Algorithms problems with clear explanations, input/output examples, and constraints.

---

# 1. Reverse Words in a Sentence

## Problem

Write a function to reverse the order of words in a string while keeping the words themselves intact.

### Example

```txt
Input:  "Hello World"
Output: "World Hello"
```

## Input

* A string containing words separated by spaces.

## Output

* A string with the word order reversed.

## Notes

* Preserve the words exactly as they are.
* You may assume words are separated by a single space.

---

# 2. Find All Pairs With a Given Sum in an Array

## Problem

Given an array of numbers and a target sum, return all pairs whose sum equals the target.

### Example

```txt
Input:
arr = [1, 2, 3, 4, 5]
target = 6

Output:
[[1,5], [2,4]]
```

## Input

* An array of integers.
* A target integer.

## Output

* An array containing all valid pairs.

## Notes

* Avoid duplicate pairs.
* Hash maps are commonly used for optimization.

---

# 3. Check if an Array is a Palindrome

## Problem

Determine whether an array reads the same forward and backward.

### Example

```txt
Input:  [1, 2, 3, 2, 1]
Output: true
```

```txt
Input:  [1, 2, 3]
Output: false
```

## Input

* An array of values.

## Output

* Boolean (`true` or `false`).

---

# 4. Rotate a Matrix 90 Degrees Clockwise

## Problem

Given an `n x n` matrix, rotate it 90 degrees clockwise.

### Example

```txt
Input:
[
  [1,2,3],
  [4,5,6],
  [7,8,9]
]

Output:
[
  [7,4,1],
  [8,5,2],
  [9,6,3]
]
```

## Input

* A 2D square matrix.

## Output

* The rotated matrix.

## Notes

* Try solving it in-place.
* Common technique: transpose + reverse rows.

---

# 5. Remove Duplicates From a String

## Problem

Remove duplicate characters from a string while preserving the original order.

### Example

```txt
Input:  "programming"
Output: "progamin"
```

## Input

* A string.

## Output

* A new string without duplicate characters.

---

# 6. Find the Longest Increasing Subsequence

## Problem

Given an array of numbers, find the length of the longest strictly increasing subsequence.

### Example

```txt
Input:  [10,9,2,5,3,7,101,18]
Output: 4
```

Explanation:
The longest increasing subsequence is `[2,3,7,101]`.

## Input

* An array of integers.

## Output

* An integer representing the LIS length.

## Notes

* Dynamic Programming is a common solution.
* Optimized solution exists using Binary Search.

---

# 7. Count the Number of Vowels in a String

## Problem

Count how many vowels (`a, e, i, o, u`) exist in a string.

### Example

```txt
Input:  "JavaScript"
Output: 3
```

## Input

* A string.

## Output

* Total vowel count.

## Notes

* Handle uppercase and lowercase characters.

---

# 8. Find the Majority Element in an Array

## Problem

Find the element that appears more than `n/2` times.

### Example

```txt
Input:  [2,2,1,1,1,2,2]
Output: 2
```

## Input

* An array of integers.

## Output

* The majority element.

## Notes

* Boyer-Moore Voting Algorithm is optimal.
* Time Complexity target: `O(n)`.

---

# 9. Rotate a String by k Positions

## Problem

Rotate a string to the right by `k` positions.

### Example

```txt
Input:
str = "hello"
k = 2

Output:
"lohel"
```

## Input

* A string.
* An integer `k`.

## Output

* Rotated string.

## Notes

* Use modulo to handle large `k` values.

---

# 10. Find Missing Elements in a Consecutive Sequence

## Problem

Given an unsorted array that should contain consecutive numbers, return all missing values.

### Example

```txt
Input:  [1,2,4,6]
Output: [3,5]
```

## Input

* An unsorted array of integers.

## Output

* An array of missing numbers.

---

# 11. Rotate an Array by k Positions

## Problem

Rotate an array to the right by `k` positions.

### Example

```txt
Input:
arr = [1,2,3,4,5]
k = 2

Output:
[4,5,1,2,3]
```

## Input

* An array.
* An integer `k`.

## Output

* Rotated array.

## Notes

* Avoid using built-in rotate methods.
* Reverse-array technique is popular.

---

# 12. Find the Missing Number in an Array

## Problem

An array contains numbers from `1` to `n` with one missing value. Find the missing number.

### Example

```txt
Input:  [1,2,4,5]
Output: 3
```

## Input

* An array of integers.

## Output

* Missing number.

## Notes

* Formula approach:

```txt
expectedSum = n * (n + 1) / 2
```

---

# 13. Merge Two Sorted Arrays

## Problem

Merge two sorted arrays into one sorted array without using `sort()`.

### Example

```txt
Input:
arr1 = [1,3,5]
arr2 = [2,4,6]

Output:
[1,2,3,4,5,6]
```

## Input

* Two sorted arrays.

## Output

* One merged sorted array.

## Notes

* Use the two-pointer technique.

---

# 14. Find the Longest Substring Without Repeating Characters

## Problem

Find the length of the longest substring without duplicate characters.

### Example

```txt
Input:  "abcabcbb"
Output: 3
```

Explanation:
The longest substring is `"abc"`.

## Input

* A string.

## Output

* Length of the longest unique substring.

## Notes

* Sliding Window is the optimal approach.

---

# 15. Check if Two Arrays Are Equal

## Problem

Check whether two arrays contain the same elements regardless of order.

### Example

```txt
Input:
arr1 = [1,2,3]
arr2 = [3,2,1]

Output:
true
```

## Input

* Two arrays.

## Output

* Boolean (`true` or `false`).

## Notes

* Frequency counting using maps is common.

---

# 16. Move All Zeros to the End of an Array

## Problem

Move all zeros to the end while maintaining the order of non-zero elements.

### Example

```txt
Input:  [0,1,0,3,12]
Output: [1,3,12,0,0]
```

## Input

* An array of integers.

## Output

* Modified array.

## Notes

* Aim for `O(n)` time complexity.

---

# 17. Implement Your Own map() Function

## Problem

Create a custom implementation of JavaScript's `Array.prototype.map()`.

### Example

```txt
Input:
arr = [1,2,3]
callback = x => x * 2

Output:
[2,4,6]
```

## Input

* An array.
* A callback function.

## Output

* A transformed array.

## Notes

* Learn how higher-order functions work internally.

---

# 18. Find the Intersection of Two Arrays

## Problem

Return the common elements between two arrays.

### Example

```txt
Input:
arr1 = [1,2,3,4]
arr2 = [3,4,5,6]

Output:
[3,4]
```

## Input

* Two arrays.

## Output

* Array of common elements.

## Notes

* Sets or hash maps improve efficiency.

---

# 19. Find the First Non-Repeating Character in a String

## Problem

Return the first character that appears only once.

### Example

```txt
Input:  "swiss"
Output: "w"
```

## Input

* A string.

## Output

* First unique character.

## Notes

* Frequency maps are useful.

---

# 20. Check if a Number is a Perfect Square

## Problem

Determine whether a number is a perfect square without using `Math.sqrt()`.

### Example

```txt
Input:  25
Output: true
```

```txt
Input:  26
Output: false
```

## Input

* An integer.

## Output

* Boolean (`true` or `false`).

## Notes

* Binary Search is the most optimized solution.
* Loop-based approaches are also acceptable.

---

# Bonus Problems

## 21. Two Sum

Find two numbers whose sum equals a target.

## 22. Valid Parentheses

Check whether brackets are properly balanced.

## 23. Binary Search

Find an element efficiently in a sorted array.

## 24. Maximum Subarray Sum

Find the contiguous subarray with the maximum sum.

## 25. Group Anagrams

Group strings that are anagrams of each other.

---

# Recommended Topics to Practice Alongside

* Arrays
* Strings
* Hash Maps
* Sliding Window
* Two Pointers
* Recursion
* Dynamic Programming
* Binary Search
* Sorting Algorithms
* Greedy Algorithms
* Stacks & Queues
* Trees & Graphs

---

# Suggested Practice Strategy

## Beginner

* Reverse words
* Count vowels
* Palindrome checks
* Move zeros
* Rotate strings

## Intermediate

* Two sum
* Longest substring without repeating characters
* Merge sorted arrays
* Matrix rotation
* Majority element

## Advanced

* Longest Increasing Subsequence
* Dynamic Programming problems
* Graph and tree traversal

---

# Time Complexity Cheat Sheet

| Operation       | Ideal Complexity |
| --------------- | ---------------- |
| Array Traversal | O(n)             |
| Hash Map Lookup | O(1)             |
| Binary Search   | O(log n)         |
| Nested Loops    | O(n²)            |
| Merge Sort      | O(n log n)       |

---

# Final Advice

When solving DSA problems:

1. Understand the problem clearly.
2. Identify input and output.
3. Think about brute-force first.
4. Optimize step by step.
5. Practice explaining your approach aloud.
6. Focus on patterns instead of memorizing solutions.

Consistent practice matters more than solving hundreds of random problems.
