class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const occMap = new Map<string, string[]>()
        for(const str of strs) {
            const currOcc: number[] = new Array(26).fill(0);
            for(const letter of str) {
                currOcc[letter.charCodeAt(0)-97]++;
            }
            const key = currOcc.join(",");
            if(!occMap.has(key)) {
                occMap.set(key, [str])
            } else {
                occMap.get(key)!.push(str);
            }
        }
        return Array.from(occMap.values());
    }
}
