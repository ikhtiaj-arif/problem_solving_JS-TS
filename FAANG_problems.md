# FAANG-Style Problem Solving Questions

A curated set of high-quality coding interview problems frequently asked in FAANG-level interviews. This guide includes problem explanations, input/output examples, constraints, and important patterns.

---

# String & Array Manipulation

# 1. Reverse a String Without Using Built-in reverse()

## Problem

Write a function to reverse a string manually without using built-in reverse methods.

### Example

```txt
Input:  "hello"
Output: "olleh"
```

## Input

* A string.

## Output

* Reversed string.

## Notes

* Use two pointers or loops.
* Important for understanding string manipulation.

---

# 2. Check if a String is a Palindrome

## Problem

Check whether a string is a palindrome while ignoring:

* Upper/lowercase differences
* Spaces
* Punctuation

### Example

```txt
Input:  "A man, a plan, a canal: Panama"
Output: true
```

## Input

* A string.

## Output

* Boolean (`true` or `false`).

## Notes

* Clean the string before comparison.
* Two-pointer technique is common.

---

# 3. Find the Longest Substring Without Repeating Characters

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

* Sliding Window + Hash Map is the optimal solution.

---

# 4. Count Character Frequency in a String

## Problem

Count how many times each character appears.

### Example

```txt
Input:  "banana"
Output:
{
  b: 1,
  a: 3,
  n: 2
}
```

## Input

* A string.

## Output

* An object/map of character frequencies.

## Notes

* Frequently asked HashMap problem.

---

# 5. Check if Two Strings are Anagrams

## Problem

Determine whether two strings contain the same characters in different order.

### Example

```txt
Input:
str1 = "listen"
str2 = "silent"

Output:
true
```

## Input

* Two strings.

## Output

* Boolean (`true` or `false`).

## Notes

* Sorting or frequency counting can solve it.

---

# 6. Capitalize the First Letter of Each Word

## Problem

Capitalize the first letter of every word in a sentence.

### Example

```txt
Input:  "hello world"
Output: "Hello World"
```

## Input

* A sentence string.

## Output

* Modified string.

---

# 7. Remove Duplicates From an Array

## Problem

Remove duplicate elements from an array.

### Example

```txt
Input:  [1,2,2,3,4,4]
Output: [1,2,3,4]
```

## Input

* An array.

## Output

* Array with unique values.

## Notes

* Solve using:

  * Set
  * Hash Map
  * Loops
  * filter()

---

# 8. Merge Two Sorted Arrays

## Problem

Merge two sorted arrays into a single sorted array without using `sort()`.

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

* One sorted merged array.

## Notes

* Two pointers technique.

---

# 9. Move All Zeros to the End

## Problem

Move all zero values to the end while maintaining the order of non-zero elements.

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

* Solve in O(n) time.

---

# 10. Find the Intersection of Two Arrays

## Problem

Return all common elements between two arrays.

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

---

# Numbers & Math Problems

# 11. Generate Fibonacci Sequence

## Problem

Generate the first `n` Fibonacci numbers.

### Example

```txt
Input:  6
Output: [0,1,1,2,3,5]
```

## Input

* Integer `n`.

## Output

* Fibonacci sequence array.

## Notes

* Can be solved iteratively or recursively.

---

# 12. Factorial Using Recursion

## Problem

Calculate factorial using recursion.

### Example

```txt
Input:  5
Output: 120
```

## Input

* Integer `n`.

## Output

* Factorial value.

## Notes

* Base case is critical.

---

# 13. Check Perfect Square Without Math.sqrt()

## Problem

Determine whether a number is a perfect square.

### Example

```txt
Input:  25
Output: true
```

## Input

* Integer.

## Output

* Boolean.

## Notes

* Binary Search is optimal.

---

# 14. Find the Second Largest Number

## Problem

Find the second largest value in an array.

### Example

```txt
Input:  [10,5,8,20]
Output: 10
```

## Input

* An array of integers.

## Output

* Second largest number.

## Notes

* Solve in one pass if possible.

---

# 15. Maximum Sum Subarray (Kadane’s Algorithm)

## Problem

Find the contiguous subarray with the largest sum.

### Example

```txt
Input:  [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
```

Explanation:
Subarray `[4,-1,2,1]` has the maximum sum.

## Input

* Integer array.

## Output

* Maximum sum.

## Notes

* Classic dynamic programming problem.

---

# Recursion & Advanced Array Problems

# 16. Flatten a Nested Array

## Problem

Flatten an array of arbitrary nesting depth.

### Example

```txt
Input:  [1,[2,[3,4]],5]
Output: [1,2,3,4,5]
```

## Input

* Nested array.

## Output

* Flat array.

## Notes

* Recursion is commonly used.

---

# 17. Generate All Subsets (Power Set)

## Problem

Generate all possible subsets of an array.

### Example

```txt
Input:  [1,2]
Output: [[], [1], [2], [1,2]]
```

## Input

* Array.

## Output

* Array containing all subsets.

## Notes

* Backtracking problem.

---

# 18. Stair Climbing Problem

## Problem

A person can climb either 1 or 2 steps at a time. Find the total number of ways to reach the top.

### Example

```txt
Input:  4
Output: 5
```

## Input

* Integer `n`.

## Output

* Number of possible ways.

## Notes

* Classic recursion + memoization problem.
* Similar to Fibonacci.

---

# 19. Find All Permutations of a String

## Problem

Generate all permutations of a string.

### Example

```txt
Input:  "abc"
Output:
[
  "abc",
  "acb",
  "bac",
  "bca",
  "cab",
  "cba"
]
```

## Input

* A string.

## Output

* Array of permutations.

## Notes

* Common recursion/backtracking question.

---

# 20. Trapping Rain Water Problem

## Problem

Given an elevation map, calculate how much water can be trapped.

### Example

```txt
Input:  [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
```

## Input

* Array of heights.

## Output

* Total trapped water.

## Notes

* Important FAANG-level two-pointer problem.

---

# Hashing / Frequency / Map Problems

# 21. First Non-Repeating Character

## Problem

Find the first character that appears only once.

### Example

```txt
Input:  "swiss"
Output: "w"
```

## Input

* String.

## Output

* Character.

---

# 22. Two Sum Problem

## Problem

Return indices of two numbers whose sum equals a target.

### Example

```txt
Input:
nums = [2,7,11,15]
target = 9

Output:
[0,1]
```

## Input

* Integer array.
* Target integer.

## Output

* Indices array.

## Notes

* Hash map solution is O(n).

---

# 23. Group Anagrams

## Problem

Group words that are anagrams.

### Example

```txt
Input:
["eat","tea","tan","ate","nat","bat"]

Output:
[
  ["eat","tea","ate"],
  ["tan","nat"],
  ["bat"]
]
```

## Input

* Array of strings.

## Output

* Grouped anagram arrays.

## Notes

* Sorting strings is commonly used.

---

# 24. Majority Element

## Problem

Find the element appearing more than `n/2` times.

### Example

```txt
Input:  [2,2,1,1,1,2,2]
Output: 2
```

## Input

* Integer array.

## Output

* Majority element.

## Notes

* Boyer-Moore Voting Algorithm is optimal.

---

# 25. Count Pairs With Target Sum

## Problem

Count all pairs whose sum equals a target.

### Example

```txt
Input:
arr = [1,5,7,-1,5]
target = 6

Output: 3
```

## Input

* Integer array.
* Target integer.

## Output

* Total number of valid pairs.

---

# Real-World / FAANG-Like Problems

# 26. Merge Overlapping Intervals

## Problem

Merge overlapping meeting intervals.

### Example

```txt
Input:
[[1,3],[2,6],[8,10],[15,18]]

Output:
[[1,6],[8,10],[15,18]]
```

## Input

* Array of interval arrays.

## Output

* Merged intervals.

## Notes

* Sorting + interval comparison.

---

# 27. Implement Custom map() or filter()

## Problem

Create your own implementation of JavaScript array methods.

### Example

```txt
Input:
[1,2,3]

map(x => x * 2)

Output:
[2,4,6]
```

## Input

* Array.
* Callback function.

## Output

* Modified array.

---

# 28. Serialize & Deserialize Nested Object

## Problem

Convert nested objects into strings and back.

### Example

```txt
Input:
{
  name: "Arif",
  skills: ["React", "Node"]
}

Output:
JSON string representation
```

## Input

* Nested object.

## Output

* Serialized string / parsed object.

## Notes

* Understand JSON.stringify() and JSON.parse().

---

# 29. Implement an LRU Cache

## Problem

Design an LRU (Least Recently Used) cache supporting:

* O(1) get
* O(1) put

### Example

```txt
Input:
capacity = 2

put(1,1)
put(2,2)
get(1)
put(3,3)

Output:
1
```

## Input

* Cache operations.

## Output

* Retrieved values.

## Notes

* Common FAANG system-design style coding problem.
* Uses HashMap + Doubly Linked List.

---

# 30. Largest Square Submatrix of 1s

## Problem

Find the largest square containing only `1`s in a binary matrix.

### Example

```txt
Input:
[
  [1,0,1,0,0],
  [1,0,1,1,1],
  [1,1,1,1,1],
  [1,0,0,1,0]
]

Output: 2
```

## Input

* Binary matrix.

## Output

* Size of largest square.

## Notes

* Dynamic Programming problem.

---

# Important Patterns for FAANG Interviews

| Pattern             | Common Problems          |
| ------------------- | ------------------------ |
| Sliding Window      | Longest substring        |
| Two Pointers        | Palindrome, merge arrays |
| Hash Maps           | Two Sum, frequency count |
| Dynamic Programming | Kadane, stair climbing   |
| Backtracking        | Permutations, subsets    |
| Greedy              | Interval merging         |
| Binary Search       | Perfect square           |
| Recursion           | Flatten array            |

---

# Interview Preparation Advice

## During Interviews

1. Clarify the problem.
2. Ask about constraints.
3. Explain brute force first.
4. Optimize step-by-step.
5. Discuss time & space complexity.
6. Test edge cases.

---

# Common Edge Cases

* Empty arrays
* Empty strings
* Single element arrays
* Duplicate values
* Very large inputs
* Negative numbers
* Null or undefined values

---

# Final Advice

FAANG interviews are less about memorizing answers and more about:

* Recognizing patterns
* Communicating clearly
* Writing clean code
* Optimizing solutions
* Handling edge cases

Mastering problem-solving patterns is more important than solving random problems blindly.
