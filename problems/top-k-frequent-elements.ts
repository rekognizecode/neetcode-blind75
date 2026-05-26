class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const occMap = new Map<number, number>();
        nums.forEach(num => {
            const count = occMap.get(num) ?? 0;
            occMap.set(num, count + 1);
        })
        return Array.from(occMap.entries())
            .sort((a, b) => b[1] - a[1])
            .slice(0, k)
            .map(([num]) => num);
    }
}