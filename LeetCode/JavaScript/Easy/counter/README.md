# Counter

> **LeetCode** · `JavaScript` · **Easy**

| Field | Value |
| :--- | :--- |
| Platform | LeetCode |
| Difficulty | Easy |
| Language | JavaScript |
| Problem | [Open on LeetCode](https://leetcode.com/problems/counter/) |
| Runtime | 35 ms (beats 91.05%) |
| Memory | 53.9 MB (beats 22.74%) |
| Test cases | 23 / 23 |
| Verdict | Accepted |
| Submission | `2119648388` |
| Solved on | 2026-08-25 12:52 UTC |

## Problem

Given an integer `n`, return a `counter` function. This `counter` function initially returns `n` and then returns 1 more than the previous value every subsequent time it is called (`n`, `n + 1`, `n + 2`, etc).

**Example 1:**

```
Input:
n = 10
["call","call","call"]
Output: [10,11,12]
Explanation:
counter() = 10 // The first time counter() is called, it returns n.
counter() = 11 // Returns 1 more than the previous time.
counter() = 12 // Returns 1 more than the previous time.
```

**Example 2:**

```
Input:
n = -2
["call","call","call","call","call"]
Output: [-2,-1,0,1,2]
Explanation: counter() initially returns -2. Then increases after each sebsequent call.
```

**Constraints:**

- `-1000 <= n <= 1000`
- `0 <= calls.length <= 1000`
- `calls[i] === "call"`

## Solution

[`solution.js`](./solution.js)

---

<sub>Pushed automatically by <b>CP-to-GitHub Sync</b>.</sub>
