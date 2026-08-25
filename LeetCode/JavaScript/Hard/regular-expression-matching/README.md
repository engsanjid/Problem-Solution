# Regular Expression Matching

> **LeetCode** · `JavaScript` · **Hard**

| Field | Value |
| :--- | :--- |
| Platform | LeetCode |
| Difficulty | Hard |
| Language | JavaScript |
| Problem | [Open on LeetCode](https://leetcode.com/problems/regular-expression-matching/) |
| Runtime | 6 ms (beats 69.18%) |
| Memory | 58.2 MB (beats 18.13%) |
| Test cases | 354 / 354 |
| Verdict | Accepted |
| Submission | `2119644917` |
| Tags | `String`, `Dynamic Programming`, `Recursion` |
| Solved on | 2026-08-25 12:49 UTC |

## Problem

Given an input string `s` and a pattern `p`, implement regular expression matching with support for `'.'` and `'*'` where:

- `'.'` Matches any single character.​​​​
- `'*'` Matches zero or more of the preceding element.

Return a boolean indicating whether the matching covers the entire input string (not partial).

**Example 1:**

```
Input: s = "aa", p = "a"
Output: false
Explanation: "a" does not match the entire string "aa".
```

**Example 2:**

```
Input: s = "aa", p = "a*"
Output: true
Explanation: '*' means zero or more of the preceding element, 'a'. Therefore, by repeating 'a' once, it becomes "aa".
```

**Example 3:**

```
Input: s = "ab", p = ".*"
Output: true
Explanation: ".*" means "zero or more (*) of any character (.)".
```

**Constraints:**

- `1 <= s.length <= 20`
- `1 <= p.length <= 20`
- `s` contains only lowercase English letters.
- `p` contains only lowercase English letters, `'.'`, and `'*'`.
- It is guaranteed for each appearance of the character `'*'`, there will be a previous valid character to match.

## Solution

[`solution.js`](./solution.js)

---

<sub>Pushed automatically by <b>CP-to-GitHub Sync</b>.</sub>
