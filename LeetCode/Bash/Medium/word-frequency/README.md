# Word Frequency

> **LeetCode** · `Bash` · **Medium**

| Field | Value |
| :--- | :--- |
| Platform | LeetCode |
| Difficulty | Medium |
| Language | Bash |
| Problem | [Open on LeetCode](https://leetcode.com/problems/word-frequency/) |
| Runtime | 83 ms (beats 25.64%) |
| Memory | 3.8 MB (beats 94.67%) |
| Test cases | 14 / 14 |
| Verdict | Accepted |
| Submission | `2119648112` |
| Tags | `Shell` |
| Solved on | 2026-08-25 12:52 UTC |

## Problem

Write a bash script to calculate the frequency of each word in a text file `words.txt`.

For simplicity sake, you may assume:

- `words.txt` contains only lowercase characters and space `' '` characters.
- Each word must consist of lowercase characters only.
- Words are separated by one or more whitespace characters.

**Example:**

Assume that `words.txt` has the following content:

```
the day is sunny the the
the sunny is is
```

Your script should output the following, sorted by descending frequency:

```
the 4
is 3
sunny 2
day 1
```

**Note:**

- Don't worry about handling ties, it is guaranteed that each word's frequency count is unique.
- Could you write it in one-line using [Unix pipes](http://tldp.org/HOWTO/Bash-Prog-Intro-HOWTO-4.html)?

## Solution

[`solution.sh`](./solution.sh)

---

<sub>Pushed automatically by <b>CP-to-GitHub Sync</b>.</sub>
