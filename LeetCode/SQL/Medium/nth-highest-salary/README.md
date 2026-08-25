# Nth Highest Salary

> **LeetCode** · `SQL` · **Medium**

| Field | Value |
| :--- | :--- |
| Platform | LeetCode |
| Difficulty | Medium |
| Language | SQL |
| Problem | [Open on LeetCode](https://leetcode.com/problems/nth-highest-salary/) |
| Runtime | 542 ms (beats 28.90%) |
| Memory | 0B (beats 100.00%) |
| Test cases | 18 / 18 |
| Verdict | Accepted |
| Submission | `2119647638` |
| Tags | `Database` |
| Solved on | 2026-08-25 12:52 UTC |

## Problem

Table: `Employee`

```
+-------------+------+
| Column Name | Type |
+-------------+------+
| id | int |
| salary | int |
+-------------+------+
id is the primary key (column with unique values) for this table.
Each row of this table contains information about the salary of an employee.
```

Write a solution to find the `nth` highest **distinct** salary from the `Employee` table. If there are less than `n` distinct salaries, return `null`.

The result format is in the following example.

**Example 1:**

```
Input:
Employee table:
+----+--------+
| id | salary |
+----+--------+
| 1 | 100 |
| 2 | 200 |
| 3 | 300 |
+----+--------+
n = 2
Output:
+------------------------+
| getNthHighestSalary(2) |
+------------------------+
| 200 |
+------------------------+
```

**Example 2:**

```
Input:
Employee table:
+----+--------+
| id | salary |
+----+--------+
| 1 | 100 |
+----+--------+
n = 2
Output:
+------------------------+
| getNthHighestSalary(2) |
+------------------------+
| null |
+------------------------+
```

## Solution

[`solution.sql`](./solution.sql)

---

<sub>Pushed automatically by <b>CP-to-GitHub Sync</b>.</sub>
