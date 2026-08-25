/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    const m = s.length;
    const n = p.length;

    // dp[i][j] will be true if s[0...i-1] matches p[0...j-1]
    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(false));

    // Base case: empty string matches empty pattern
    dp[0][0] = true;

    // Handle patterns like a*, a*b*, or .* that can match an empty string s
    for (let j = 2; j <= n; j++) {
        if (p[j - 1] === '*') {
            dp[0][j] = dp[0][j - 2];
        }
    }

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            const charS = s[i - 1];
            const charP = p[j - 1];

            if (charP === charS || charP === '.') {
                // Direct character match
                dp[i][j] = dp[i - 1][j - 1];
            } else if (charP === '*') {
                // Case 1: Treat '*' as zero occurrences of preceding character
                dp[i][j] = dp[i][j - 2];

                // Case 2: Treat '*' as one or more occurrences if preceding char matches
                const prevCharP = p[j - 2];
                if (prevCharP === charS || prevCharP === '.') {
                    dp[i][j] = dp[i][j] || dp[i - 1][j];
                }
            }
        }
    }

    return dp[m][n];
};
