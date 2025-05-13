function sum(nums) {
    if (!nums.length) return 0

    return nums.pop() + sum(nums)
}