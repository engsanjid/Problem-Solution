awk '{
    if (NR == 1) {
        n = $1
    } else {
        sum += $1
    }
} 
END {
    printf "%.3f\n", sum / n
}'
